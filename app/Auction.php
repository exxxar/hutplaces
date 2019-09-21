<?php

namespace App;

use App\Enums\ConsoleType;
use App\Enums\GameType;
use App\Enums\Lifetime;
use App\Enums\LotType;
use BenSampo\Enum\Traits\CastsEnums;
use Illuminate\Database\Eloquent\Model;

class Auction extends Model
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
        'step_price',
        'bid_price',
        'buyer_id',
        'buy_price',
        'lifetime',
        'is_active',
        'seller_id',
        'updated_at',
        'created_at',
    ];

    public function lot()
    {
        return $this->hasOne('App\Lot','id');
    }

    public function buyer()
    {
        return $this->hasOne('App\User','id','buyer_id');
    }

    public function seller()
    {
        return $this->hasOne('App\User','id','seller_id');
    }
}
