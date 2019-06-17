<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Levels extends Model
{
    protected $fillable = [
        'title',
        'experience',
        'level',
        'discount',
    ];
}
