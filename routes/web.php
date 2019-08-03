<?php

Route::get('/social-auth/{provider}', 'Auth\SocialController@redirectToProvider')->name('auth.social');
Route::get('/social-auth/{provider}/callback', 'Auth\SocialController@handleProviderCallback')->name('auth.social.callback');


Route::group(['prefix' => 'admin',/*'middleware' => ['auth']*/], function () {

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