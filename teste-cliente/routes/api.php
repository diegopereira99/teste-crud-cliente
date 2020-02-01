<?php

use App\Http\Controllers\ClienteController;
use Illuminate\Http\Request; 

Route::get('clientes/', 'ClienteController@getClientes'); 
Route::get('clientes/{id}', 'ClienteController@getClienteById'); 
Route::put('clientes/{id}', 'ClienteController@updateCliente'); 
Route::post('clientes', 'ClienteController@saveCliente'); 
Route::delete('clientes/{id}', 'ClienteController@deleteCliente'); 
