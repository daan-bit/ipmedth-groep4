<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Drawing;
use App\Models\Student;
use DB;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;
use App\Models\Result;
use App\Models\Assignment;

class DrawingController extends Controller
{

    public function getDrawings() {
        $student = Student::where('user_id', '=', Auth::user()->id)->first();
        //get the student based on logged in id of users (master) table
        $drawings = Drawing::where('student_id', '=', $student->id)->get();
        // get all drawings based on id of a student
        $drawingInfo = Result::where('student_id', '=', $student->id)->get();
        //get all assignments that are in db
        $assignments = Assignment::get();

        return Inertia::render('Album/Overview', ['drawings' => $drawings, 'drawingInfo' => $drawingInfo, 'assignments' => $assignments]);
    }
}
