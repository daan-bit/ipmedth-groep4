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
    return redirect()->intended('students/login');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

//Testpagina
Route::get('/test', [App\Http\Controllers\TestController::class, 'index']);

//LEERLINGEN
//Studenten overzichtspagina > redirect wanneer NIET ingelogd naar /students/login
Route::get('students/login', [App\Http\Controllers\StudentController::class, 'index'])->name('student.overview');
Route::get('students/login/{id}', [App\Http\Controllers\StudentController::class, 'get'])->name('student.login');
Route::post('students/login', [App\Http\Controllers\StudentController::class, 'store'])->name('students.login');

//Pagina van bepaalde wereld - Alex
Route::middleware(['AuthStudent', 'student'])->group(function(){
    Route::get('/world/{id}', [App\Http\Controllers\WorldController::class, 'getWorld'])->name('world.page');
    //Tekeningen bekijken
    Route::get('/album', [App\Http\Controllers\DrawingController::class, 'getDrawings'])->name('album.page');
});
//Pagina van opdracht binnnen een bepaalde wereld
Route::get('level/{world_id}/{level_id}', [App\Http\Controllers\StudentController::class, 'getLevel']);

//Vrij tekenen
Route::get('/sandbox', [App\Http\Controllers\StudentController::class, 'sandbox']);



//==========================================
//================EMPLOYEES=================
//==========================================

Route::get('/login', [App\Http\Controllers\AuthenticatedSessionController::class, 'store']);

Route::middleware(['auth'])->group(function(){
    Route::post('/change-password', [App\Http\Controllers\PasswordController::class, 'updatePassword']);
});

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
   Route::get('/admin/instellingen', [App\Http\Controllers\EmployeeController::class, 'getAdminSettings']);
});


require __DIR__.'/auth.php';
