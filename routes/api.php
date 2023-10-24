<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\OrderController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//get
Route::get('/menus', [MenuController::class, 'index']);
//post
Route::post('/create-menu', [MenuController::class, 'store']);
//delete
Route::delete('/delete-model/{id}', [MenuController::class, 'deleteModel']);

//edit
Route::post('/edit-menu/{id}', [MenuController::class, 'edit']);

Route::post('/order', [OrderController::class, 'addToCart']);

//Route::put('/updatequantity', [OrderController::class, 'update']);
