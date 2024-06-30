<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\ApplicationSetting;

class UnderMaintanace
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
        $app = ApplicationSetting::where('status',1)->first();
        if ($app->application_mode==1) {
            return $next($request);
        }
         $response = [
            'success' => false,
            'message' => 'App is Under Maintanace Your basket will back soon.',
        ];
        $code = 503;
        return response()->json($response, $code);
    }
}
