<?php

namespace App\Http\Controllers;

use App\Promocode;
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
        $promocodes = Promocode::paginate(15);

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
        $request->validate([
            'lifetime' => 'integer',
            'activation_count' => 'integer',
            'count' => 'integer',
            'exp' => 'integer',
            'discount' => 'integer',
            'money' => 'numeric',
        ]);

        $input = $request->all(); 

        $promocodes = Promocode::create($input); 

        return back()->with('success', 'Промокод успешно добавлен');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Promocode  $promocodes
     * @return \Illuminate\Http\Response
     */
    public function show(Promocode $promocodes)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Promocode  $promocodes
     * @return \Illuminate\Http\Response
     */
    public function edit(Promocode $promocodes)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Promocode  $promocodes
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'lifetime' => 'integer',
            'activation_count' => 'integer',
            'count' => 'integer',
            'exp' => 'integer',
            'discount' => 'integer',
            'money' => 'numeric',
        ]);
        
        $input = $request->all(); 

        $promocodes = Promocode::find($id);
        $promocodes->update($input);

        return back()->with('success', 'Промокод успешно отредактирован');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Promocode  $promocodes
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $promocodes = Promocode::find($id);
        $promocodes->delete();

        return back()->with('success', 'Промокод успешно удален');
    }
}
