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
//Studenten overzichtspagina > redirect wanneer NIET ingelogd naar /students/login
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


//==========================================
//================EMPLOYEES=================
//==========================================

Route::get('/login', [App\Http\Controllers\AuthenticatedSessionController::class, 'store']);
//Register route

//DOCENTEN
//Docent overzichtspagina > redirect naar /docent/login (zelfde pagina als admin)
Route::middleware(['auth', 'teacher'])->group(function(){
    Route::get('/docent/overview', [App\Http\Controllers\EmployeeController::class, 'getTeacher']);
});

//Overzicht klas 
// Route::get('/docent/{school_class_id}', [], '')

//Instellingenpagina van docent
// Route::get('/docent/instellingen', [], '')

//ADMIN
//Admin overzichtspagina > redirect naar /admin/login (zelfde pagina als docent)

Route::middleware(['auth', 'admin'])->group(function(){
   Route::get('/admin/overview', [App\Http\Controllers\EmployeeController::class, 'getAdmin']);
});


require __DIR__.'/auth.php';
