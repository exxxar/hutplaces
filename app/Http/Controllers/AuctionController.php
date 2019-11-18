<?php

namespace App\Http\Controllers;

use App\CardsStorage;
use App\Classes\TelegramNotify;
use App\Enums\ConsoleType;
use App\Enums\GameType;
use App\Enums\ItemType;
use App\Enums\Lifetime;
use App\Enums\LotType;
use App\Events\AuctionNotification;
use App\Item;
use App\User;
use DateTime;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use App\Auction;
use App\Lot;

class AuctionController extends Controller
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
                'auctions' => Auction::with(["lot", "lot.card", "buyer", "seller"])->get(),
                'status' => 200
            ]);

        $auctions = Auction::orderBy('id', 'DESC')->paginate(15);
        return view('admin.auction.index', compact('auctions'))
            ->with('i', ($request->input('page', 1) - 1) * 15);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.auction.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $input = $request->all();

        $auction = Auction::create($input);

        return redirect()->route('auction.index')
            ->with('success', 'Auction created successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        $auction = Auction::with(["lot", "lot.card"])->find($id);

        if (!$request->ajax())
            return view('admin.auction.show', compact('auction'));

        if ($auction)
            return response()->json([
                'game' => $auction,
                'status' => 200
            ]);

        return response()->json([
            'message' => "Аукцион не найден",
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
        $auction = Auction::find($id);

        return view('admin.auction.edit', compact('auction'));
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
        $input = $request->all();

        $auction = Auction::find($id);
        $auction->update($input);

        return redirect()->route('auction.index')
            ->with('success', 'Auction updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DB::table("auctions")->where('id', $id)->delete();
        return redirect()->route('auction.index')
            ->with('success', 'Auction deleted successfully');
    }

    //mybids, mylots, addLot, getLifetimes,getConsoleTypes

    public function addLot(Request $request)
    {

        $user = User::find(auth("api")->user()->id);

        if (!$user->is_trader)
            return response()
                ->json([
                    "status" => 200,
                    "message" => "You aren't trader! Please request trader's role!"
                ]);

        $imageName = null;

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
                $card = CardsStorage::create($tmp);
                $card->card_synergies = json_encode($tmp["card_synergies"]);
                $card->image = $imageName;
                $card->save();
                break;


        }
        $lot = Lot::create([
            'coins' => $coins != null ? $coins : null,
            'items_id' => $item != null ? $item->id : null,
            'cards_id' => $card != null ? $card->id : null,
        ]);


        $auc = Auction::create([
            'title' => $request->get("title"),
            'console_type' => ConsoleType::getInstance(intval($request->get("console_type")))->value,
            'lot_type' => LotType::getInstance(intval($request->get("lot_type")))->value,
            'lot_id' => $lot->id,
            'game_type' => GameType::getInstance(intval($request->get("game_type")))->value,
            'step_price' => $request->get("step_price"),
            'bid_price' => $request->get("bid_price"),
            'buy_price' => $request->get("buy_price"),
            'lifetime' => Lifetime::getInstance(intval($request->get("lifetime")))->value,
            'is_active' => $request->get("active"),
            'seller_id' => $user->id,
        ]);

        $this->msg(
            sprintf(
                "Создан новый лот на аукционе!\n<b>%s</b>\n\nhttp://hutplace.net/auction",
                $auc->title
            )
        );

        return response()
            ->json([
                "status" => 200,
                "message" => "Success"
            ]);

    }

    public function all(Request $request)
    {
        if (!$request->ajax())
            response()->json([
                'message' => "Error",
                'status' => 200]);


        $type = $request->get("type");

        if (auth("api")->user() == null && $request->get("type") != 0)
            return response()->json([
                'auctions' => [],
                'status' => 200
            ]);


        foreach (Auction::all() as $auc) {
            $time = $auc->lifetime->value;
            $timesArray = [1000, 6, 12, 24, 36, 48, 96, 128];

            $time_1 = (intval($timesArray[$time] * 60 * 60) + date_timestamp_get(
                    new DateTime($auc->updated_at == null ? $auc->created_at : $auc->updated_at))
            );

            $time_2 = date_timestamp_get(now());

            if ($auc->is_active == 1 && $time_1 < $time_2 && $auc->buyer_id != null) {
                $user = User::find($auc->buyer_id);

                $lot = (Lot::where("id", $auc->lot_id)->first());
                $card_id = $lot->cards_id;
                $item_id = $lot->items_id;

                if ($card_id != null)
                    $user->cards()->attach($card_id);

                if ($item_id != null)
                    $user->items()->attach($item_id);

                $auc->is_active = 0;

                $auc->save();
            }

            if ($auc->is_active == 1 && $time_1 < $time_2 && $auc->buyer_id == null) {
                $auc->is_active = 0;
                $auc->save();
            }
        }


        switch (intval($type)) {
            default:
            case 0: //all
                return response()->json([
                    'auctions' => Auction::with(["lot", "lot.card", "lot.item", "buyer", "seller"])->get(),
                    'status' => 200
                ]);

            case 1: //bids
                return response()->json([
                    'auctions' => Auction::with(["lot", "lot.card", "lot.item"])
                        ->where("buyer_id", auth("api")->user()->id)
                        ->get(),
                    'status' => 200
                ]);
            case 2: //mylots

                return response()->json([
                    'auctions' => Auction::with(["lot", "lot.card", "lot.item", "buyer", "seller"])
                        ->where("seller_id", auth("api")->user()->id)
                        ->get(),
                    'status' => 200
                ]);
        }
    }

    public function cancelLot(Request $request, $id)
    {
        Auction::where("seller_id", auth("api")->user()->id)
            ->where("id", $id)
            ->delete();

        return redirect()
            ->route("mylots");
    }


    public function updateLot(Request $request)
    {
        try {
            $auc = Auction::find($request->get("id"));
            $auc->is_active = $request->get("active");
            $auc->lifetime = Lifetime::getInstance(intval($request->get("lifetime")))->value;
            $auc->updated_at = date('Y-m-d G:i:s');
            $auc->save();

            return response()
                ->json([
                    "status" => 200,
                    "message" => "Lot update success!"
                ]);
        } catch (QueryException $e) {
            return response()
                ->json([
                    "status" => 200,
                    "message" => "Lot update error!"
                ]);
        }

    }

    public function buyLot(Request $request)
    {

        $user = User::find(auth("api")->user()->id);


        $id = $request->get("id");
        $auc = Auction::whith(["lot", "lot.card", "lot.item"])->find($id);

        $time = $auc->lifetime->value;
        $timesArray = [1000, 6, 12, 24, 36, 48, 96, 128];

        $time_1 = (intval($timesArray[$time] * 60 * 60) + date_timestamp_get(
                new DateTime($auc->updated_at == null ? $auc->created_at : $auc->updated_at))
        );

        $time_2 = date_timestamp_get(now());


        if ($auc->is_active == 0 || $time_1 < $time_2)
            return response()
                ->json([
                    "message" => "Auction is not active at this moment!",
                    "status" => 200,
                ]);

        if ($user->money < $auc->buy_price)
            return response()
                ->json([
                    "message" => "You haven't money to buy this lot!",
                    "status" => 200,
                ]);

        $user->money -= $auc->buy_price;

        $auc->buyer_id = $user->id;

        $lot = (Lot::where("id", $auc->lot_id)->first());
        $card_id = $lot->cards_id;
        $item_id = $lot->items_id;

        if ($card_id != null)
            $user->cards()->attach($card_id);

        if ($item_id != null)
            $user->items()->attach($item_id);

        $auc->is_active = 0;
        $auc->save();

        broadcast(new AuctionNotification($auc));

        return response()
            ->json([
                "message" => "Success!",
                "status" => 200,
            ]);
    }

    public function bidLot(Request $request)
    {
        $user = User::find(auth("api")->user()->id);


        $id = $request->get("id");
        $auc = Auction::whith(["lot", "lot.card", "lot.item"])->find($id);

        $time = $auc->lifetime->value;
        $timesArray = [1000, 6, 12, 24, 36, 48, 96, 128];

        $time_1 = (intval($timesArray[$time] * 60 * 60) + date_timestamp_get(
                new DateTime($auc->updated_at == null ? $auc->created_at : $auc->updated_at))
        );

        $time_2 = date_timestamp_get(now());


        if ($auc->is_active == 0 || $time_1 < $time_2)
            return response()
                ->json([
                    "message" => "Auction is not active at this moment!",
                    "status" => 200,
                ]);

        if ($user->money < ($auc->bid_price + $auc->step_price))
            return response()
                ->json([
                    "message" => "You haven't money to make bid on this lot!",
                    "status" => 200,
                ]);


        if ($auc->bid_price + $auc->step_price >= $auc->buy_price) {
            $user->money -= $auc->buy_price;

            $auc->buyer_id = $user->id;

            $lot = (Lot::where("id", $auc->lot_id)->first());
            $card_id = $lot->cards_id;
            $item_id = $lot->items_id;

            if ($card_id != null)
                $user->cards()->attach($card_id);

            if ($item_id != null)
                $user->items()->attach($item_id);

            $auc->is_active = 0;
        } else {
            $auc->bid_price += $auc->step_price;
            $auc->buyer_id = $user->id;
        }

        $auc->save();

        broadcast(new AuctionNotification($auc));

        return response()
            ->json([
                "message" => "Success!",
                "status" => 200,
            ]);

    }
}
