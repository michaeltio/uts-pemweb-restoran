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
//untuk delete menu

Route::get('/menus', [MenuController::class, 'index']);
Route::delete('/delete-model/{id}', [MenuController::class, 'deleteModel']);
Route::put('/edit-menu/{id}', [MenuController::class, 'edit']);
Route::post('/create-menu', [MenuController::class]);

Route::get('/orders', [OrderController::class, 'index']);

Route::put('/updatequantity', [OrderController::class, 'update']);