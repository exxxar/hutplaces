<?php

namespace App\Http\Controllers;

use App\Events\NewRaffleNotification;
use App\Events\UserPickPlaceEvent;
use App\Place;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Lottery;
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
        $lotteries = Lottery::orderBy('id','DESC')->paginate(15);
        return view('admin.lottery.index',compact('lotteries'))
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'base_price'=> 'numeric',
            'base_discount' => 'integer|min:0|max:2147483647',
            'places' => 'integer|min:1|max:2147483647',
            'occupied_places' => 'integer|min:1|max:2147483647',
            'lifetime' => 'integer|min:0|max:2147483647'
        ]);

        $input = $request->all(); 

        $lottery = Lottery::create($input); 

        return redirect()->route('lottery.index')
            ->with('success','Lottery created successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $lottery = Lottery::find($id);
        return view('admin.lottery.show',compact('lottery'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $lottery = Lottery::find($id);

        return view('admin.lottery.edit',compact('lottery'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'base_price'=> 'numeric',
            'base_discount' => 'integer|min:0|max:2147483647',
            'places' => 'integer|min:1|max:2147483647',
            'occupied_places' => 'integer|min:1|max:2147483647',
            'lifetime' => 'integer|min:0|max:2147483647'
        ]);
        
        $input = $request->all(); 

        $lottery = Lottery::find($id);
        $lottery->update($input);

        return redirect()->route('lottery.index')
            ->with('success','Lottery updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DB::table("lotteries")->where('id',$id)->delete();
        return redirect()->route('lottery.index')
            ->with('success','Lottery deleted successfully');
    }

    public function all(){
        return response()->json([
            'data' =>  Lottery::all(),
            'status' => 200
        ]);
    }

    public function byId($lotteryId){
        return response()->json([
            'data' =>  Lottery::find($lotteryId),
            'status' => 200
        ]);
    }

    public function pickPlace(Request $request){

        //lottery id, place number
        $lottery = Lottery::find($request->get("id"));
        $place_number = $request->get("place_number");
        $user = User::find(auth()->user()->id);

        //лотерея уже законечена или не активна
        if ($lottery->isFull()||!$lottery->active||$lottery->completed)
            return response()->json([
            'message' => 'Лотерея уже полная или закончилась',
            'status' => 200
        ]);

        //вычисляем цену с учетом базовой скидки на карточку
        $price = $lottery->base_price-$lottery->base_price*($lottery->base_discount/100);

        $selectedPlace = Place::where("lottery_id",$lottery->id)
            ->where("place_number",$place_number)
            ->first();

        // место уже занято
        if ($selectedPlace!=null)
            return response()->json([
                'message' => 'Данное место уже занято пользователем!',
                'status' => 200
            ]);

        //у пользователя нет денег,
        if ($user->money<=$price) {
            return response()->json([
                'message' => 'У вас недостаточно средств!',
                'status' => 200
            ]);
        }

        $place = Place::create([
            'place_number'=>$place_number,
            'lottery_id'=>$lottery->id,
            'user_id'=>$user->id
        ]);

        $user->money = $user->money-$price;
        $user->save();

        $lottery->occupied_place +=1;
        $lottery->save();

        if ($lottery->occupied_place+1==$lottery->places)
        {
            $lottery->completed = true;
            $lottery->active = false;
            $lottery->visible = false;
            $random = new Random(env('RANDOM_ORG_API_KEY'));
            $lottery->winner_id=$random->generateIntegers(1, 1, $lottery->places, false);
            $lottery->save();

            //отправляем всем пользоватемя в выбранной лотерее запрос на обновление данных
            broadcast(new NewRaffleNotification($lottery))->toOthers();
        }

        //отправляем всем пользователям на сайте инфуормацию о том что какой-то пользователя в лотерее выбрал определенное место
        broadcast(new UserPickPlaceEvent($user,$lottery, $place))->toOthers();

        return response()->json([
            'data' => 'Вы успешно заняли место!',
            'place'=>$place->place_number,
            'status' => 200
        ]);
    }
}
