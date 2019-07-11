<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Log;



Route::prefix('admin')->group(function () {
    //Auth::routes();
});

Route::get('/home', 'HomeController@index')->name('home');


Route::group(['prefix'=>'admin',/*'middleware' => ['auth']*/], function() {

    Route::resources([
        'auction'=>'AuctionController',
        'achievements'=>'AchievementsController',
        'wof'=>'WOFController',
        'wager'=>'WagerController',
        'promo'=>'PromocodesController',
        'levels'=>'LevelsController',
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
    ]);

    Route::view('/', 'admin.main');

    Route::view('/cards', 'admin.cards');
    Route::view('/coins', 'admin.coins');
    Route::view('/mails', 'admin.mails');
    Route::view('/packs', 'admin.packs');
    Route::view('/statistic', 'admin.statistic');
    Route::get('/lang/{locale}', 'HomeController@setlang');
});

//Route::get('/admin/{any?}', 'SinglePageController@admin')->where('any', '.*');
Route::get('/{any}', 'SinglePageController@index')->where('any', '.*');