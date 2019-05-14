<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Places extends Model
{
    protected $fillable = [
        'place_number',
        'lottery_id',
        'user_id'
    ];
}
