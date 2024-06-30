<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App;

class ChangeLanguage
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        App::setLocale('En');
        if($request->header('lang')){
               App::setLocale($request->header('lang'));
        }
        return $next($request);
    }
}
