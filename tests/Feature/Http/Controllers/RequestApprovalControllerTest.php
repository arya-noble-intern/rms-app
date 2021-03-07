<?php

namespace Tests\Feature\Http\Controllers;

use App\Http\Controllers\RequestApprovalController;
use App\Models\EmployeeRequestForm;
use App\Models\RequestApproval;
use Database\Seeders\EmployeeRequestFormSeeder;
use Database\Seeders\RequestApprovalSeeder;
use Database\Seeders\RoleSeeder;
use Database\Seeders\UserSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\URL;
use Tests\TestCase;
use Tests\TestTraits\CreateUserTestTrait;

class RequestApprovalControllerTest extends TestCase
{
    use RefreshDatabase, CreateUserTestTrait;

    public function setUp(): void
    {
        parent::setUp();

        $this->seed([
            RoleSeeder::class,
            UserSeeder::class,
            EmployeeRequestFormSeeder::class,
            RequestApprovalSeeder::class
        ]);
    }

    /** @test */
    public function api_must_be_using_signed_middleware()
    {
        $this->assertActionUsesMiddleware(RequestApprovalController::class, 'store', 'signed');
        $this->assertActionUsesMiddleware(RequestApprovalController::class, 'show', 'signed');
    }

    /** @test */
    public function lhc_can_show_erf_for_approval()
    {
        $this->withoutExceptionHandling();
        $randomErf = EmployeeRequestForm::all()->random(1)->first();
        $signedUrl = URL::temporarySignedRoute(
            'request-approvals.show',
            now()->addDay(),
            ['id' => $randomErf->id]
        );

        $this->getJson($signedUrl)
            ->assertOk()
            ->assertJsonStructure(
                [
                    'data' =>
                    [
                        'id',
                        'title',
                        'request_store_url'
                    ]
                ]
            );
    }

    /** @test */
    public function lhc_can_store_approval()
    {
        $randomErf = EmployeeRequestForm::all()->random(1)->first();
        $signedUrl = URL::temporarySignedRoute(
            'request-approvals.show',
            now()->addDay(),
            ['id' => $randomErf->id]
        );

        $erf = $this->getJson($signedUrl);
        $this->postJson($erf['data']['request_store_url'], [
            'approval_by_lhc' => 1,
            'notes_by_lhc' => '::notes::'
        ])->assertCreated();

        $this->assertDatabaseHas('request_approvals', [
            'employee_request_form_id' => $randomErf->id,
            'approval_by_lhc' => 1,
            'notes_by_lhc' => '::notes::'
        ]);
    }

    /** @test */
    public function pic_can_update_approvals()
    {
        $this->assertActionUsesMiddleware(RequestApprovalController::class, 'update', 'role.check:pic');

        $approval = RequestApproval::where('approval_by_lhc', 1)
            ->where('approval_by_pic', null)
            ->get()
            ->random(1)
            ->first();

        $pic = $this->createPicUser();
        $this->actingAs($pic);
        $this->patchJson(
            route('request-approvals.update', ['request_approval' => $approval->id]),
            [
                'approval_by_pic' => 1,
                'notes_by_pic' => '::notes_by_pic::'
            ]
        )->assertOk();

        $this->assertDatabaseHas(
            'request_approvals',
            [
                'id' => $approval->id,
                'approval_by_pic' => 1,
                'pic_id' => $pic->id,
                'notes_by_pic' => '::notes_by_pic::'
            ]
        );
    }
}
