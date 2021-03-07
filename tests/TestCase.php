<?php

namespace Tests;

use Database\Seeders\RoleSeeder;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Illuminate\Support\Facades\Artisan;
use JMac\Testing\Traits\AdditionalAssertions;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication, AdditionalAssertions;

    public function setUp(): void
    {
        parent::setUp();

        Artisan::call('optimize');
    }
}
