<?php

namespace App;

use App\Enums\TriggerType;
use App\Enums\AchievementType;
use BenSampo\Enum\Traits\CastsEnums;
use Illuminate\Database\Eloquent\Model;

class Achievement extends Model
{
    use CastsEnums;

    protected $enumCasts = [
        'type' => AchievementType::class,
        'trigger_type' => TriggerType::class,
    ];

    protected $fillable = [
        'title',
        'description',
        'background',
        'image',

        'type',

        'discount',
        'exp',
        'coins',
        'money',
        'bonus',
        'item_id',
        'card_id',


        'is_active',

        'random_rewards',

        'trigger_type',
        'trigger_value'
    ];


    public function users()
    {
        return $this->belongsToMany('App\User','user_achievement','achievement_id','user_id')
            ->withTimestamps();
    }

    public function card(){
        return $this->belongsTo('App\CardsStorage');
    }
}
