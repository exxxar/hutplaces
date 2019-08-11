<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Content extends Model
{
    //

    protected $table = 'contents';

    protected $fillable = [
       'title',
        'content',
        'type',
        'lang',
    ];
}
