<?php

use Illuminate\Support\Facades\Route;

Route::prefix('middleware-test')->name('middleware-test.')
    ->group(function () {
        Route::get('/pic', function () {
            return 'test';
        })->middleware(['role.check:pic'])->name('pic');

        Route::get('/leader', function () {
            return 'test';
        })->middleware(['role.check:leader'])->name('leader');

        Route::get('/candidate', function () {
            return 'test';
        })->middleware(['role.check:candidate'])->name('candidate');

        Route::get('/all', function () {
            return 'test';
        })->middleware(['role.check:leader,pic,candidate'])->name('all');
    });
