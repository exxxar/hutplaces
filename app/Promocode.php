<?php

namespace App;

use BenSampo\Enum\Traits\CastsEnums;
use Illuminate\Database\Eloquent\Model;

class Promocode extends Model
{
    use CastsEnums;

    protected $enumCasts = [
        'lifetime' => Lifetime::class,

    ];

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
        'coins',
        'item_id',
        'card_id',

    ];

    public function users(){
        return $this->belongsToMany('App\User','user_promos','promocodes_id','user_id');
    }

    public function prizes(){
        $tmp = [];
        if (!empty($this->coins))
            array_push($tmp,"coins");
        if (!empty($this->money))
            array_push($tmp,"money");
        if (!empty($this->exp))
            array_push($tmp,"exp");
        if (!empty($this->discount))
            array_push($tmp,"discount");
        if (!empty($this->item_id))
            array_push($tmp,"item");
        if (!empty($this->card_id))
            array_push($tmp,"card");
        return $tmp;
    }
}
