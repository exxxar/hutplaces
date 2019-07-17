<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    protected $fillable = [
        'title',
        'value'

    ];

    public static function get($value)
    {
        $tmp = Setting::where('title', $value)->first();
        return $tmp == null ? "" : $tmp;
    }

    public static function set($title, $value)
    {
        if (Setting::get($title) == "") {
            $tmp = new Setting();
            $tmp->title = $title;
            $tmp->value = $value;
            $tmp->created_at = Carbon::now();
            $tmp->updated_at = Carbon::now();
            $tmp->save();
        } else {
            $tmp = Setting::get($title);
            $tmp->value = $value;
            $tmp->updated_at = Carbon::now();
            $tmp->save();
        }
    }
}
