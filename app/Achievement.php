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
        'exp',
        'coins',
        'money',
        'items_id',
        'cards_id',
        'images_storage_id',
        'isActive',
    ];
}
