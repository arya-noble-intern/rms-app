<?php

use App\Http\Controllers\CandidateCardController;
use App\Http\Controllers\EmployeeRequestFormController;
use App\Http\Controllers\MeController;
use App\Http\Controllers\PendingRequestApprovalController;
use App\Http\Controllers\PicUserManagementController;
use App\Http\Controllers\RequestApprovalController;
use App\Http\Controllers\RequestApprovalResendController;
use App\Http\Controllers\StatusController;
use App\Http\Controllers\TalentController;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/me', MeController::class)->name('me');
    Route::apiResource('talents', TalentController::class)->except('destroy');
    Route::apiResource('employee-request-forms', EmployeeRequestFormController::class);
    Route::apiResource('candidate-cards', CandidateCardController::class);
    Route::apiResource('pic-user-managements', PicUserManagementController::class);
    Route::get('statuses', StatusController::class)->name('statuses.index');

    Route::get('pending-request-approvals', [PendingRequestApprovalController::class, 'index'])->name('pending-request-approvals.index');
    Route::patch('request-approvals/{request_approval}', [RequestApprovalController::class, 'update'])->name('request-approvals.update')->middleware('role.check:pic');
    Route::post('request-approvals-resend', RequestApprovalResendController::class)->name('request-approvals-resend');
});

Route::group(['middleware' => ['signed']], function () {
    Route::name('request-approvals.')->group(function () {
        Route::get('request-approvals/{id}', [RequestApprovalController::class, 'show'])->name('show');
        Route::post('request-approvals/{id}', [RequestApprovalController::class, 'store'])->name('store');
    });
});

require __DIR__ . '/testApi.php';
