<?php

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('App.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});

Broadcast::channel('raffle-chanel', function(){
    return true;
});
Broadcast::channel('pick-place-chanel', function(){
    return true;
});

Broadcast::channel('message-chanel', function(){
    return true;
});

Broadcast::channel('user-update-chanel', function () {
    return true;
});

Broadcast::channel('achievement-gain-chanel', function () {
    return true;
});