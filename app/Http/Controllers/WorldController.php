<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;
use DB;
use App\Models\World;
use Illuminate\Support\Facades\Log;

class WorldController extends Controller
{
    public function get($id)
    {
        $world = World::where('world', '=', $id)->get(); {
            return Inertia::render('Worlds/Overview', ['world' => $world]);
        }
    }
}
