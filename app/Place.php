<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Place extends Model
{
    protected $fillable = [
        'place_number',
        'lottery_id',
        'user_id'
    ];

    public function lottery()
    {
        return $this->belongsTo('App\Lottery');
    }

    public function user()
    {
        return $this->belongsTo('App\User','user_id');
    }
}
