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
use App\Models\Drawing;
use App\Models\Result;
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
        return redirect()->intended('/world/1');
    }

    /**
     * > This function returns the `Students/Sandbox` view
     * 
     * @return Inertia::render
     */
    public function sandbox()
    {
        return Inertia::render('Students/Sandbox');
    }

    /**
     * > This function gets the level information from the database and passes it to the view
     * 
     * @param integer $world_id The id of the world the level is in
     * @param integer $level_id The level id of the level you want to get.
     * 
     * @return Inertia::render The level view is being returned.
     */
    public function getLevel($world_id, $level_id)
    {
        $level = Assignment::where([['world', '=', $world_id], ['level', '=', $level_id]])->first();
        $student = Student::where('user_id', '=', Auth::user()->id)->first();

        return Inertia::render('Students/Level', ['level' => $level, 'student' => $student]);
    }

    public function insertDrawing(Request $request)
    {
        $request->validate([
            'image' => 'required',
            'assignment_id' => 'required',
            'student_id' => 'required',
        ]);

        $imageName = 'images/drawings/'. time(). '.svg';
        file_put_contents($imageName, $request->image);

        $drawing = new Drawing;
        $drawing->image = $imageName;
        $drawing->assignment_id = $request->assignment_id;
        $drawing->student_id = $request->student_id;
        $drawing->save();

        $drawing_id = Drawing::select('id')->where('image', '=', $imageName)->first();

        $result = new Result;
        $result->status = "1";
        $result->assignment_id = $request->assignment_id;
        $result->student_id = $request->student_id;
        $result->drawing_id = $drawing_id->id;

        $result->save();

        return redirect('/login');
    }
}
