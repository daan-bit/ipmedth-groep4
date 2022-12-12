<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employee;
use App\Models\Group;
use App\Models\Student;
use App\Models\User;
use App\Models\Result;
use App\Models\Assignment;
use DB;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class EmployeeController extends Controller
{  
    //==========================================
    //=================TEACHER==================
    //==========================================

    public function getTeacher()
    {
        $employee = Employee::where('user_id', '=', Auth::user()->id)->first();

        error_log($employee);

        return Inertia::render('Teachers/Overview', ['employee' => $employee]);
    }

    public function getGroup($id)
    {
        $group = Group::where('id', '=', $id)->first();
        $students = Student::where('group_id', '=', $id)->get();

        return Inertia::render('Teachers/Group', ['group' => $group, 'students' => $students]);
    }

    //Deze functie later samenvoegen met getGroup functie hierboven.
    public function getResultsPerGroup($group_id){
        $students = Student::where('group_id', '=', $group_id)->get();

        $allResults = [];
        foreach ($students as $student) {
            $results = $student->StudentResults;

            array_push($allResults,$results);
        }

        $assignments = Assignment::all();

        return Inertia::render('Teachers/OverviewPerGroup', ['allResults' => $allResults, 'students' => $students, 'assignments' => $assignments]);
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
