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

Route::post('/coinsrequest', 'CoinsController@coinsrequest');

Route::get('/content/{type}/all','ContentController@all');

Route::get('/lottery/', 'LotteryController@index');

Route::get('/lottery/winner/{id}', 'LotteryController@winner');

Route::get('/lottery/show/{id}', 'LotteryController@show');


Route::get('/lot/get/{lotteryId}', 'LotsController@lot');

Route::post('/search', 'CardsStorageController@search');

Route::middleware('auth:api')->group(function () {
    Route::post('/lottery/pick/', 'LotteryController@pick');
    Route::post('/lottery/pick/random', 'LotteryController@random');
    Route::post('/lottery/buy', 'LotteryController@buy');
    Route::get('/lottery/places/{id}', 'LotteryController@places');

    Route::post('/logout', 'API\AuthController@logout');
    Route::get('/get-user', 'API\AuthController@getUser');
    Route::post('/lottery/pickplace', 'LotteryController@pickPlace');
    Route::post('/payment/{paymentProvider}','UserController@payment')->middleware("levels");
});

