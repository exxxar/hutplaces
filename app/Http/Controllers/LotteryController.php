<?php

namespace App\Http\Controllers;

use App\Classes\CustomRandom;
use App\Events\RaffleNotification;
use App\Events\BroadcastMessage;
use App\Events\PickPlace;
use App\Lot;
use App\Place;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Lottery;
use Illuminate\Support\Facades\Log;
use RandomOrg\Random;

class LotteryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->ajax())
            return response()->json([
                'games' => Lottery::with(["placeList", "lot", "lot.card", "placeList.user"])->get(),
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
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
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
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {

        $lottery = Lottery::with(["placeList", "lot", "lot.card", "placeList.user"])->find($id);

        if (!$request->ajax())
            return view('admin.lottery.show', compact('lottery'));

        if ($lottery)
            return response()->json([
                'game' => $lottery,
                'status' => 200
            ]);

        return response()->json([
            'message' => "Лотерея не найдена",
            'status' => 404
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
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
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
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
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DB::table("lotteries")->where('id', $id)->delete();
        return redirect()->route('lottery.index')
            ->with('success', 'Lottery deleted successfully');
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

        //лотерея уже законечена или не активна
        if ($lottery->isFull() || !$lottery->active || $lottery->completed)
            return response()->json([
                'message' => 'Лотерея уже полная или закончилась',
                'status' => 400
            ]);

        //todo: добавить обработку скидк пользователя, учет процента владельца
        //вычисляем цену с учетом базовой скидки на карточку
        $price = ($lottery->base_price - $lottery->base_price * ($lottery->base_discount / 100)) / $lottery->places;

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

        if ($lottery->occupied_places  == $lottery->places) {
            $lottery->completed = true;
            $lottery->active = false;
            $lottery->visible = false;
            $random = new CustomRandom();
            $lottery->winner_id = $random->getIntegers(1, 1, $lottery->places, false)[0];
            $lottery->save();

            $winUser_id = (Place::where("place_number",$lottery->winner_id)
                ->where("lottery_id",$lottery->id)
                ->first())->user_id;

            $winner = User::find($winUser_id);

            $winner->lotteries()->attach($lottery->id);
            $winner->cards()->attach((Lot::where("lottery_id",$lottery->id)->first())->cards_id);

            //отправляем всем пользоватемя в выбранной лотерее запрос на обновление данных
            broadcast(new RaffleNotification($lottery,$winner));

        }

        //отправляем всем пользователям на сайте инфуормацию о том что какой-то пользователя в лотерее выбрал определенное место
        broadcast(new PickPlace($user, $lottery, $place))->toOthers();

        return response()->json([
            'message' => 'Вы успешно заняли место!',
            'place' => $place->place_number,
            'status' => 200
        ]);
    }

    public function buy(Request $request)
    {
        $lotteryId  = $request->get("id");

        if (auth('api')->user() == null)
            return response()->json([
                'message' => 'Вы не авторизировались! Войдие в систему',
                'status' => 401
            ]);


        $lottery = Lottery::with(["lot","lot.card"])
            ->where("id",$lotteryId)->first();


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

        $user->money -=$price;

        $user->cards()->attach($lottery->lot->card->id);
        $user->save();

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

        if (!$lottery->isFull()&count($tmp)>0)
            return $this->pickPlace($request->get("id"), $tmp[random_int(0, count($tmp)-1)]);
        else
            return response()->json([
                'message' => 'Лотерея уже полная или закончилась',
                'status' => 400
            ]);
    }

    public function pick(Request $request)
    {

        return $this->pickPlace(
            $request->get("id"),
            $request->get("place_number")
        );

    }

    public function history(){

        $tmp = [];
        $winLotteries = DB::table("lotteries")
            ->where("winner_id","!=","null")
            ->orderBy('id', 'desc')
            ->take(100)
            ->get();

        foreach ($winLotteries as $lottery){
            array_push($tmp,[
                "lottery_id"=>$lottery->id,
                "lottery_title"=>empty($lottery->title)?"<no title>":$lottery->title,
                "user_id"=>Place::where("place_number",$lottery->winner_id)->first()->user_id,
                "user_name"=>User::find(Place::where("place_number",$lottery->winner_id)->first()->user_id)->name,
                "end"=>$lottery->updated_at,
                "console_type"=>$lottery->console_type
            ]);
        }
        return response()->json([
            'history' => $tmp,
            'status' => 200
        ]);
    }

}
