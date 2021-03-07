<?php

namespace Tests\Feature\Http\Controllers;

use App\Mail\RequestApprovalMail;
use App\Models\EmployeeRequestForm;
use App\Utilities\RequestApprovalUtil;
use Database\Seeders\EmployeeRequestFormSeeder;
use Database\Seeders\RequestApprovalSeeder;
use Database\Seeders\RoleSeeder;
use Database\Seeders\UserSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\URL;
use Tests\TestCase;
use Tests\TestTraits\CreateUserTestTrait;

class RequestApprovalResendControllerTest extends TestCase
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
    public function leader_can_resend_approval_request()
    {
        Mail::fake();

        $leader = $this->createLeaderUser();
        $erf = EmployeeRequestForm::factory()->for($leader)->create();

        $this->actingAs($leader)
            ->postJson(route('request-approvals-resend'), [
                'erf_id' => $erf->id
            ])->assertOk();

        Mail::assertQueued(RequestApprovalMail::class);
    }

    /** @test */
    public function mail_content_must_contain_url()
    {
        $erf = EmployeeRequestForm::all()->random(1)->first();
        $url = RequestApprovalUtil::generateShowUrl($erf);

        $mail = new RequestApprovalMail($erf, $url);
        $mail->assertSeeInText($url);
        $mail->assertSeeInText($erf->title);
    }
}
