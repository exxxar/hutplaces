<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Settings extends Model
{
    public static function get($value)
    {
        $tmp = Settings::where('title', $value)->first();
        return $tmp == null ? "" : $tmp;
    }

    public static function set($title, $value)
    {
        if (Settings::get($title) == "") {
            $tmp = new Settings();
            $tmp->title = $title;
            $tmp->value = $value;
            $tmp->created_at = Carbon::now();
            $tmp->updated_at = Carbon::now();
            $tmp->save();
        } else {
            $tmp = Settings::get($title);
            $tmp->value = $value;
            $tmp->updated_at = Carbon::now();
            $tmp->save();
        }
    }
}
