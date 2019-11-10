<?php

namespace App;

use App\Enums\AchievementType;
use App\Enums\ConsoleType;
use App\Enums\GameType;
use App\Enums\Lifetime;
use BenSampo\Enum\Traits\CastsEnums;
use Illuminate\Database\Eloquent\Model;

class Packs extends Model
{
    use CastsEnums;

    protected $enumCasts = [
        'packs_type' => AchievementType::class,
        'console_type' => ConsoleType::class,
        'game_type' => GameType::class,
        'lifetime' => Lifetime::class,
    ];


    protected $fillable = [
        'title',
        'description',
        'console_type',
        'packs_type',
        'game_type',
        'price',
        'image',
        'lifetime',
        'is_active',

        'lots_in_pack',
        'lots_guaranteed',

        'seller_id',
        'created_at',
        'updated_at'

    ];

    public function seller()
    {
        return $this->hasOne('App\User', 'id', 'seller_id');
    }


    public function raitings()
    {
        return $this->hasMany('App\PacksDropRaitings');
    }

    public function lots()
    {
        return $this->belongsToMany('App\Lot', 'packs_lots', 'packs_id', 'lot_id')
            ->withTimestamps();
    }

    public function users()
    {
        return $this->belongsToMany('App\Users', 'packs_users', 'packs_id', 'user_id')
            ->withTimestamps();
    }



}