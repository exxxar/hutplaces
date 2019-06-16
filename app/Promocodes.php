<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Promocodes extends Model
{
    protected $fillable = [
        'lifetime',
        'isActive',
        'title',
        'description',
        'activation_count',
        'count',
        'money',
        'exp',
        'discount',
        'items_id',
        'cards_id',
        'images_storage_id',
    ];
}
