<?php

namespace App\Http\Controllers;
use Inertia\Inertia;

use Illuminate\Http\Request;

class TestController extends Controller
{
    public function index()
    {
        return Inertia::render('Test/Test');
    }
}
