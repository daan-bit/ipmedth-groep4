<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\Employee;
use App\Models\Role;
use Illuminate\Support\Facades\Auth;

class CheckIfTeacherHasGroup
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
        $employee = Employee::where('user_id', '=', Auth::user()->id)->first();
        $groups = $employee->groups;

        // if the requested group doesn't exist, redirect to the docent/overzicht page
        // if the teacher has no groups, redirect to the docent/overzicht page
        // if the requested group is not in the groups of the teacher, redirect to the docent/overzicht page
        // else, continue to the requested page
        if($request->route('id') == null || $groups->count() == 0 || $groups->where('id', '=', $request->route('id'))->count() == 0){
            return redirect()->route('docent.overzicht');
        } else {
            return $next($request);
        }
    }
}
