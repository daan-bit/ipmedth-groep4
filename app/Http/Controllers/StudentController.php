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
            error_log('hoi');
                $request->authenticate();
                $request->session()->regenerate();
                return redirect()->intended('/');
            }
        }
            
