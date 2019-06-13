<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Lottery;

class LotteryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $lotteries = Lottery::paginate(15);

        return view('admin.lottery', ['lotteries' => $lotteries]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
            'base_discount' => 'integer',
            'places' => 'integer',
            'occupied_places' => 'integer',
            'lifetime' => 'integer'
        ]);

        $lottery = new Lottery([
            'title' => $request->input('title'),
            'console_type'=> $request->input('console_type'),
            'lot_type'=> $request->input('lot_type'),
            'game_type' => $request->input('game_type'),
            'base_price'=> $request->input('base_price'),
            'base_discount'=> $request->input('base_discount'),
            'places' => $request->input('places'),
            'winner_id'=> $request->input('winner_id'),
            'occupied_places'=> $request->input('occupied_places'),
            'next_lottery_id' => $request->input('next_lottery_id'),
            'prev_lottery_id'=> $request->input('prev_lottery_id'),
            'visible'=> $request->input('visible'),
            'is_only_one' => $request->input('is_only_one'),
            'completed'=> $request->input('completed'),
            'active'=> $request->input('active'),
            'lifetime' => $request->input('lifetime')
        ]);
        $lottery->save();

        return back()->with('success', 'Розыгрыш успешно добавлен');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
            'base_discount' => 'integer',
            'places' => 'integer',
            'occupied_places' => 'integer',
            'lifetime' => 'integer'
        ]);
        
        $lottery = Lottery::find($id);
        $lottery->title = $request->input('title');
        $lottery->console_type = $request->input('console_type');
        $lottery->lot_type = $request->input('lot_type');
        $lottery->game_type = $request->input('game_type');
        $lottery->base_price = $request->input('base_price');
        $lottery->base_discount = $request->input('base_discount');
        $lottery->places = $request->input('places');
        $lottery->winner_id = $request->input('winner_id');
        $lottery->occupied_places = $request->input('occupied_places');
        $lottery->next_lottery_id = $request->input('next_lottery_id');
        $lottery->prev_lottery_id = $request->input('prev_lottery_id');
        $lottery->visible = $request->input('visible');
        $lottery->is_only_one = $request->input('is_only_one');
        $lottery->completed = $request->input('completed');
        $lottery->active = $request->input('active');
        $lottery->lifetime = $request->input('lifetime');
        $lottery->save();

        return back()->with('success', 'Розыгрыш успешно отредактирован');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $lottery = Lottery::find($id);
        $lottery->delete();

        return back()->with('success', 'Розыгрыш успешно удален');
    }
}
