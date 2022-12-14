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

    public function getTeacherOverview()
    {
        $employee = Employee::where('user_id', '=', Auth::user()->id)->first();
        $groups = $employee->groups;

        return Inertia::render('Teachers/Overview', ['employee' => $employee, 'groups' => $groups]);
    }

    public function getTeacherSettings(){
        return Inertia::render('Teachers/Settings');
    }

    public function getGroup($id)
    {
        $group = Group::where('id', '=', $id)->first();
        $students = Student::where('group_id', '=', $id)->get();

        return Inertia::render('Teachers/Group', ['group' => $group, 'students' => $students]);
    }

    // create a new group
    public function createGroup(Request $request)
    {
        $group = new Group();
        $group->school_group = $request->school_group;
        $group->school_year = $request->school_year;
        $group->school_id = $request->school_id;
        $group->save();

        // Link the group to the teacher with the employee_has_groups table
        DB::table('employee_has_groups')->insert([
            'group_id' => $group->id,
            'employee_id' => $request->employee_id,
        ]);

        return redirect()->back();
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
