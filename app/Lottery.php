<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lottery extends Model
{
    protected $fillable = [
        'title',
        'console_type',
        'lot_type',
        'lot_id',
        'game_type',
        'base_price',
        'base_discount',
        'places',
        'winner_id',
        'occupied_places',
        'next_lottery_id',
        'prev_lottery_id',
        'visible',
        'is_only_one',
        'completed',
        'active',
        'lifetime',


    ];

    public function isFull(){
        return $this->occupied_places==$this->places;
    }

    public function lot()
    {
        return $this->hasOne('App\Lot','id');
    }



    public function users(){
        return $this->belongsToMany('App\User')->using('App\UserLottery');
    }

    public function places()
    {
        return $this->hasMany('App\Place');
    }
}
