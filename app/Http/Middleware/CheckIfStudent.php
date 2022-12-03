<?php

namespace App\Http\Middleware;
use App\Models\Student;
use Closure;
use Illuminate\Http\Request;

class CheckIfStudent
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
        $student = Student::where('user_id', '=', Auth::user()->id)->first();
        if($student) {
            return $next($request);
        } else {
            //Student niet ingelogd? Redirecten naar login
            return redirect()->intended('/students/login');
        }
    }
}
