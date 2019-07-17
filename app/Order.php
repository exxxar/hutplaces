<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
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
