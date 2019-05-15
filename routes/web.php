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
use Illuminate\Support\Facades\Log;

//Auth::routes();

Route::prefix('admin')->group(function () {
    Auth::routes();

    
});

Route::get('/home', 'HomeController@index')->name('home');

//Route::get('/admin/{any?}', 'SinglePageController@admin')->where('any', '.*');
Route::get('/{any}', 'SinglePageController@index')->where('any', '.*');

// Resource
Route::resources([
    'lots' => 'LotsController',
    'lotteries' => 'LotteryController',
    'orders' => 'OrdersController',
    'places' => 'PlacesController',
    'users' => 'UserController',
    'tickets' => 'TicketController'
]);




