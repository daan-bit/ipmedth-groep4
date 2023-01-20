<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;
use DB;
use App\Models\World;
use App\Models\Student;
use Illuminate\Support\Facades\Log;
use App\Models\Result;


class WorldController extends Controller
{
    public function getWorld($id)
    {
        $world = World::where('world', '=', $id)->get();
        $student = Student::where('user_id','=', Auth::user()->id)->first();
        $assignments = Result::where('student_id', '=', $student->id)->get();

        {
            return Inertia::render('Worlds/World', ['world' => $world, 'student' => $student, 'assignments' => $assignments]);
        }
    }
}
