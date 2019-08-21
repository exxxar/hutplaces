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
        return $this->belongsToMany('App\Lottery','user_lotteries','user_id','lottery_id')
            ->withTimestamps();
    }

    public function promocodes() {
        return $this->belongsToMany('App\Promocode','user_promos','user_id','promocodes_id')
            ->withTimestamps();
    }

    public function cards()
    {
        return $this->belongsToMany('App\CardsStorage','user_card','user_id','card_id')
            ->withTimestamps();
    }

    public function achievements()
    {
        return $this->belongsToMany('App\Achievement','user_achievement','user_id','achievement_id')
            ->withTimestamps();
    }

    public function level()
    {
        return $this->belongsTo('App\Level');
    }

    public function stats()
    {
        return $this->hasMany('App\Stats');
    }

    public function tickets()
    {
        return $this->hasMany('App\Ticket');
    }

    public function transactions()
    {
        return $this->hasMany('App\Transaction');
    }
}
