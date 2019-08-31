<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Auction;
use App\Lot;

class AuctionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if ($request->ajax())
            return response()->json([
                'games' => Auction::with(["lot", "lot.card"])->get(),
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
     * @param  \Illuminate\Http\Request  $request
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
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
     * @param  int  $id
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
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DB::table("auctions")->where('id', $id)->delete();
        return redirect()->route('auction.index')
            ->with('success', 'Auction deleted successfully');
    }
}
