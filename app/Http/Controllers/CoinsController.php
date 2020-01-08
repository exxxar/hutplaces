<?php

namespace App\Http\Controllers;

use App\Classes\TelegramNotify;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class CoinsController extends Controller
{
    use TelegramNotify;

    public function coinsrequest(Request $request)
    {
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

        $user = User::find(auth('api')->user()->id);


        $this->orderRequest(
            sprintf(
                "<b>Заказ на монеты!</b>\n<b>Консоль</b>:%s\n<b>Количество монет</b>:%d\n"
                . "<b>Игрок:</b>%s\n<b>Команда:</b>%s\n<b>Рейтинг:</b>%s\n"
                . "<b>Начальная цена:</b>%s\n<b>Цена выкупа:</b>%s\n<b>Команда в HUT:</b>%s\n"
                . "<b>К оплате:</b>%s\n"
                . "<b>Почта пользователя:</b> %s [%s]\n"
                ,
                (
                $request->get("console") ? "PS4" : "XBOX"),
                $request->get("sum"),
                $request->get("player"),
                $request->get("team"),
                $request->get("rating"),
                $request->get("initial_price"),
                $request->get("buyout_price"),
                $request->get("team_hut"),
                ($request->get("final_price_pucks") ?? $request->get("final_price_money")),
                $user->email, $user->name

            )
        );

        return "ok";
    }
}
