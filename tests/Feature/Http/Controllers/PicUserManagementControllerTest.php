<?php

namespace Tests\Feature\Http\Controllers;

use App\Http\Controllers\PicUserManagementController;
use App\Models\Talent;
use App\Models\User;
use Database\Seeders\CandidateCardSeeder;
use Database\Seeders\CardStatusSeeder;
use Database\Seeders\EmployeeRequestFormSeeder;
use Database\Seeders\RequestApprovalSeeder;
use Database\Seeders\RoleSeeder;
use Database\Seeders\TalentSeeder;
use Database\Seeders\UserSeeder;
use Generator;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Auth;
use Tests\TestCase;
use Tests\TestTraits\CreateUserTestTrait;

class PicUserManagementControllerTest extends TestCase
{
    use RefreshDatabase, CreateUserTestTrait;

    public function setUp(): void
    {
        parent::setUp();

        $this->seed([
            RoleSeeder::class,
            CardStatusSeeder::class,
            UserSeeder::class,
            EmployeeRequestFormSeeder::class,
            TalentSeeder::class,
            RequestApprovalSeeder::class,
            CandidateCardSeeder::class
        ]);
    }

    public function resourceRoute(): Generator
    {
        yield from  [
            'method index' => ['index'],
            'method show' => ['show'],
            'method update' => ['update'],
            'method destroy' => ['destroy']
        ];
    }

    /** 
     * @test 
     * @dataProvider resourceRoute
     * */
    public function resource_routes_must_be_guarded_by_pic_middleware(string $method)
    {
        $this->assertActionUsesMiddleware(PicUserManagementController::class, $method, ['role.check:pic']);
    }

    /** @test */
    public function can_list_all_users()
    {
        $pic = $this->createPicUser();

        $this->actingAs($pic)
            ->getJson(route('pic-user-managements.index'))
            ->assertOk()
            ->assertJsonStructure([
                'data' => [
                    0 => [
                        'id',
                        'name',
                        'email'
                    ]
                ],
                'meta' => [],
                'links' => []
            ]);
    }

    /** @test */
    public function pic_can_create_new_user_account_and_updates_talent_field()
    {
        $this->withoutExceptionHandling();
        $pic = $this->createPicUser();
        $talent = Talent::where('candidate_id', null)
            ->get()
            ->random(1)
            ->first();

        $payload = [
            'name' => '::name::',
            'email' => 'newEmail@test.com',
            'password' => '123123123',
            'talent_id' => $talent->id
        ];

        $res = $this->actingAs($pic)
            ->postJson(route('pic-user-managements.store'), $payload)
            ->assertCreated();

        $this->assertDatabaseHas('users', [
            'name' => $payload['name'],
            'last_updated_by_id' => $pic->id
        ]);

        $this->assertDatabaseHas('talents', [
            'id' => $talent->id,
            'candidate_id' => $res['id']
        ]);
    }

    /** @test */
    public function pic_can_update_user_accounts_and_user_can_login_with_new_password()
    {
        $pic = $this->createPicUser();

        $user = User::candidates()->get()->random(1)->first();

        $payload = [
            'name' => 'updatedName',
            'password' => 'updated'
        ];

        $this->actingAs($pic)
            ->patchJson(
                route('pic-user-managements.update', ['pic_user_management' => $user->id]),
                $payload
            )
            ->assertOk();

        $this->assertDatabaseHas('users', [
            'name' => 'updatedName',
            'password' => bcrypt('updated')
        ]);
    }

    /** @test */
    public function pic_can_destroy_user()
    {
        $pic = $this->createPicUser();

        $user = User::candidates()->get()->random(1)->first();

        $this->actingAs($pic)
            ->deleteJson(route('pic-user-managements.destroy', ['pic_user_management' => $user->id]))
            ->assertNoContent();

        $this->assertSoftDeleted($user);
    }
}
