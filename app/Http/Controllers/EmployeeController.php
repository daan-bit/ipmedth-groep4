<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employee;
use App\Models\Group;
use App\Models\Student;
use App\Models\User;
use DB;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class EmployeeController extends Controller
{  
    //==========================================
    //=================TEACHER==================
    //==========================================

    public function getOverview()
    {
        $employee = Employee::where('user_id', '=', Auth::user()->id)->first();
        $groups = $employee->groups->sortByDesc('school_year')->sortBy('name');

        error_log($employee);

        return Inertia::render('Teachers/Overview', ['employee' => $employee, 'groups' => $groups]);
    }

    public function getGroup($id)
    {
        $group = Group::where('id', '=', $id)->first();
        $students = Student::where('group_id', '=', $id)->get();

        return Inertia::render('Teachers/Group', ['group' => $group, 'students' => $students]);
    }


    //==========================================
    //==================ADMIN===================
    //==========================================

    public function getAdmin()
    {
        $employee = Employee::where('user_id', '=', Auth::user()->id)->first();

        return Inertia::render('Admin/Overview', ['employee' => $employee]);
    }

    public function getAdminSettings(){
        return Inertia::render('Admin/Settings');
    }
}
