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
        'occupied_places',
        'next_lottery_id',
        'prev_lottery_id',
        'visible',
        'is_only_one',
        'completed',
        'active',
        'lifetime',
        'updated_at',


    ];

    public function winner(){
        if ($this->winner_id!=null) {
            $winUser_id = (Place::where("place_number",$this->winner_id)
                ->where("lottery_id",$this->id)
                ->first())->user_id;

            return  User::find($winUser_id);
        }

        return null;

    }

    public function isFull(){
        return $this->occupied_places==$this->places;
    }

    public function lot()
    {
        return $this->hasOne('App\Lot','id');
    }



    public function users(){
        return $this->belongsToMany('App\User','user_lotteries','lottery_id','user_id')
            ->withTimestamps();
    }

    public function placeList()
    {
        return $this->hasMany('App\Place','lottery_id');
    }
}
