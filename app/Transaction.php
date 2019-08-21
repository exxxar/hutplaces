<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    protected $fillable = [
        'user_id',
        'amount',
        'payment_system',
        'currency',
        'created_at',

    ];
    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
