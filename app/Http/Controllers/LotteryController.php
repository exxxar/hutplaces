<?php

namespace App\Http\Controllers;

use App\CardsStorageHUTDB;
use App\CardsStorageNHLHUT;
use App\Classes\CustomRandom;
use App\Classes\TelegramNotify;
use App\Enums\ConsoleType;
use App\Enums\GameType;
use App\Enums\ItemType;
use App\Enums\Lifetime;
use App\Enums\LotType;
use App\Events\AuctionNotification;
use App\Events\LotteryNotification;
use App\Events\RaffleNotification;
use App\Events\BroadcastMessage;
use App\Events\PickPlace;
use App\Item;
use App\Lot;
use App\Place;
use App\User;
use Carbon\Carbon;
use DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Lottery;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Storage;
use RandomOrg\Random;

class LotteryController extends Controller
{
    use TelegramNotify;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->ajax())
            return response()->json([
                'games' => Lottery::with(["placeList", "lot", "lot.card", "lot.item", "placeList.user"])
                    ->where("completed", "0")
                    ->where("visible", "1")
                    ->get(),

                'status' => 200
            ]);

        $lotteries = Lottery::orderBy('id', 'DESC')->paginate(15);
        return view('admin.lottery.index', compact('lotteries'))
            ->with('i', ($request->input('page', 1) - 1) * 15);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.lottery.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($request->ajax()) {

            $lottery = Lottery::find($request->get("id"));
            $lottery->is_only_one = $request->get("is_only_one");
            $lottery->completed = $request->get("completed");
            $lottery->visible = $request->get("visible");
            $lottery->active = $request->get("active");
            $lottery->console_type = ConsoleType::getInstance(intval($request->get("console_type")))->value;
            $lottery->updated_at = Carbon::now();
            $lottery->lifetime = Lifetime::getInstance(intval($request->get("lifetime")));
            $lottery->save();

            return response()
                ->json([
                    "status" => 200,
                    "message" => "Store success"
                ]);

        }


        $request->validate([
            'base_price' => 'numeric',
            'base_discount' => 'integer|min:0|max:2147483647',
            'places' => 'integer|min:1|max:2147483647',
            'occupied_places' => 'integer|min:1|max:2147483647',
            'lifetime' => 'integer|min:0|max:2147483647'
        ]);

        $input = $request->all();

        $lottery = Lottery::create($input);

        return redirect()->route('lottery.index')
            ->with('success', 'Lottery created successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {

        $lottery = Lottery::with(["placeList", "lot", "lot.card", "lot.item", "placeList.user", "winner"])->find($id);

        if (!$request->ajax())
            return view('admin.lottery.show', compact('lottery'));

        if ($lottery)
            return response()->json([
                'game' => $lottery,
                'status' => 200
            ]);

        return response()->json([
            'message' => "Лотерея не найдена",
        ], 404);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $lottery = Lottery::find($id);

        return view('admin.lottery.edit', compact('lottery'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {


        $request->validate([
            'base_price' => 'numeric',
            'base_discount' => 'integer|min:0|max:2147483647',
            'places' => 'integer|min:1|max:2147483647',
            'occupied_places' => 'integer|min:1|max:2147483647',
            'lifetime' => 'integer|min:0|max:2147483647'
        ]);

        $input = $request->all();

        $lottery = Lottery::find($id);
        $lottery->update($input);

        return redirect()->route('lottery.index')
            ->with('success', 'Lottery updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        if ($request->ajax()) {

            $lottery = Lottery::with(["placeList.user"])->find($request->get("id"));

            if ($lottery->completed != 1 || $lottery->occupied_places == 0) {

                Schema::disableForeignKeyConstraints();
                $price = ($lottery->base_price - $lottery->base_price * ($lottery->base_discount / 100)) / $lottery->places;

                foreach ($lottery->placeList as $place) {

                    $user = User::find($place->user->id);
                    $user->money += $price;
                    $user->save();

                    $place->delete();


                }

                $lottery->delete();
                Schema::enableForeignKeyConstraints();
            }

            return response()->json([
                'message' => "Lottery success deleted",
                'status' => 200
            ]);
        }

        DB::table("lotteries")->where('id', $request->get("id"))->delete();
        return redirect()->route('lottery.index')
            ->with('success', 'Lottery deleted successfully');
    }

    protected function sendOrderRequest($lotteryId,$cardId, $userId)
    {
        $user = User::find($userId);

        $card = CardsStorageNHLHUT::find($cardId);

        $start = strpos($card->card_art, "<img src=\"") + 10;
        $end = strpos($card->card_art, "\" width");
        $image = "https://nhlhutbuilder.com/" . substr($card->card_art, $start, $end - $start);

        Log::info($image);

        $this->photoMessage(sprintf(
            "<b>Выигрыш в лотерею!</b>\n"
            . "<b>Почта пользователя:</b> %s [%s]\n"
            ."http://hutplace.net/nhl/%s"
            ,
            $user->email, $user->name,$$lotteryId
        ),
            $image, env("TELEGRAM_ORDER_REQUEST_CHAT_ID"));
    }

    public function places($lotteryId)
    {
        $occupied_places = (Lottery::find($lotteryId))->occupied_places;

        $places = Place::with(["user"])->where("lottery_id", $lotteryId)->get();
        if ($places)
            return response()->json([
                'place_list' => $places,
                'occupied_places' => $occupied_places,
                'status' => 200
            ]);

        return response()->json([
            'message' => "Лотерея не найдена",
            'status' => 404
        ]);

    }

    public function buy(Request $request)
    {
        $lotteryId = $request->get("id");

        if (auth('api')->user() == null)
            return response()->json([
                'message' => 'Вы не авторизировались! Войдие в систему',
                'status' => 401
            ]);


        $lottery = Lottery::with(["lot", "lot.card"])
            ->where("id", $lotteryId)->first();


        if (!$lottery)
            return response()->json([
                'message' => 'Товар не найден',
                'status' => 404
            ]);


        $user = User::find(auth('api')->user()->id);


        //todo: добавить учет индивидуальной скидки пользователя
        $price = ($lottery->base_price - $lottery->base_price * ($lottery->base_discount / 100));

        if ($user->money <= $price) {
            return response()->json([
                'message' => 'У вас недостаточно средств!',
                'status' => 400
            ]);
        }

        $user->money -= $price;

        $user->cards()->attach($lottery->lot->card->id);
        $user->save();

        $this->sendOrderRequest($lottery->id,$lottery->lot->card->id, $user->id);

        return response()->json([
            'message' => 'Вы успешно купили товар!',
            'status' => 200
        ]);

    }

    public function winner($id)
    {

        $lottery = Lottery::find($id);
        return response()->json([
            'message' => 'Лотерея уже выиграна пользователем!',
            'winner' => $lottery->winner(),
            'status' => 200
        ]);
    }

    public function random(Request $request)
    {

        $lottery = Lottery::find($request->get("id"));

        $time = $lottery->lifetime->value;
        $timesArray = [1000, 6, 12, 24, 36, 48, 96, 128];

        $time_1 = (intval($timesArray[$time] * 60 * 60) + date_timestamp_get(new DateTime($lottery->updated_at == null ? $lottery->created_at : $lottery->updated_at)));
        $time_2 = date_timestamp_get(now());

        //лотерея уже законечена или не активна
        if ($lottery->isFull() || !$lottery->active || $lottery->completed || $time_1 < $time_2)
            return response()->json([
                'message' => 'Лотерея уже полная или закончилась',
                'status' => 400
            ]);

        if ($lottery->is_only_one == 1) {
            $currentPlace = Place::with(["user"])->where("lottery_id", $lottery->id)
                ->first();

            if ($currentPlace != null)
                return response()
                    ->json([
                        "status" => 200,
                        "message" => "Can take only one place"
                    ]);

        }


        $places = [];
        $occupied_places = Place::where("lottery_id", $request->get("id"))->get();
        if (count($occupied_places) > 0)
            foreach ($occupied_places as $place)
                array_push($places, $place->place_number);

        $tmp = [];
        for ($i = 0; $i < $lottery->places; $i++) {
            if (!in_array($i, $places))
                array_push($tmp, $i);

        }

        if (!$lottery->isFull() & count($tmp) > 0)
            return $this->pickPlace($request->get("id"), $tmp[random_int(0, count($tmp) - 1)]);
        else
            return response()->json([
                'message' => 'Лотерея уже полная или закончилась',
                'status' => 400
            ]);
    }

    private function pickPlace($lotteryId, $place_number)
    {


        if (auth('api')->user() == null)
            return response()->json([
                'message' => 'Вы не авторизировались! Войдие в систему',
                'status' => 401
            ]);

        //lottery id, place number
        $lottery = Lottery::find($lotteryId);
        if (!$lottery)
            return response()->json([
                'message' => 'Лотерея не найдена',
                'status' => 404
            ]);

        $user = User::find(auth('api')->user()->id);

        $time = $lottery->lifetime->value;
        $timesArray = [1000, 6, 12, 24, 36, 48, 96, 128];

        $time_1 = (intval($timesArray[$time] * 60 * 60) + date_timestamp_get(new DateTime($lottery->updated_at == null ? $lottery->created_at : $lottery->updated_at)));
        $time_2 = date_timestamp_get(now());


        //лотерея уже законечена или не активна
        if ($lottery->isFull() || $lottery->completed || $time_1 < $time_2)
            return response()->json([
                'message' => 'Лотерея уже полная или закончилась',
                'status' => 400
            ]);

        if (!$lottery->active)
            return response()->json([
                'message' => 'Данная карточка временно недоступна!',
                'status' => 400
            ]);

        //todo: добавить обработку скидк пользователя, учет процента владельца
        //вычисляем цену с учетом базовой скидки на карточку
        $price = ($lottery->base_price - $lottery->base_price * ($lottery->base_discount / 100)) / $lottery->places;

        if ($lottery->is_only_one == 1) {
            $currentPlace = Place::with(["user"])
                ->where("lottery_id", $lottery->id)
                ->where("user_id", $user->id)
                ->first();

            if ($currentPlace != null)
                return response()
                    ->json([
                        "status" => 200,
                        "message" => "В данном розыгрыше вы можете занять только одно место!"
                    ]);

        }


        $selectedPlace = Place::where("lottery_id", $lottery->id)
            ->where("place_number", $place_number)
            ->first();


        // место уже занято
        if ($selectedPlace != null)
            return response()->json([
                'message' => 'Данное место уже занято пользователем!',
                'status' => 400
            ]);

        //у пользователя нет денег,
        if ($user->money <= $price) {
            return response()->json([
                'message' => 'У вас недостаточно средств!',
                'status' => 400
            ]);
        }

        $place = Place::create([
            'place_number' => $place_number,
            'lottery_id' => $lottery->id,
            'user_id' => $user->id
        ]);

        $user->money = $user->money - $price;
        $user->save();

        $lottery->occupied_places += 1;
        $lottery->save();

        if ($lottery->occupied_places == $lottery->places) {
            $lottery->completed = true;
            $lottery->active = false;
            $lottery->visible = false;
            $random = new CustomRandom();

            $tmp = $random->getIntegers(1, 0, $lottery->places - 1, false);

            $random_string = json_encode($tmp["random"]);
            $signature = $tmp["signature"];

            $lottery->winner_place = $tmp["random"]["data"][0];

            $lottery->winner_id = (Place::where("place_number", $lottery->winner_place)
                ->where("lottery_id", $lottery->id)
                ->first())->user_id;

            $lottery->signature = $signature;
            $lottery->random = $random_string;
            $lottery->save();


            $winner = User::find($lottery->winner_id);

            $winner->lotteries()->attach($lottery->id);
            $winner->cards()->attach((Lot::where("lottery_id", $lottery->id)->first())->cards_id);

            $this->restart($lottery->id);

            $this->sendOrderRequest($lottery->lot->card->id, $winner->id);

            //отправляем всем пользоватемя в выбранной лотерее запрос на обновление данных
            broadcast(new RaffleNotification($lottery, $winner));

            $this->msg(
                sprintf(
                    "Последнее место занято, не пропусти розыгрыш!\nhttp://hutplace.net/nhl/%s ",
                    $lottery->id

                ),
                env("TELEGRAM_CHAT_ID")
            );

        }

        //отправляем всем пользователям на сайте инфуормацию о том что какой-то пользователя в лотерее выбрал определенное место
        broadcast(new PickPlace($user, $lottery, $place))->toOthers();

        return response()->json([
            'message' => 'Вы успешно заняли место!',
            'place' => $place->place_number,
            'status' => 200
        ]);
    }

    public function pick(Request $request)
    {

        return $this->pickPlace(
            $request->get("id"),
            $request->get("place_number")
        );

    }

    public function drafts(Request $request)
    {
        return response()->json([
            'games' => Lottery::with(["lot", "lot.card", "lot.item"])
                ->where("completed", "0")
                ->where(function ($query) {
                    $query->where('visible', 0)
                        ->orWhere('active', 0);
                })
                ->orderBy("id", "DESC")
                ->get(),
            'status' => 200
        ]);
    }

    public function history()
    {

        $tmp = [];
        $winLotteries = DB::table("lotteries")
            ->where("winner_id", "!=", "null")
            ->orderBy('id', 'desc')
            ->take(100)
            ->get();

        try {
            foreach ($winLotteries as $lottery) {
                array_push($tmp, [
                    "lottery_id" => $lottery->id,
                    "lottery_title" => empty($lottery->title) ? "<no title>" : $lottery->title,
                    "user_id" => Place::where("place_number", $lottery->winner_id)->first()->user_id,
                    "user_name" => User::find(Place::where("place_number", $lottery->winner_id)->first()->user_id)->name,
                    "end" => $lottery->updated_at,
                    "console_type" => $lottery->console_type
                ]);
            }
        } catch (\ErrorException $e) {
            $tmp = null;
        }

        return response()->json([
            'history' => $tmp,
            'status' => 200
        ]);
    }


    public function add(Request $request)
    {

        $imageName = null;

        $user = User::find(auth('api')->user()->id);

        if ($request->image != null && !is_string($request->image)) {

            $image = $request->image;
            $imageName = $image->hashName();
            $image->move(public_path() . '/img/cards', $imageName);
        }

        $lotType = $request->get("lot_type");

        $coins = null;
        $item = null;
        $card = null;

        switch ($lotType) {

            default:
            case 0:
            case 1:
                $item = Item::create([
                    "title" => $request->get("title"),
                    "description" => $request->get("description"),
                    "image" => $imageName,
                    "value" => $request->get("value"),
                    "type" => ItemType::getInstance(intval($request->get("lot_type")))->value,
                ]);
                break;
            case 2:
                $tmp = json_decode($request->get("card"), true);
                $card = CardsStorageNHLHUT::create($tmp);
                //  $card->card_synergies = json_encode($tmp["card_synergies"]);
                //$card->image = $imageName;
                // $card->save();
                break;


        }
        $lot = Lot::create([
            'coins' => $coins != null ? $coins : null,
            'items_id' => $item != null ? $item->id : null,
            'cards_id' => $card != null ? $card->id : null,
        ]);


        $lottery = Lottery::create([
            'title' => $request->get("title"),
            'console_type' => ConsoleType::getInstance(intval($request->get("console_type")))->value,
            'lot_type' => LotType::getInstance(intval($request->get("lot_type")))->value,
            'lot_id' => $lot->id,
            'game_type' => GameType::getInstance(intval($request->get("game_type")))->value,
            'base_price' => $request->get("base_price"),
            'base_discount' => $request->get("base_discount"),
            'places' => $request->get("places"),
            'visible' => 1,
            'is_only_one' => 0,
            'completed' => 0,
            'seller_id' => $user->id,
            'active' => $request->get("active"),
            'lifetime' => Lifetime::getInstance(intval($request->get("lifetime")))->value,
            'start_at' => Carbon::parse($request->get("start_at")),
            'updated_at' => Carbon::now(),
            'created_at' => Carbon::now(),
        ]);

        $lot->lottery_id = $lottery->id;
        $lot->save();

        $this->msg(
            sprintf(
                "Создан новый лот в разделе рандомов!\n<b>%s</b>\n\nhttp://hutplace.net/nhl",
                $lottery->title
            ),
            env("TELEGRAM_CHAT_ID")
        );

        broadcast(new LotteryNotification($lottery));

        return response()->json([
            'message' => 'Success lottery create!',
            'status' => 200
        ]);

    }

    protected function restart($id)
    {
        $win_lottery = Lottery::find($id);
        $draft_lottery = $win_lottery->replicate();

        $draft_lottery->completed = false;
        $draft_lottery->active = false;
        $draft_lottery->visible = false;
        $draft_lottery->random = "";
        $draft_lottery->signature = "";
        $draft_lottery->winner_place = null;
        $draft_lottery->winner_id = null;
        $draft_lottery->occupied_places = 0;

        $draft_lottery->save();
    }
}
