<?php

namespace App;

use App\Enums\ConsoleType;
use App\Enums\GameType;
use App\Enums\Lifetime;
use App\Enums\LotType;
use BenSampo\Enum\Traits\CastsEnums;
use Illuminate\Database\Eloquent\Model;

class Lottery extends Model
{
    use CastsEnums;

    protected $enumCasts = [
        'console_type' => ConsoleType::class,
        'lot_type' => LotType::class,
        'game_type' => GameType::class,
        'lifetime' => Lifetime::class,

    ];

    protected $fillable = [
        'title',
        'console_type',
        'lot_type',
        'lot_id',
        'game_type',
        'base_price',
        'base_discount',
        'places',
        'winner_id',
        'winner_place',
        'occupied_places',
        'next_lottery_id',
        'prev_lottery_id',
        'visible',
        'is_only_one',
        'completed',
        'active',
        'seller_id',
        'lifetime',
        'updated_at',

        'auto_refresh',
        'start_at',

    ];

    public function winner()
    {
        return $this->hasOne('App\User', 'id', 'winner_id');

    }

    public function isFull()
    {
        return $this->occupied_places == $this->places;
    }

    public function lot()
    {
        return $this->hasOne('App\Lot', 'id', 'lot_id');


    }

    public function seller()
    {
        return $this->hasOne('App\User', 'id', 'seller_id');
    }

    public function users()
    {
        return $this->belongsToMany('App\User', 'user_lotteries', 'lottery_id', 'user_id')
            ->withTimestamps();
    }

    public function placeList()
    {
        return $this->hasMany('App\Place', 'lottery_id');
    }
}
