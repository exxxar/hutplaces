<?php

use App\Enums\TriggerType;
use App\Events\Achievement;
use Illuminate\Support\Facades\Broadcast;
use Maksa988\FreeKassa\Facades\FreeKassa;

Broadcast::routes();

Route::get("/event", function () {
    event(new Achievement(TriggerType::CardsCount, 1, 2));
    event(new Achievement(TriggerType::CoinsCount, 10, 2));
    event(new Achievement(TriggerType::Experience, 1000, 2));
    event(new Achievement(TriggerType::Discount, 10, 2));
    return "1";
});

Route::get('/brod', function () {
    return view("brod");
});

Route::get('/payment/{paymentProvider}/success', function ($paymentProvider) {
    return "success";
});

Route::get('/payment/{paymentProvider}/error', function ($paymentProvider) {
    return "error";
});

Route::get("/pay", function () {
    $amount = 100; // Payment`s amount
    $url = FreeKassa::getPayUrl($amount, 1);
    $redirect = FreeKassa::redirectToPayUrl($amount, 1);
    return redirect($url);
});

Route::get('/content/{id}', 'ContentController@get')->name("content.get")->where('id', '[0-9]+');
Route::get('/content/{type}/all', 'ContentController@all')->name("content.all");


Route::get('/social-auth/{provider}', 'Auth\SocialController@redirectToProvider')->name('auth.social');
Route::get('/social-auth/{provider}/callback', 'Auth\SocialController@handleProviderCallback')->name('auth.social.callback');

// slider image get
Route::get('/storage/slider/{filename}', 'SettingsController@sliderImageGet')->name('slider.image.get');

Route::group(['prefix' => 'admin',/*'middleware' => ['auth']*/], function () {

    // main page with images for slider
    Route::get('/', 'SettingsController@main')->name('main');

    Route::post('/broadcast', 'SettingsController@broadcast')->name("broadcast.message");
    Route::post('/search', 'CardsStorageController@search')->name('card.search');
    Route::post('/addcard', 'CardsStorageController@add')->name('card.add');
    Route::get('/cards', 'CardsStorageController@cards')->name('card.index');

    Route::get('/achievements/users/{achId}', 'AchievementsController@users')->name('achievement.users');

    // slider images
    Route::post('slider-upload', 'SettingsController@sliderImageUpload')->name('slider.image.upload');
    Route::post('slider-delete', 'SettingsController@sliderImageDelete')->name('slider.image.delete');

    Route::get('/users/promo/{id}', 'UserController@promo')->name('users.promo');
    Route::get('/users/achievements/{id}', 'UserController@achievements')->name('users.achievements');
    Route::get('/users/tickets/{id}', 'UserController@tickets')->name('users.tickets');
    Route::get('/users/stats/{id}', 'UserController@stats')->name('users.stats');
    Route::get('/users/cards/{id}', 'UserController@cards')->name('users.cards');
    Route::get('/users/transactions/{id}', 'UserController@transactions')->name('users.transactions');
    Route::get('/users/wins/{id}', 'UserController@wins')->name('users.wins');


    Route::resources([
        'auction' => 'AuctionController',
        'achievements' => 'AchievementsController',
        'wof' => 'WOFController',
        'wager' => 'WagerController',
        'promo' => 'PromocodesController',
        'levels' => 'LevelsController',
        'lots' => 'LotsController',
        'lottery' => 'LotteryController',
        'places' => 'PlacesController',
        'users' => 'UserController',
        'tickets' => 'TicketController',
        'settings' => 'SettingsController',
        'roles' => 'RoleController',
        'storage' => 'CardsStorageController',
        'images' => 'ImagesStorageController',
        'transactions' => 'TransactionController',
        'content' => 'ContentController',
    ]);

    Route::view('/coins', 'admin.coins');
    Route::view('/mails', 'admin.mails');
    Route::view('/packs', 'admin.packs');
    Route::get('/lang/{locale}', 'SettingsController@setlang');
});

Route::get('/{any}', 'SinglePageController@index')->where('any', '.*')->name("front");

// chat
Route::get('/chatindex', 'ChatkitController@index');
Route::post('/chatjoin', 'ChatkitController@join');
Route::get('chat', 'ChatkitController@chat')->name('chat');
Route::post('logout', 'ChatkitController@logout')->name('logout');
