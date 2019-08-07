<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Level extends Model
{
    protected $fillable = [
        'title',
        'experience',
        'level',
        'discount',
    ];

    public function users()
    {
        return $this->hasMany('App\User');
    }
}
