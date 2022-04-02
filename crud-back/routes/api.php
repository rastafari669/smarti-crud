<?php

use App\Http\Controllers\DogController;

Route::any('add','userController@add');
Route::any('update','userController@update');
Route::any('delete','userController@delete');
Route::any('show','userController@show');


Route::resource('dogs',DogController::class);

Route::get('/dogs/search/{name}',[DogController::class,'search']);
