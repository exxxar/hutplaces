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
        return $this->hasOne('App\CardsStorageNHLHUT','id','cards_id');
      // return $this->belongsTo('App\CardsStorageHUTDB','cards_id');
    }

    public function item()
    {
        return $this->hasOne('App\Item','id','items_id');
        //return $this->hasOne('App\Item','items_id');
    }

    public function packs()
    {
        return $this->belongsToMany('App\Packs', 'packs_lots', 'lot_id', 'packs_id')
            ->withTimestamps();
    }
}
