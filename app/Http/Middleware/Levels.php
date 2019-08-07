<?php

namespace App\Http\Middleware;

use App\Level;
use App\User;
use Closure;

class Levels
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {

        $response = $next($request);

        $levels = Level::all();

        foreach (User::all() as $user){
            foreach ( $levels as $level){
                if ($user->exp>$level->experience) {
                    $user->level_id = $level->id;
                    $user->discount = $level->discount;
                }
            }
            $user->save();
        }

        return $response;

    }
}
