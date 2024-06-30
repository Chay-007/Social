<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckStatus
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
        if (auth()->user()->status == 'active') {
            return $next($request);
        }
         $response = [
            'success' => false,
            'message' => 'Your account is inactive Please contact our support team to get access of your account 9404535526.',
        ];
        $code = 401;
        return response()->json($response, $code);
    }
}
