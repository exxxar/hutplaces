<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Lottery;

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

        return view('admin.levels.edit',compact('lottery'));
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
}
