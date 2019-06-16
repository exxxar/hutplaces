<?php

namespace App\Http\Controllers;

use App\Promocodes;
use Illuminate\Http\Request;

class PromocodesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $promocodes = Promocodes::paginate(15);

        return view('admin.promocodes', ['promocodes' => $promocodes]);
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
        $input = $request->all(); 

        $promocodes = Promocodes::create($input); 

        return back()->with('success', 'Промокод успешно добавлен');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Promocodes  $promocodes
     * @return \Illuminate\Http\Response
     */
    public function show(Promocodes $promocodes)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Promocodes  $promocodes
     * @return \Illuminate\Http\Response
     */
    public function edit(Promocodes $promocodes)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Promocodes  $promocodes
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $input = $request->all(); 

        $promocodes = Promocodes::find($id);
        $promocodes->update($input);

        return back()->with('success', 'Промокод успешно отредактирован');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Promocodes  $promocodes
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $promocodes = Promocodes::find($id);
        $promocodes->delete();

        return back()->with('success', 'Промокод успешно удален');
    }
}
