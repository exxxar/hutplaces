<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use Notifiable;
    use HasRoles;
    use HasApiTokens;


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 
        'email',
        'password',
        'skype', 
        'vk',
        'fb',
        'tw', 
        'money',
        'level_id',
        'discount', 
        'exp',
        'active',
        'avatar',
        'coins'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function lotteries() {
        return $this->belongsToMany('App\Lottery')->using('App\UserLottery');
    }

    public function cards()
    {
        return $this->belongsToMany('App\CardsStorage')->using('App\UserCard');
    }

    public function achievements()
    {
        return $this->belongsToMany('App\Achievement')->using('App\UserAchievement');
    }

    public function level()
    {
        return $this->belongsTo('App\Level');
    }
}
