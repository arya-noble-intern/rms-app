<?php

use App\Http\Controllers\EmployeeRequestFormController;
use App\Http\Controllers\MeController;
use App\Http\Controllers\TalentController;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/me', MeController::class)->name('me');
    Route::apiResource('talents', TalentController::class)->except('destroy');
    Route::apiResource('employee-request-forms', EmployeeRequestFormController::class);
});

require __DIR__ . '/testApi.php';
