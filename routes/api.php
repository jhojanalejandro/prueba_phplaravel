<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/tienda','TiendaController@store');
Route::post('/producto','API/ControllerProducto@store');
Route::post('/producto/edit','API/ControllerProducto@update');
Route::post('/producto/delete','API/ControllerProducto@destroy');
