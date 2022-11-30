<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Teacher;
use DB;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class TeacherController extends Controller
{
    public function get()
    {
        $teacher = Teacher::where('user_id', '=', Auth::user()->id)->first();

        return Inertia::render('Teachers/Overview', ['teacher' => $teacher]);
    }
}
