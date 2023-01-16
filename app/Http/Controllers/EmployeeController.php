<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employee;
use App\Models\Group;
use App\Models\Student;
use App\Models\User;
use App\Models\Result;
use App\Models\Assignment;
use App\Models\Drawing;
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
        $employee = Employee::where('user_id', '=', Auth::user()->id)->first();
        $group = Group::where('id', '=', $id)->first();
        $students = Student::where('group_id', '=', $id)->get();
        $allResults = [];
        foreach ($students as $student) {
            $results = $student->StudentResults;

            array_push($allResults,$results);
        }
        $assignments = Assignment::all();

        return Inertia::render('Teachers/Group', ['employee' => $employee, 'group' => $group, 'students' => $students, 'allResults' => $allResults, 'assignments' => $assignments]);
    }
    
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

    public function updateGroup(Request $request, $id)
    {
        $group = Group::where('id', '=', $id)->first();
        $group->school_group = $request->school_group;
        $group->school_year = $request->school_year;
        $group->school_id = $request->school_id;
        $group->save();

        return redirect()->back();
    }

    public function deleteGroup($id)
    {
        // get the students in the group
        $students = Student::where('group_id', '=', $id)->get();
        
        foreach($students as $student){
            User::where('id', '=', $student->user_id)->first()->delete();
        }
        
        // Delete the group
        Group::where('id', '=', $id)->first()->delete();
        
        return redirect()->back();
    }

    // Add new student to the group
    public function addStudent($id, $username)
    {
        // Create random password consisting of two words out the following list
        // Vogel, Boom, Hondje, Katje, Fiets, Jongen, Meisje, Olifant, Leeuw, Papegaai
        // Eenn wachtwoord mag niet bestaan uit twee dezelfde woorden

        $words_array = array("Vogel", "Boom", "Hondje", "Katje", "Fiets", "Jongen", "Meisje", "Olifant", "Leeuw", "Papegaai");
        $random_keys = array_rand($words_array, 2);
        $password = $words_array[$random_keys[0]] . $words_array[$random_keys[1]];

        $user = new User();
        $user->username = $username;
        $user->password = bcrypt($password);
        $user->save();

        var_dump($user);

        $student = new Student();
        $student->first_name = $username;
        $student->group_id = $id;
        $student->user_id = $user->id;
        $student->password = $password;
        $student->save();

        return redirect()->back();
    }

    // Remove student
    public function deleteStudent($id, $user_id)
    {
        User::where('id', '=', $user_id)->first()->delete();

        return redirect()->back();
    }

    // View student results
    public function getStudentResults($id, $student_id)
    {
        $employee = Employee::where('user_id', '=', Auth::user()->id)->first();
        $group = Group::where('id', '=', $id)->first();
        $assignments = Assignment::all();
        $student = Student::where('id', '=', $student_id)->first();
        $results = $student->StudentResults;

        // get all drawings from the student
        $drawings = Drawing::where('student_id', '=', $student_id)->get();

        return Inertia::render('Teachers/StudentResults', ['student' => $student, 'results' => $results, 'drawings' => $drawings, 'employee' => $employee, 'group' => $group, 'assignments' => $assignments]);
    }

    // update student result
    public function updateStudentResult(Request $request, $id, $student_id)
    {
        // get the result where student_id and assignment_id match
        $result = Result::where('student_id', '=', $student_id)->where('assignment_id', '=', $request->assignment_id)->first();
        $result->status = $request->status;
        $result->save();

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
