<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*


Route::group(['prefix' => 'payment'], function(){
    Route::post('pay', 'SinglePageController@requestMoney');
    Route::post('failed', 'SinglePageController@paymentFailed');
    Route::post('success', 'SinglePageController@paymentSuccess');
});

*/

Route::post('/reports/save', 'SinglePageController@reportsSave');
Route::post('/reports/all', 'SinglePageController@reportsAll');

Route::post('/partner/request', 'SinglePageController@requestPartner');
Route::post('/help/ask', 'SinglePageController@requestHelp');

Route::get('/test','ChatkitController@test');


Route::post('/registration', 'API\AuthController@register');
Route::post('/login', 'API\AuthController@login');

Route::get('/auction/all', 'AuctionController@index');
Route::get('/users/avatar/get/{id}', 'UserController@avatarGet');


Route::get('/achievements', 'AchievementsController@index');
Route::get('/achievements/categories', 'AchievementsController@categories');
Route::get('/achievements/types', 'AchievementsController@types');
Route::get('/achievements/progress/{id}', 'AchievementsController@progress');

Route::get('/images/all', 'UserController@images');

Route::get('/settings/lifetime', 'ContentController@lifetime');


Route::post('/coinsrequest', 'CoinsController@coinsrequest');

Route::get('/content/{type}/all', 'ContentController@all');
Route::get('/content/{type}/first', 'ContentController@first');

Route::get('/levels', 'LevelsController@index');
Route::get('/levels/next/{id}', 'LevelsController@next');

Route::get('/lottery/', 'LotteryController@index');
Route::get('/lottery/winner/{id}', 'LotteryController@winner');
Route::get('/lottery/show/{id}', 'LotteryController@show');
Route::get('/lottery/history', 'LotteryController@history');
Route::get('/lottery/drafts', 'LotteryController@drafts');


Route::post('/lottery/update', 'LotteryController@store');//todo: for admin only
Route::post('/lottery/remove', 'LotteryController@destroy');//todo: for admin only



Route::get('/lot/get/{lotteryId}', 'LotsController@lot');

Route::post('/search', 'CardsStorageController@search');

Route::group(["prefix"=>"chat"],function (){
    Route::post('/authenticate','ChatkitController@authenticate');
    Route::post('/users', 'ChatkitController@getUsers');
    Route::post('/send','ChatkitController@sendMessage');
    Route::post('/messages','ChatkitController@getMessages');
    Route::get('/rooms','ChatkitController@getRooms');
    Route::get('/user','ChatkitController@getCurrentUser');
    Route::get('/logout','ChatkitController@test');
});

Route::middleware('auth:api')->group(function () {

    Route::post('/auction/add', 'AuctionController@addLot');
    Route::get('/auction/mylots', 'AuctionController@myLots')->name("mylots");
    Route::get('/auction/mybids', 'AuctionController@myBids');
    Route::get('/auction/cancel/{id}', 'AuctionController@cancelLot');
    Route::get('/auction/update/{id}/{time}', 'AuctionController@updateLot');

    Route::post('/promo/activate', 'PromocodesController@activate');

    Route::get('/users/promo/{id}', 'UserController@promo');
    Route::post('/users/achievements/progress', 'UserController@progress');
    Route::get('/users/achievements/types/{id}', 'AchievementsController@types');
    Route::get('/users/achievements/{id}', 'UserController@achievements');
    Route::get('/users/tickets/{id}', 'UserController@tickets');
    Route::get('/users/stats/types', 'StatsController@types');
    Route::get('/users/stats/{id}', 'UserController@stats');
    Route::get('/users/cards/{id}', 'UserController@cards');
    Route::get('/users/items/{id}', 'UserController@items');
    Route::get('/users/transactions/{id}', 'UserController@transactions');
    Route::get('/users/wins/{id}', 'UserController@wins');
    Route::get('/users/lotteries/{id}', 'UserController@lotteries');

    Route::get('/users/avatar/refresh', 'UserController@avatarRefresh');
    Route::post('/users/avatar/set', 'UserController@avatarSet');

    Route::post('/user/update/info', 'UserController@updateInfo');
    Route::post('/user/update/pass', 'UserController@updatePass');

    Route::post('/lottery/add', 'LotteryController@add');
    Route::post('/lottery/pick/', 'LotteryController@pick');
    Route::post('/lottery/pick/random', 'LotteryController@random');
    Route::post('/lottery/buy', 'LotteryController@buy');
    Route::get('/lottery/places/{id}', 'LotteryController@places');

    Route::post('/logout', 'API\AuthController@logout');
    Route::get('/get-user/{id?}', 'API\AuthController@getUser');
    Route::post('/lottery/pickplace', 'LotteryController@pickPlace');
    Route::post('/payment/{paymentProvider}', 'UserController@payment');
});

