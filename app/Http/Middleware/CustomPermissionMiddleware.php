<?php

namespace App\Http\Middleware;

use Closure;
use Spatie\Permission\Exceptions\UnauthorizedException;
use Spatie\Permission\Middlewares\PermissionMiddleware;

class CustomPermissionMiddleware extends PermissionMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next,$permission)
    {
        try {
            parent::handle($request,$next,$permission);
        }catch (UnauthorizedException $e){
            return redirect()->route("front",["any"=>"/cabinet"]);
        }
        return $next($request);
    }
}
