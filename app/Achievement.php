<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Achievement extends Model
{
    protected $fillable = [
        'category',
        'type',
        'title',
        'description',
        'discount',
        'background',
        'exp',
        'coins',
        'money',
        'items_id',
        'cards_id',
        'image',
        'isActive',
        'randomRewards'
    ];

    public function users()
    {
        return $this->belongsToMany('App\Users','user_achievement','achievement_id','user_id');
    }
}
