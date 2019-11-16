<?php

namespace App\Http\Controllers;

use App\CardsStorage;
use App\Lottery;
use ErrorException;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;


class CardsStorageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $cardstorages = CardsStorage::orderBy('id', 'DESC')->paginate(15);
        return view('admin.cardstorage.index', compact('cardstorages'))
            ->with('i', ($request->input('page', 1) - 1) * 15);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.cardstorage.create');
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
            'ACC_AGI' => 'integer|min:0|max:2147483647',
            'AGI_DUR' => 'integer|min:0|max:2147483647',
            'AGR' => 'integer|min:0|max:2147483647',
            'BAL_END' => 'integer|min:0|max:2147483647',
            'BLK_REC' => 'integer|min:0|max:2147483647',
            'CHK' => 'integer|min:0|max:2147483647',
            'CHK_POS' => 'integer|min:0|max:2147483647',
            'DAW_PPF' => 'integer|min:0|max:2147483647',
            'DEF_RBC' => 'integer|min:0|max:2147483647',
            'DEK_ANG' => 'integer|min:0|max:2147483647',
            'DIS_PAS' => 'integer|min:0|max:2147483647',
            'DUR' => 'integer|min:0|max:2147483647',
            'END_SPD' => 'integer|min:0|max:2147483647',
            'FO_RC' => 'integer|min:0|max:2147483647',
            'FS' => 'integer|min:0|max:2147483647',
            'HAE_BRK' => 'integer|min:0|max:2147483647',
            'HND_QCK' => 'integer|min:0|max:2147483647',
            'OAW_POI' => 'integer|min:0|max:2147483647',
            'OVR' => 'integer|min:0|max:2147483647',
            'PAS_FH' => 'integer|min:0|max:2147483647',
            'PC_GLH' => 'integer|min:0|max:2147483647',
            'POI_PKC' => 'integer|min:0|max:2147483647',
            'SCH' => 'integer|min:0|max:2147483647',
            'SHT_LOW' => 'integer|min:0|max:2147483647',
            'SKT_HGH' => 'integer|min:0|max:2147483647',
            'SPD_VIS' => 'integer|min:0|max:2147483647',
            'SSA_GLL' => 'integer|min:0|max:2147483647',
            'SSP_STH' => 'integer|min:0|max:2147483647',
            'STR' => 'integer|min:0|max:2147483647',
            'WGT' => 'integer|min:0|max:2147483647',
            'WSA_STL' => 'integer|min:0|max:2147483647',
            'WSP_AGG' => 'integer|min:0|max:2147483647',
            'Year' => 'integer|min:0|max:2147483647',
            'aOVR' => 'integer|min:0|max:2147483647',
            'age' => 'integer|min:0|max:2147483647',
            'hutdb_id' => 'integer|min:0|max:2147483647',
            'jersey' => 'integer|min:0|max:2147483647',
            'create_date' => 'date_format:Y-m-d H:i:s',
        ]);

        $input = $request->all();

        $cardstorage = CardsStorage::create($input);

        return redirect()->route('cardstorage.index')
            ->with('success', 'Card created successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\CardsStorage $cardsStorage
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $cardstorage = CardsStorage::find($id);
        return view('admin.cardstorage.show', compact('cardstorage'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\CardsStorage $cardsStorage
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $cardstorage = CardsStorage::find($id);
        return view('admin.cardstorage.edit', compact('cardstorage'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\CardsStorage $cardsStorage
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'ACC_AGI' => 'integer|min:0|max:2147483647',
            'AGI_DUR' => 'integer|min:0|max:2147483647',
            'AGR' => 'integer|min:0|max:2147483647',
            'BAL_END' => 'integer|min:0|max:2147483647',
            'BLK_REC' => 'integer|min:0|max:2147483647',
            'CHK' => 'integer|min:0|max:2147483647',
            'CHK_POS' => 'integer|min:0|max:2147483647',
            'DAW_PPF' => 'integer|min:0|max:2147483647',
            'DEF_RBC' => 'integer|min:0|max:2147483647',
            'DEK_ANG' => 'integer|min:0|max:2147483647',
            'DIS_PAS' => 'integer|min:0|max:2147483647',
            'DUR' => 'integer|min:0|max:2147483647',
            'END_SPD' => 'integer|min:0|max:2147483647',
            'FO_RC' => 'integer|min:0|max:2147483647',
            'FS' => 'integer|min:0|max:2147483647',
            'HAE_BRK' => 'integer|min:0|max:2147483647',
            'HND_QCK' => 'integer|min:0|max:2147483647',
            'OAW_POI' => 'integer|min:0|max:2147483647',
            'OVR' => 'integer|min:0|max:2147483647',
            'PAS_FH' => 'integer|min:0|max:2147483647',
            'PC_GLH' => 'integer|min:0|max:2147483647',
            'POI_PKC' => 'integer|min:0|max:2147483647',
            'SCH' => 'integer|min:0|max:2147483647',
            'SHT_LOW' => 'integer|min:0|max:2147483647',
            'SKT_HGH' => 'integer|min:0|max:2147483647',
            'SPD_VIS' => 'integer|min:0|max:2147483647',
            'SSA_GLL' => 'integer|min:0|max:2147483647',
            'SSP_STH' => 'integer|min:0|max:2147483647',
            'STR' => 'integer|min:0|max:2147483647',
            'WGT' => 'integer|min:0|max:2147483647',
            'WSA_STL' => 'integer|min:0|max:2147483647',
            'WSP_AGG' => 'integer|min:0|max:2147483647',
            'Year' => 'integer|min:0|max:2147483647',
            'aOVR' => 'integer|min:0|max:2147483647',
            'age' => 'integer|min:0|max:2147483647',
            'hutdb_id' => 'integer|min:0|max:2147483647',
            'jersey' => 'integer|min:0|max:2147483647',
            'create_date' => 'date_format:Y-m-d H:i:s',
        ]);

        $input = $request->all();

        $cardstorage = CardsStorage::find($id);
        $cardstorage->update($input);

        return redirect()->route('cardstorage.index')
            ->with('success', 'Card updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\CardsStorage $cardsStorage
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DB::table("cards_storage")->where('id', $id)->delete();
        return redirect()->route('cardstorage.index')
            ->with('success', 'Card deleted successfully');
    }

    public function search(Request $request)
    {
        try {
            $content = file_get_contents($request->url);
        } catch (ErrorException $e) {
            $content = [];
        }


        return $content;
    }

    public function cards()
    {
        $cards = [];
        return view('admin.cards', compact('cards'));
    }

    public function add(Request $request)
    {

        // Log::info(var_dump($request->get("data")));

        $price = $request->get("data")["price"];
        $places = $request->get("data")["places"];
        $console = $request->get("data")["console"];

        $id = $request->get("data")["card"]["id"];
        $card = CardsStorage::create($request->get("data")["card"]);

        $content = file_get_contents("https://hutdb.net/ajax/id.php?size=0&id=" . $id);
        $content = str_replace("/assets", "https://hutdb.net/assets", json_decode($content)->value);
        $result = json_encode(["value" => $content]);

        $card->Card_data = $result;
        $card->save();

        $lottery = Lottery::create([
            'title' => "",
            'console_type' => $console,
            'lot_type' => 0,
            'game_type' => 0,
            'base_price' => $price,
            'base_discount' => 0,
            'places' => $places,
            'occupied_places' > 0,
            'visible' => 0,
            'is_only_one' => false,
            'completed' => false,
            'active' => false,
            'lifetime' => 0
        ]);

        $lot = $lottery->lot()->create([
            'cards_id' => $card->id,
            'lottery_id' => $lottery->id
        ]);

        $lottery->lot_id = $lot->id;
        $lottery->save();

        return "ok";

    }
}
