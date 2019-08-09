<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CoinsController extends Controller
{
    //

    public function coinsrequest(Request $request){
        //todo: сделать отправку на почту или в какой-то месаджер

        /*
        info: {
            console: true,
            year: false,
            currency: true,
            final_price_pucks: 0,
            final_price_money: 0,
            pucks_koef: 0.0005,
            money_koef: 0.0005,
            sum: 0,
            player: '',
            team: '',
            rating: '',
            initial_price: '',
            buyout_price: '',
            team_hut: ''
                }*/

        return "ok";
    }
}
