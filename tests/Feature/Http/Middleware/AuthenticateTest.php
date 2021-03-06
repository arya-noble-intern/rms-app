<?php

namespace Tests\Feature\Http\Middleware;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Route;
use Tests\TestCase;

class AuthenticateTest extends TestCase
{
    public function setUp(): void
    {
        parent::setUp();

        Route::get('/middleware-test-auth', function () {
            return 'test';
        })->middleware(['auth:sanctum']);
    }

    /** @test */
    public function non_authenticated_user_can_not_pass_auth_middleware()
    {
        $this->getJson('/middleware-test-auth')
            ->assertUnauthorized();
    }
}
