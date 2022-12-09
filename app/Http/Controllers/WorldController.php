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

class WorldController extends Controller
{
    public function getWorld($id)
    {
        $world = World::where('world', '=', $id)->get();
        $student = Student::where('user_id','=', Auth::user()->id)->first();
        {
            return Inertia::render('Worlds/World', ['world' => $world, 'student' => $student]);
        }
    }
}
