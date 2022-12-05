<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\Auth\StudentRequest;
use Illuminate\Http\Request;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;
use DB;
use App\Models\Student;
use App\Models\User;
use App\Models\Assignment;
use Illuminate\Support\Facades\Log;

class StudentController extends Controller
{
    public function index()
    {
        $students = Student::get();

        return Inertia::render('Students/Login', ['students' => $students]);
    }

    public function get($id)
    {
        $students = Student::where('id', '=', $id)->get();

        return Inertia::render('Students/UserLogin', ['students' => $students]);
    }

    public function store(StudentRequest $request)
    {
        $request->authenticate();
        $request->session()->regenerate();
        return redirect()->intended('/');
    }

/**
 * > This function returns the `Students/Sandbox` view
 * 
 * @return Inertia::render('Students/Sandbox');
 */
    public function sandbox()
    {
        return Inertia::render('Students/Sandbox');
    }

    public function getLevel($world_id, $level_id){
        $level = Assignment::where([['world', '=', $world_id], ['level', '=', $level_id]])->first();

        return Inertia::render('Students/Level', ['level' => $level]);
    }
}
