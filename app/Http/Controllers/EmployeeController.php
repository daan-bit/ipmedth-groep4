<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employee;
use App\Models\User;
use DB;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class EmployeeController extends Controller
{
    public function getTeacher()
    {
        $employee = Employee::where('user_id', '=', Auth::user()->id)->first();

        error_log($employee);

        return Inertia::render('Teachers/Overview', ['employee' => $employee]);
    }

    public function getAdmin()
    {
        $employee = Employee::where('user_id', '=', Auth::user()->id)->first();

        return Inertia::render('Admin/Overview', ['employee' => $employee]);
    }
}
