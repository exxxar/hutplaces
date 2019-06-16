<?php

namespace App\Http\Controllers;

use App\CardsStorage;
use Illuminate\Http\Request;

class CardsStorageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $cardstorages = CardsStorage::paginate(15);

        return view('admin.cardstorage', ['cardstorages' => $cardstorages]);
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
            'ACC_AGI' => 'integer',
            'AGI_DUR' => 'integer',
            'AGR' => 'integer',
            'BAL_END' => 'integer',
            'BLK_REC' => 'integer',
            'CHK' => 'integer',
            'CHK_POS' => 'integer',
            'DAW_PPF' => 'integer',
            'DEF_RBC' => 'integer',
            'DEK_ANG' => 'integer',
            'DIS_PAS' => 'integer',
            'DUR' => 'integer',
            'END_SPD' => 'integer',
            'FO_RC' => 'integer',
            'FS' => 'integer',
            'HAE_BRK' => 'integer',
            'HND_QCK' => 'integer',
            'OAW_POI' => 'integer',
            'OVR' => 'integer',
            'PAS_FH' => 'integer',
            'PC_GLH' => 'integer',
            'POI_PKC' => 'integer',
            'SCH' => 'integer',
            'SHT_LOW' => 'integer',
            'SKT_HGH' => 'integer',
            'SPD_VIS' => 'integer',
            'SSA_GLL' => 'integer',
            'SSP_STH' => 'integer',
            'STR' => 'integer',
            'WGT' => 'integer',
            'WSA_STL' => 'integer',
            'WSP_AGG' => 'integer',
            'Year' => 'integer',
            'aOVR' => 'integer',
            'age' => 'integer',
            'hutdb_id' => 'integer',
            'jersey' => 'integer',
            'create_date' => 'date_format:Y-m-d H:i:s',
        ]);
        
        $input = $request->all(); 

        $cardstorage = CardsStorage::create($input); 

        return back()->with('success', 'Карта успешно добавлена');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\CardsStorage  $cardsStorage
     * @return \Illuminate\Http\Response
     */
    public function show(CardsStorage $cardsStorage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\CardsStorage  $cardsStorage
     * @return \Illuminate\Http\Response
     */
    public function edit(CardsStorage $cardsStorage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CardsStorage  $cardsStorage
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'ACC_AGI' => 'integer',
            'AGI_DUR' => 'integer',
            'AGR' => 'integer',
            'BAL_END' => 'integer',
            'BLK_REC' => 'integer',
            'CHK' => 'integer',
            'CHK_POS' => 'integer',
            'DAW_PPF' => 'integer',
            'DEF_RBC' => 'integer',
            'DEK_ANG' => 'integer',
            'DIS_PAS' => 'integer',
            'DUR' => 'integer',
            'END_SPD' => 'integer',
            'FO_RC' => 'integer',
            'FS' => 'integer',
            'HAE_BRK' => 'integer',
            'HND_QCK' => 'integer',
            'OAW_POI' => 'integer',
            'OVR' => 'integer',
            'PAS_FH' => 'integer',
            'PC_GLH' => 'integer',
            'POI_PKC' => 'integer',
            'SCH' => 'integer',
            'SHT_LOW' => 'integer',
            'SKT_HGH' => 'integer',
            'SPD_VIS' => 'integer',
            'SSA_GLL' => 'integer',
            'SSP_STH' => 'integer',
            'STR' => 'integer',
            'WGT' => 'integer',
            'WSA_STL' => 'integer',
            'WSP_AGG' => 'integer',
            'Year' => 'integer',
            'aOVR' => 'integer',
            'age' => 'integer',
            'hutdb_id' => 'integer',
            'jersey' => 'integer',
            'create_date' => 'date_format:Y-m-d H:i:s',
        ]);

        $input = $request->all(); 

        $cardstorage = CardsStorage::find($id);
        $cardstorage->update($input);

        return back()->with('success', 'Карта успешно отредактирована');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\CardsStorage  $cardsStorage
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $cardstorage = CardsStorage::find($id);
        $cardstorage->delete();

        return back()->with('success', 'Карта успешно удалена');
    }
}
