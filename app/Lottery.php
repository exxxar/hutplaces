<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lottery extends Model
{
    protected $fillable = [
        'title',
        'console_type',
        'lot_type',
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
        'lifetime'
    ];
}
