<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Place;

class PlacesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $places = Place::paginate(15);

        return view('admin.places', ['places' => $places]);
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
            'place_number' => 'integer'
        ]);

        $place = new Place([
            'place_number' => $request->input('place_number'),
            'lottery_id'=> $request->input('lottery_id'),
            'user_id'=> $request->input('user_id')
        ]);
        $place->save();

        return back()->with('success', 'Место успешно добавлено');
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
            'place_number' => 'integer'
        ]);

        $place = Place::find($id);
        $place->place_number = $request->input('place_number');
        $place->lottery_id = $request->input('lottery_id');
        $place->user_id = $request->input('user_id');
        $place->save();

        return back()->with('success', 'Место успешно отредактировано');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $place = Place::find($id);
        $place->delete();

        return back()->with('success', 'Место успешно удалено');
    }
}
