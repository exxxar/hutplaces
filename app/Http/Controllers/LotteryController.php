<?php

namespace App\Http\Controllers;

use App\Classes\CustomRandom;
use App\Events\RaffleNotification;
use App\Events\BroadcastMessage;
use App\Events\PickPlace;
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
    public function show($id)
    {
        $lottery = Lottery::find($id);
        return view('admin.lottery.show', compact('lottery'));
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

    public function all()
    {
        return response()->json([
            'data' => Lottery::with(["lot", "lot.card"])->get(),
            'status' => 200
        ]);
    }

    public function lottery($lotteryId)
    {
        $lottery = Lottery::with(["placeList", "lot", "lot.card", "placeList.user"])->find($lotteryId);
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

    public function places($lotteryId)
    {
        $places = Place::with(["user"])->where("lottery_id", $lotteryId)->get();
        if ($places)
            return response()->json([
                'place_list' => $places,
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

        if ($lottery->occupied_place + 1 == $lottery->places) {
            $lottery->completed = true;
            $lottery->active = false;
            $lottery->visible = false;
            $random = new CustomRandom();
            $lottery->winner_id = $random->getIntegers(1, 1, $lottery->places, false);
            $lottery->save();

            //отправляем всем пользоватемя в выбранной лотерее запрос на обновление данных
            broadcast(new RaffleNotification($lottery))->toOthers();
        }

        //отправляем всем пользователям на сайте инфуормацию о том что какой-то пользователя в лотерее выбрал определенное место
        broadcast(new PickPlace($user, $lottery, $place))->toOthers();

        return response()->json([
            'message' => 'Вы успешно заняли место!',
            'place' => $place->place_number,
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

        return $this->pickPlace($request->get("id"), $tmp[random_int(0, count($tmp))]);

    }

    public function pick(Request $request)
    {

        return $this->pickPlace(
            $request->get("id"),
            $request->get("place_number")
        );

    }
}
