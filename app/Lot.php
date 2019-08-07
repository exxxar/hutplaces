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

    public function lottery() {
        return $this->belongsTo('App\Lottery');
    }

    public function card()
    {
       return $this->belongsTo('App\CardsStorage','id');
    }

    public function item()
    {
        return $this->hasOne('App\Item');
    }
}
