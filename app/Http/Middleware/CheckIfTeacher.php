<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\Employee;
use App\Models\Role;
use Illuminate\Support\Facades\Auth;

class CheckIfTeacher
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
        $employee_role_id = Employee::where('user_id', '=', Auth::user()->id)->first()->role_id;
        $teacher_id = Role::where('name', '=', 'docent')->first()->id;

        if($employee_role_id == $teacher_id){
            return $next($request);
        }else{
            return redirect()->intended('/admin');
        }
       

    }
}
