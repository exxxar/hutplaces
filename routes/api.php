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
Route::post('/reportSubmit', 'SinglePageController@reportSubmit');

Route::group(['prefix' => 'payment'], function(){
    Route::post('pay', 'SinglePageController@requestMoney');
    Route::post('failed', 'SinglePageController@paymentFailed');
    Route::post('success', 'SinglePageController@paymentSuccess');
});

*/

Route::post('/registration', 'API\AuthController@register');
Route::post('/login', 'API\AuthController@login');

Route::get('/achievements', 'AchievementsController@index');

Route::post('/coinsrequest', 'CoinsController@coinsrequest');

Route::get('/content/{type}/all', 'ContentController@all');

Route::get('/lottery/', 'LotteryController@index');
Route::get('/lottery/winner/{id}', 'LotteryController@winner');
Route::get('/lottery/show/{id}', 'LotteryController@show');
Route::get('/lottery/history', 'LotteryController@history');


Route::get('/lot/get/{lotteryId}', 'LotsController@lot');

Route::post('/search', 'CardsStorageController@search');

Route::middleware('auth:api')->group(function () {

    Route::post('/promo/activate', 'PromocodesController@activate');

    Route::get('/users/promo/{id}', 'UserController@promo');
    Route::get('/users/achievements/{id}', 'UserController@achievements');
    Route::get('/users/tickets/{id}', 'UserController@tickets');
    Route::get('/users/stats/{id}', 'UserController@stats');
    Route::get('/users/cards/{id}', 'UserController@cards');
    Route::get('/users/transactions/{id}', 'UserController@transactions');
    Route::get('/users/wins/{id}', 'UserController@wins');

    Route::post('/lottery/pick/', 'LotteryController@pick');
    Route::post('/lottery/pick/random', 'LotteryController@random');
    Route::post('/lottery/buy', 'LotteryController@buy');
    Route::get('/lottery/places/{id}', 'LotteryController@places');

    Route::post('/logout', 'API\AuthController@logout');
    Route::get('/get-user', 'API\AuthController@getUser');
    Route::post('/lottery/pickplace', 'LotteryController@pickPlace');
    Route::post('/payment/{paymentProvider}', 'UserController@payment')->middleware("levels");
});

// chat
Route::post('authenticate','ChatkitController@authenticate');
Route::get('users', 'ChatkitController@getUsers');
Route::post('message','ChatkitController@sendMessage');
