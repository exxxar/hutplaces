<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Promocode extends Model
{
    protected $fillable = [
        'lifetime',
        'is_active',
        'title',
        'description',
        'activation_count',
        'count',
        'money',
        'exp',
        'discount',
        'items_id',
        'cards_id',
        'images',
    ];
}
