<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\User;

class AdminController extends Controller
{
    public function get()
    {
        $admin = User::where('id', '=', Auth::user()->id)->first();

        return Inertia::render('Admin/Overview', ['admin' => $admin]);
    }
}
