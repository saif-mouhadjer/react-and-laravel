<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
*/

Route::post('create','UserController@create');

Route::get('index','UserController@index');

Route::post('showuser/{id}','UserController@showuser');

Route::post('update/{id}','UserController@update');

Route::post('dalete/{id}','UserController@dalete');
