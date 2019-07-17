<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lot extends Model
{
    protected $fillable = [
        'lottery_id',
        'coins',
        'items_id',
        'cards_id',
    ];
}
