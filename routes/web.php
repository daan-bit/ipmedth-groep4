<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

//Testpagina
//Route::get('/test', [App\Http\Controllers\TestController::class, 'index']);

//LEERLINGEN
//Studenten overzichtspagina > redirect wanneer NIET ingelogd naar /login
 Route::get('students/login', [App\Http\Controllers\StudentController::class, 'index']);
 Route::get('students/login/{id}', [App\Http\Controllers\StudentController::class, 'get']);
 Route::post('students/login', [App\Http\Controllers\StudentController::class, 'store'])->name('students.login');

//Pagina van bepaalde wereld
// Route::get('/{world_id}', [], '')

//Pagina van opdracht binnnen een bepaalde wereld
// Route::get('/{world_id}/{level_id}', [], '')

//Vrij tekenen
// Route::get('/sandbox', [], '')

//Tekeningen bekijken
// Route::get('/album', [], '')

//DOCENTEN
//Docent overzichtspagina > redirect naar /docent/login (zelfde pagina als admin)
Route::middleware(['auth', 'teacher'])->group(function(){
    Route::get('/docent/overview', [App\Http\Controllers\TeacherController::class, 'get']);
});

//Admin overzichtspagina > redirect naar /admin/login (zelfde pagina als docent)
// Route::get('/admin/overview', [], '')

//Overzicht klas 
// Route::get('/docent/{school_class_id}', [], '')

//Instellingenpagina van docent
// Route::get('/docent/instellingen', [], '')

require __DIR__.'/auth.php';
