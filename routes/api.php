<?php

use App\Http\Controllers\EmployeeRequestFormController;
use App\Http\Controllers\MeController;
use App\Http\Controllers\RequestApprovalController;
use App\Http\Controllers\TalentController;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/me', MeController::class)->name('me');
    Route::apiResource('talents', TalentController::class)->except('destroy');
    Route::apiResource('employee-request-forms', EmployeeRequestFormController::class);
    Route::patch('request-approvals/{request_approval}', [RequestApprovalController::class, 'update'])->name('request-approvals.update')->middleware('role.check:pic');
});

Route::group(['middleware' => ['signed']], function () {
    Route::name('request-approvals.')->group(function () {
        Route::get('request-approvals/{id}', [RequestApprovalController::class, 'show'])->name('show');
        Route::post('request-approvals/{id}', [RequestApprovalController::class, 'store'])->name('store');
    });
});

require __DIR__ . '/testApi.php';
