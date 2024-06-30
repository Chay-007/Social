<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckVersion
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
        if (auth()->user()->version != null ) {
            return $next($request);
        }
         $response = [
            'success' => false,
            'message' => 'Please Update the application',
        ];
        $code = 202;
        return response()->json($response, $code);
    }
}
