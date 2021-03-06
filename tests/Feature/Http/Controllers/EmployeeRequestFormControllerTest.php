<?php

namespace Tests\Feature\Http\Controllers;

use App\Http\Controllers\EmployeeRequestFormController;
use App\Mail\RequestApprovalMail;
use App\Models\EmployeeRequestForm;
use Database\Seeders\RoleSeeder;
use Generator;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;
use Tests\TestTraits\CreateUserTestTrait;

class EmployeeRequestFormControllerTest extends TestCase
{
    use RefreshDatabase, CreateUserTestTrait;

    public function setUp(): void
    {
        parent::setUp();
        $this->seed(RoleSeeder::class);
    }

    public function resourceRoutesProvider(): Generator
    {
        yield from [
            'method index' => ['index'],
            'method show' => ['show'],
            'method update' => ['update'],
            'method destroy' => ['destroy']
        ];
    }

    /**
     * @test 
     * @dataProvider resourceRoutesProvider
     */
    public function unauthenticated_user_can_not_access_api(string $method)
    {
        $this->assertActionUsesMiddleware(
            EmployeeRequestFormController::class,
            $method,
            ['auth:sanctum']
        );
    }

    /** 
     * @test 
     * @dataProvider resourceRoutesProvider
     * */
    public function pic_and_leader_can_access_api(string $method)
    {
        $this->assertActionUsesMiddleware(
            EmployeeRequestFormController::class,
            $method,
            ['role.check:pic,leader']
        );
    }

    /**
     * @test
     */
    public function only_leader_can_access_api()
    {
        $this->assertActionUsesMiddleware(
            EmployeeRequestFormController::class,
            'store',
            ['role.check:leader']
        );
    }

    /**
     * @test
     */
    public function leader_can_create_employee_request_form()
    {
        $leader = $this->createLeaderUser();

        $erf = EmployeeRequestForm::factory([
            'user_id' => $leader->id
        ])->make();

        $this->actingAs($leader)
            ->postJson(route('employee-request-forms.store'), json_decode($erf, true))
            ->assertCreated();

        $this->assertDatabaseHas('employee_request_forms', [
            'user_id' => $leader->id,
            'title' => $erf->title
        ]);
    }

    /**
     * @test
     */
    public function pic_can_list_all_employee_request_forms()
    {
        $pic = $this->createPicUser();
        $leader = $this->createLeaderUser();
        EmployeeRequestForm::factory([
            'user_id' => $leader->id
        ])->count(10)->create();

        $this->actingAs($pic)
            ->getJson(route('employee-request-forms.index'))
            ->assertOk()
            ->assertJsonStructure([
                'data' => [
                    0 => [
                        'id',
                        'title'
                    ]
                ],
                'meta' => [],
                'links' => []
            ]);
    }

    /**
     * @test
     */
    public function leader_can_list_his_only_own_employee_request_forms()
    {
        $leaderOne = $this->createLeaderUser();
        $leaderTwo = $this->createLeaderUser();

        EmployeeRequestForm::factory([
            'user_id' => $leaderOne->id
        ])->count(3)->create();

        EmployeeRequestForm::factory([
            'user_id' => $leaderTwo->id
        ])->count(3)->create();

        $this->actingAs($leaderOne)
            ->getJson(route('employee-request-forms.index'))
            ->assertJsonMissing([
                'user_id' => $leaderTwo->id
            ]);
    }

    /**
     * @test
     */
    public function leader_can_update_his_employee_request_form()
    {
        $leader = $this->createLeaderUser();
        $erf = EmployeeRequestForm::factory()->for($leader)->create();

        $payload = [
            'title' => '::title::'
        ];

        $this->actingAs($leader)
            ->patchJson(route(
                'employee-request-forms.update',
                ['employee_request_form' => $erf->id]
            ), $payload)
            ->assertOk();

        $this->assertDatabaseHas('employee_request_forms', [
            'user_id' => $leader->id,
            'title' => $payload['title']
        ]);
    }

    /**
     * @test
     */
    public function leader_can_not_update_other_employee_request_form()
    {
        $leaderOne = $this->createLeaderUser();
        $leaderTwo = $this->createLeaderUser();

        $erfOne = EmployeeRequestForm::factory()->for($leaderOne)->create();

        $this->actingAs($leaderTwo)
            ->patchJson(
                route('employee-request-forms.update', ['employee_request_form' => $erfOne->id]),
                ['title' => '::title::']
            )
            ->assertForbidden();

        $this->assertDatabaseMissing(
            'employee_request_forms',
            [
                'user_id' => $leaderOne->id,
                'title' => '::title::'
            ]
        );
    }

    /** @test */
    public function leader_can_show_his_employee_request_form()
    {
        $leader = $this->createLeaderUser();

        $erf = EmployeeRequestForm::factory()->for($leader)->create();
        $this->actingAs($leader)
            ->getJson(route(
                'employee-request-forms.show',
                ['employee_request_form' => $erf->id]
            ))
            ->assertOk()
            ->assertJsonFragment(
                ['id' => $erf->id]
            );
    }

    /**@test */
    public function leader_can_not_show_other_employee_request_form()
    {
        $leaderOne = $this->createLeaderUser();
        $leaderTwo = $this->createLeaderUser();

        $erf = EmployeeRequestForm::factory()->for($leaderOne)->create();
        $this->actingAs($leaderTwo)
            ->getJson(route(
                'employee-request-forms.show',
                ['employee_request_form ' => $erf->id]
            ))->assertForbidden();
    }

    /** @test */
    public function system_must_auto_send_request_approval()
    {
        Mail::fake();

        $leader = $this->createLeaderUser();
        $erf = EmployeeRequestForm::factory([
            'user_id' => $leader->id
        ])->make();

        $this->actingAs($leader)
            ->postJson(
                route('employee-request-forms.store'),
                json_decode($erf, true)
            );

        Mail::assertQueued(RequestApprovalMail::class);
    }
}
