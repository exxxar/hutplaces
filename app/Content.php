<?php

namespace App;

use App\Enums\ContentType;
use BenSampo\Enum\Traits\CastsEnums;
use Illuminate\Database\Eloquent\Model;

class Content extends Model
{
    use CastsEnums;

    protected $enumCasts = [
        // 'attribute_name' => Enum::class
        'type' => ContentType::class,
    ];
    protected $table = 'contents';

    protected $fillable = [
       'title',
        'content',
        'type',//todo:изменить согласно появлению Enum
        'lang',
    ];
}
