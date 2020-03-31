<?php

namespace App\Http\Middleware;

use App\User;
use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Support\Facades\Auth;

class Authenticate extends Middleware
{
    public function handle($request, \Closure $next)
    {
        if(!empty(trim($request->input('api_token')))){
            $is_exists = User::where('id' , Auth::guard('api')->id())->exists();
            if($is_exists){
                return $next($request);
            }
        }
        return response()->json('Invalid Token', 401);
    }
}
