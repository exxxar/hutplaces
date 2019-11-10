<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PacksDropRaitings extends Model
{
    protected $fillable = [
        'min_ovr',
        'max_ovr',
        'rate'
    ];

    public function pack()
    {
        return $this->belongsTo('App\Packs');

    }
}
