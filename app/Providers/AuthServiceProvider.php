<?php

namespace App\Providers;

use App\Models\EmployeeRequestForm;
use App\Models\Talent;
use App\Policies\EmployeeRequestFormPolicy;
use App\Policies\TalentPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
        Talent::class => TalentPolicy::class,
        EmployeeRequestForm::class => EmployeeRequestFormPolicy::class
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        //
    }
}
