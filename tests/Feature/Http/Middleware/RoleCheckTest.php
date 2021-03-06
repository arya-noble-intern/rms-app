<?php

namespace Tests\Feature\Http\Middleware;

use Database\Seeders\RoleSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Route;
use Tests\TestCase;
use Tests\TestTraits\CreateUserTestTrait;

class RoleCheckTest extends TestCase
{
    use RefreshDatabase, CreateUserTestTrait;

    public function setUp(): void
    {
        parent::setUp();
        $this->seed(RoleSeeder::class);
    }

    /** @test */
    public function pic_can_pass_role_check_pic_middleware()
    {
        $pic = $this->setPicRole($this->createUser());

        $this->actingAs($pic);
        $this->getJson(route('middleware-test.pic'))
            ->assertOk();
    }

    /** @test */
    public function non_pic_can_not_pass_role_check_pic_middleware()
    {
        $user = $this->createUser();

        $this->actingAs($user)
            ->getJson(route('middleware-test.pic'))
            ->assertForbidden();
    }

    /** @test */
    public function leader_can_pass_role_check_leader_middleware()
    {
        $leader = $this->setLeaderRole($this->createUser());

        $this->actingAs($leader);
        $this->getJson(route('middleware-test.leader'))
            ->assertOk();
    }

    /** @test */
    public function non_leader_can_not_pass_role_check_leader_middleware()
    {
        $user = $this->createUser();

        $this->actingAs($user)
            ->getJson(route('middleware-test.leader'))
            ->assertForbidden();
    }

    /** @test */
    public function candidate_can_pass_role_check_candidate_middleware()
    {
        $candidate = $this->setCandidateRole($this->createUser());

        $this->actingAs($candidate);
        $this->getJson(route('middleware-test.candidate'))
            ->assertOk();
    }

    /** @test */
    public function non_candidate_can_not_pass_role_check_candidate_middleware()
    {
        $user = $this->createUser();
        $user = $this->setPicRole($user);

        $this->actingAs($user)
            ->getJson(route('middleware-test.candidate'))
            ->assertForbidden();
    }

    /** @test */
    public function all_roles_can_pass_role_check_middleware()
    {
        $pic = $this->setPicRole($this->createUser());
        $leader = $this->setLeaderRole($this->createUser());

        $this->actingAs($pic)
            ->getJson(route('middleware-test.all'))
            ->assertOk();

        $this->actingAs($leader)
            ->getJson(route('middleware-test.all'))
            ->assertOk();
    }
}
