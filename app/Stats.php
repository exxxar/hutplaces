<?php

namespace App;

use App\Enums\TriggerType;
use BenSampo\Enum\Traits\CastsEnums;
use Illuminate\Database\Eloquent\Model;

class Stats extends Model
{
    //
    use CastsEnums;

    protected $enumCasts = [
        // 'attribute_name' => Enum::class
        'stat_type' => TriggerType::class,
    ];

    protected $fillable = [
        'stat_type',
        'stat_value',
        'user_id'
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
