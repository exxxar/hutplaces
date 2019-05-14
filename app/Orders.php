<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Orders extends Model
{
    protected $fillable = [
        'title',
        'currency',
        'count',
        'price',
        'payment_provider',
        'quantity'
    ];
}
