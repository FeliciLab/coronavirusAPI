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

Route::middleware(['auth:api'])->group(function () {
    Route::get('/casos-ceara-internados', 'CasosCearaController@casosCearaInternados');
});

Route::get('/casos-novos-ceara-por-dia', 'CasosCearaController@casosNovosCearaPorDia');
Route::get('/casos-ceara-por-dia', 'CasosCearaController@casosCearaPorDia');
Route::get('/quantidade-casos-confirmados-por-municipio', 'CasosCearaController@quantidadeCasosConfirmadorPorMunicipio');
