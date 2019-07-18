<?php

namespace App\Http\Controllers;

use App\Promocode;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class PromocodesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $promocodes = Promocode::orderBy('id','DESC')->paginate(15);
        return view('admin.promo.index',compact('promocodes'))
            ->with('i', ($request->input('page', 1) - 1) * 15);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.promo.create');
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
            'lifetime' => 'integer|min:0|max:2147483647',
            'activation_count' => 'integer|min:0|max:2147483647',
            'count' => 'integer|min:0|max:2147483647',
            'exp' => 'integer|min:0|max:2147483647',
            'discount' => 'integer|min:0|max:2147483647',
            'money' => 'numeric',
        ]);

        $input = $request->all(); 

        $promocodes = Promocode::create($input);

        return redirect()->route('promo.index')
            ->with('success','Promocode created successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Promocode  $promocodes
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $promocode = Promocode::find($id);
        return view('admin.promo.show',compact('promocode'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Promocode  $promocodes
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $promocode = Promocode::find($id);

        return view('admin.promo.edit',compact('promocode'));
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
            'lifetime' => 'integer|min:0|max:2147483647',
            'activation_count' => 'integer|min:0|max:2147483647',
            'count' => 'integer|min:0|max:2147483647',
            'exp' => 'integer|min:0|max:2147483647',
            'discount' => 'integer|min:0|max:2147483647',
            'money' => 'numeric',
        ]);
        
        $input = $request->all(); 

        $promocodes = Promocode::find($id);
        $promocodes->update($input);

        return redirect()->route('promo.index')
            ->with('success','Promocode updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Promocode  $promocodes
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DB::table("promocodes")->where('id',$id)->delete();
        return redirect()->route('promo.index')
            ->with('success','Promocode deleted successfully');
    }
}
