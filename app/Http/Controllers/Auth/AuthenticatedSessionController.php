<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;
use App\Models\Employee;
use App\Models\Role;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     *
     * @param  \App\Http\Requests\Auth\LoginRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(LoginRequest $request)
    {
        $request->authenticate();

        $request->session()->regenerate();

        $employee_role_id = Employee::where('user_id', '=', Auth::user()->id)->first()->role_id;
        $admin_id = Role::where('name', '=', 'admin')->first()->id;

        if($employee_role_id == $admin_id){
            return redirect()->intended('/admin/overview');
        }else{
            return redirect()->intended('/docent/overview');
        }
    }

    /**
     * Destroy an authenticated session.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Request $request)
    {
        $employee_role_id = Employee::where('user_id', '=', Auth::user()->id)->first()->role_id;
        $admin_id = Role::where('name', '=', 'admin')->first()->id;
        $teacher_id = Role::where('name', '=', 'docent')->first()->id;

        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();
       
        if($employee_role_id == $admin_id || $employee_role_id == $teacher_id){
            return redirect()->intended('/login');
        }else{
            return redirect()->intended('/');
        }
    }
}
