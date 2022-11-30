<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\Teacher;
use App\Providers\RouteServiceProvider;
use Illuminate\Support\Facades\Auth;

class ChekcIfTeacher
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if(Teacher::where('user_id', '=', Auth::user()->id)->exists()){
            return $next($request);
        }else{
            return redirect()->intended(RouteServiceProvider::HOME);
        }
        
    }
}
