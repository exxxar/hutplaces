<?php

use App\Events\BroadcastMessage;
use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\Facades\Request;
use Maksa988\FreeKassa\Facades\FreeKassa;

Broadcast::routes(['middleware' => ['auth:api']]);




Route::get('/brod',function(){
    return view("brod");
});



Route::get('/payment/{paymentProvider}/success',function($paymentProvider){
    return "success";
});

Route::get('/payment/{paymentProvider}/error',function($paymentProvider){
    return "error";
});

Route::get("/pay",function (){
    $amount = 100; // Payment`s amount

    $url = FreeKassa::getPayUrl($amount, 1);

    $redirect = FreeKassa::redirectToPayUrl($amount, 1);

    return redirect($redirect);
});

Route::get('/social-auth/{provider}', 'Auth\SocialController@redirectToProvider')->name('auth.social');
Route::get('/social-auth/{provider}/callback', 'Auth\SocialController@handleProviderCallback')->name('auth.social.callback');


Route::group(['prefix' => 'admin',/*'middleware' => ['auth']*/], function () {

    Route::post('/broadcast', 'SettingsController@broadcast')->name("broadcast.message");
    Route::post('/search', 'CardsStorageController@search')->name('card.search');
    Route::get('/cards', 'CardsStorageController@cards')->name('card.index');

    Route::resources([
        'auction' => 'AuctionController',
        'achievements' => 'AchievementsController',
        'wof' => 'WOFController',
        'wager' => 'WagerController',
        'promo' => 'PromocodesController',
        'levels' => 'LevelsController',
        'lots' => 'LotsController',
        'lottery' => 'LotteryController',
        'orders' => 'OrdersController',
        'places' => 'PlacesController',
        'users' => 'UserController',
        'tickets' => 'TicketController',
        'settings' => 'SettingsController',
        'roles' => 'RoleController',
        'storage' => 'CardsStorageController',
        'images' => 'ImagesStorageController',
        'transactions' => 'TransactionController',
    ]);

    Route::view('/', 'admin.main');

    //Route::view('/cards', 'admin.cards');
    Route::view('/coins', 'admin.coins');
    Route::view('/mails', 'admin.mails');
    Route::view('/packs', 'admin.packs');
    Route::view('/statistic', 'admin.statistic');
    Route::get('/lang/{locale}', 'HomeController@setlang');
});

Route::get('/{any}', 'SinglePageController@index')->where('any', '.*')->name("front");