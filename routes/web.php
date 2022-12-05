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

// Deze laten staan, later gebruiken voor wachtwoord reset/register
// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', function () {
    return redirect()->intended('students/login');;
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

//Testpagina
Route::get('/test', [App\Http\Controllers\TestController::class, 'index']);

//LEERLINGEN
//Studenten overzichtspagina > redirect wanneer NIET ingelogd naar /login
 Route::get('students/login', [App\Http\Controllers\StudentController::class, 'index']);
 Route::get('students/login/{id}', [App\Http\Controllers\StudentController::class, 'get'])->name('student.login');
 Route::post('students/login', [App\Http\Controllers\StudentController::class, 'store'])->name('students.login');

//Studenten login > hier kan student inloggen > redirect naar /
// Route::get('/login', [], '')
//Studenten overzichtspagina > redirect wanneer NIET ingelogd naar /students/login
Route::get('students/login', [App\Http\Controllers\StudentController::class, 'index']);
Route::get('students/login/{id}', [App\Http\Controllers\StudentController::class, 'get'])->name('student.login');
Route::post('students/login', [App\Http\Controllers\StudentController::class, 'store'])->name('students.login');

//Pagina van bepaalde wereld - Alex
Route::middleware(['auth', 'student'])->group(function(){
    Route::get('/world/{id}', [App\Http\Controllers\WorldController::class, 'get'])->name('world.page');
    // Route::get('/{world_id}/{level_id}', [], '');
});
//Pagina van opdracht binnnen een bepaalde wereld

//Vrij tekenen
Route::get('/sandbox', [App\Http\Controllers\StudentController::class, 'sandbox']);

//Tekeningen bekijken
// Route::get('/album', [], '');


//==========================================
//================EMPLOYEES=================
//==========================================

Route::get('/login', [App\Http\Controllers\AuthenticatedSessionController::class, 'store']);
//Register route

//DOCENTEN
Route::middleware(['auth', 'teacher'])->group(function(){
    //Docent overzichtspagina > redirect naar /docent/login (zelfde pagina als admin)
    Route::get('/docent/overview', [App\Http\Controllers\EmployeeController::class, 'getTeacher']);

    //Overzicht klas 
    Route::get('/docent/groep/{id}', [App\Http\Controllers\EmployeeController::class, 'getGroup']);
    
    //Instellingenpagina van docent
    // Route::get('/docent/instellingen', [], '');
});

//ADMIN
//Admin overzichtspagina > redirect naar /admin/login (zelfde pagina als docent)
Route::middleware(['auth', 'admin'])->group(function(){
   Route::get('/admin/overview', [App\Http\Controllers\EmployeeController::class, 'getAdmin']);
});


require __DIR__.'/auth.php';
