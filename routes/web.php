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
//Studenten login > hier kan student inloggen > redirect naar /
// Route::get('/login', [], '')

Route::middleware(['guest'])->group(function () {
    //overzicht studenten
    Route::get('students/login', [App\Http\Controllers\StudentController::class, 'index'])->name('student.overview');

    //inloggen 1 student
    Route::get('students/login/{id}', [App\Http\Controllers\StudentController::class, 'get'])->name('student.login');

    //post request voor user check
    Route::post('students/login', [App\Http\Controllers\StudentController::class, 'store'])->name('students.login');
});
//Pagina van bepaalde wereld - Alex
Route::middleware(['AuthStudent', 'student'])->group(function () {
    //wereld bekijken
    Route::get('/world/{id}', [App\Http\Controllers\WorldController::class, 'getWorld'])->name('world.page');

    //Tekeningen bekijken
    Route::get('/album', [App\Http\Controllers\DrawingController::class, 'getDrawings'])->name('album.page');

    //Pagina van opdracht binnnen een bepaalde wereld
    Route::get('/level/{world_id}/{level_id}', [App\Http\Controllers\StudentController::class, 'getLevel']);
    Route::post('/level/insert-drawing', [App\Http\Controllers\StudentController::class, 'insertDrawing']);

    //Vrij tekenen
    Route::get('/sandbox', [App\Http\Controllers\StudentController::class, 'sandbox']);
});



//==========================================
//================EMPLOYEES=================
//==========================================

Route::get('/login', [App\Http\Controllers\AuthenticatedSessionController::class, 'store']);

Route::middleware(['auth'])->group(function () {
    Route::post('/change-password', [App\Http\Controllers\PasswordController::class, 'updatePassword']);
});

//DOCENTEN
Route::middleware(['auth', 'teacher'])->group(function () {
    Route::get('/docent', function() {
        return redirect()->intended('/docent/overzicht');
    });

    //Docent overzichtspagina > redirect naar /docent/login (zelfde pagina als admin)
    Route::get('/docent/overzicht', [App\Http\Controllers\EmployeeController::class, 'getTeacherOverview'])->name('docent.overzicht');

    // Docenten kunnen een groep maken met een post request
    Route::post('/docent/groep', [App\Http\Controllers\EmployeeController::class, 'createGroup']);
});

Route::middleware(['auth', 'teacher', 'teacherHasGroup'])->group(function () {
    //Overzicht van groep
    Route::get('/docent/overzicht/{id}', [App\Http\Controllers\EmployeeController::class, 'getGroup']);

    //Overzicht groep
    Route::get('/docent/groep/{id}', [App\Http\Controllers\EmployeeController::class, 'getGroup']);

    // Docenten kunnen een groep verwijderen met een delete request
    Route::delete('/docent/groep/{id}', [App\Http\Controllers\EmployeeController::class, 'deleteGroup']);

    // Docenten kunnen een groep updaten met een put request
    Route::put('/docent/groep/{id}', [App\Http\Controllers\EmployeeController::class, 'updateGroup']);

    // Docenten kunnen de resultaten van een student bekijken
    Route::get('/docent/overzicht/{id}/{student_id}', [App\Http\Controllers\EmployeeController::class, 'getStudentResults']);

    // Docenten kunnen een student toevoegen aan een groep met een post request
    Route::post('/docent/overzicht/{id}/{username}', [App\Http\Controllers\EmployeeController::class, 'addStudent']);

    // Docenten kunnen een student verwijderen
    Route::delete('/docent/overzicht/{id}/{user_id}', [App\Http\Controllers\EmployeeController::class, 'deleteStudent']);

    // Docenten kunnen een resultaat aanpassen
    Route::post('/docent/overzicht/{id}/{student_id}/resultaat', [App\Http\Controllers\EmployeeController::class, 'updateStudentResult']);
});

//ADMIN
//Admin overzichtspagina > redirect naar /admin/login (zelfde pagina als docent)
Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('/admin', [App\Http\Controllers\EmployeeController::class, 'getAdmin']);
    Route::post('/docent', [App\Http\Controllers\EmployeeController::class, 'createTeacher']);
    Route::put('/docent/{user_id}', [App\Http\Controllers\EmployeeController::class, 'updateTeacher']);
    Route::delete('/docent/{user_id}', [App\Http\Controllers\EmployeeController::class, 'deleteTeacher']);
});


require __DIR__ . '/auth.php';
