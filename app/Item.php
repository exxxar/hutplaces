<?php

namespace App;

use App\Enums\ItemType;
use App\Enums\LotType;
use BenSampo\Enum\Traits\CastsEnums;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    //

    use CastsEnums;

    protected $enumCasts = [
        'type' => ItemType::class,
    ];

    protected $fillable = [
        "title",
        "description",
        "image",
        "value",
        "type",
    ];

    public function users()
    {
        return $this->belongsToMany('App\User', 'user_items', 'id', 'user_id')
            ->withTimestamps();
    }

    public function lots()
    {
        return $this->hasMany('App\Lot');
    }

}
