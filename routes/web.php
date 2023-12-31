<?php

use App\Http\Controllers\ProfileController;
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
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register')
    ]);
})->name('/');

//incoming change
//ini untuk test makanan dashboard menu
Route::get('/home', function () {
    return Inertia::render('Home');
})->name('home');

//crud admin
Route::get('/admin', function () {
    return Inertia::render('Admin');
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
//})->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'isAdmin'])->name('dashboard');

Route::get('/404', function () {
    return Inertia::render('404');
})->name('404');

Route::get('/menu', function () {
    return Inertia::render('Menu');
})->name('menu');

Route::get('/order', function () {
    return Inertia::render('Order');
})->middleware(['auth'])->name('order');


//incoming change ^^

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
