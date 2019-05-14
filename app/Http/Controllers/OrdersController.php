<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Orders;

class OrdersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $orders = Orders::paginate(15);

        return view('admin.orders', ['orders' => $orders]);
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
            'title'=>'required',
            'count'=> 'numeric',
            'price' => 'numeric',
            'quantity' => 'integer'
        ]);

        $order = new Orders([
            'title' => $request->input('title'),
            'currency' => $request->input('currency'),
            'count' => $request->input('count'),
            'price' => $request->input('price'),
            'payment_provider' => $request->input('payment_provider'),
            'quantity' => $request->input('quantity')
        ]);
        $order->save();

        return back()->with('success', 'Заказ успешно добавлен');
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
            'title'=>'required',
            'count'=> 'numeric',
            'price' => 'numeric',
            'quantity' => 'integer'
        ]);

        $order = Orders::find($id);
        $order->title = $request->input('title');
        $order->currency = $request->input('currency');
        $order->count = $request->input('count');
        $order->price = $request->input('price');
        $order->payment_provider = $request->input('payment_provider');
        $order->quantity = $request->input('quantity');
        $order->save();

        return back()->with('success', 'Заказ успешно отредактирован');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $order = Orders::find($id);
        $order->delete();

        return back()->with('success', 'Заказ успешно удален');
    }
}
