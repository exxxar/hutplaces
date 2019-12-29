<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CardsStorageNHLHUT extends Model
{
    protected $table = 'cards_storage_nhlhut';

    protected $fillable = [
        'card_art',//: "<a id="3399" href="?id=3399" class="advanced-stats"><img src="images/card_art/players/3399.jpg" width="100px" /></a>"
        'card',//: "WIN:MSP"
        'nationality',//: "Canada"
        'league',//: "INT"
        'team',//: "CAN"
        'position',//: "C"
        'ptype',//: "PLY"
        'hand',//: "Left"
        'weight',//: "200"
        'height',//: "5' 11""
        'full_name',//: "<a id="3399" href="?id=3399" class="advanced-stats">Sidney Crosby</a>"
        'synergies',//: "AD, DK(2), FB(2)"
        'overall',//: "95"
        'aOVR',//: "94.45"
        'deking',//: "97"
        'hand_eye',//: "97"
        'passing',//: "97"
        'puck_control',//: "97"
        'slap_shot_accuracy',//: "93"
        'slap_shot_power',//: "94"
        'wrist_shot_accuracy',//: "95"
        'wrist_shot_power',//: "92"
        'acceleration',//: "99"
        'agility',//: "99"
        'balance',//: "97"
        'endurance',//: "95"
        'speed',//: "98"
        'discipline',//: "85"
        'off_awareness',//: "97"
        'poise',//: "97"
        'def_awareness',//: "95"
        'faceoffs',//: "99"
        'shot_blocking',//: "87"
        'stick_checking',//: "95"
        'aggression',//: "87"
        'body_checking',//: "87"
        'durability',//: "90"
        'fighting_skill',//: "83"
        'strength',//: "91"
        'popularity',//: "5%"
    ];

    public function lots()
    {
        return $this->hasMany('App\Lot');
    }

    public function users()
    {
        return $this->belongsToMany('App\User', 'user_card', 'id', 'user_id')
            ->withTimestamps();
    }

    public function achievements()
    {
        return $this->hasMany('App\Achievement');
    }
}
