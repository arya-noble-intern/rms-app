<?php

namespace Tests\Feature\Http\Controllers;

use App\Http\Controllers\CandidateCardController;
use App\Models\CandidateCard;
use App\Models\EmployeeRequestForm;
use App\Models\Talent;
use App\Models\User;
use Database\Seeders\CardStatusSeeder;
use Database\Seeders\DatabaseSeeder;
use Database\Seeders\EmployeeRequestFormSeeder;
use Database\Seeders\RequestApprovalSeeder;
use Database\Seeders\RoleSeeder;
use Database\Seeders\TalentSeeder;
use Database\Seeders\UserSeeder;
use Generator;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Tests\TestTraits\CreateUserTestTrait;

class CandidateCardControllerTest extends TestCase
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
        ]);
    }

    public function routeDataProvider(): Generator
    {
        yield from [
            'method index' => ['index', 'role.check:pic,leader'],
            'method show' => ['show', 'role.check:pic,leader,candidate'],
            'method update' => ['update', 'role.check:pic'],
            'method destroy' => ['destroy', 'role.check:pic']
        ];
    }
    /** 
     * @test
     * @dataProvider routeDataProvider 
     * */
    public function these_actions_is_protected_by_middleware(string $action, string $middleware)
    {
        $this->assertActionUsesMiddleware(
            CandidateCardController::class,
            $action,
            [$middleware]
        );
    }

    /** @test */
    public function pic_can_create_candidate_card()
    {
        $pic = $this->createPicUser();
        $card = $this->createCard($pic);

        $this->assertDatabaseHas('candidate_cards', [
            'id' => $card->id,
            'pic_id' => $pic->id,
            'last_updated_by_id' => $pic->id
        ]);
    }

    // /** @test */
    // public function pic_can_list_all_cards()
    // {
    //     $picOne = $this->createPicUser();
    //     $picTwo = $this->createPicUser();

    //     $this->createCard($picOne);
    //     $this->createCard($picTwo);

    //     $count = CandidateCard::all()->count();
    //     $res = $this->actingAs($picOne)
    //         ->getJson(route('candidate-cards.index'));
    //     $this->assertEquals($count, $res['meta']['total']);
    // }

    /** @test */
    public function leader_can_list_his_cards_associated_with_his_erfs()
    {
        $erf = $this->getOneErf();

        $leader = User::find($erf->user_id);

        $res = $this->actingAs($leader)
            ->getJson(route('candidate-cards.index'))
            ->assertOk();

        foreach ($res['data'] as $x) {
            $find = EmployeeRequestForm::find($x['erf_id']);
            $this->assertEquals($leader->id, $find['user_id']);
        }
    }

    /** @test */
    public function pic_can_update_his_card()
    {
        $pic = $this->createPicUser();
        $card = $this->createCard($pic);
        $talent = Talent::all()->random(1)->first();
        $payload = [
            'talent_id' => $talent->id,
            'proceed' => true
        ];

        $this->actingAs($pic)
            ->patchJson(route(
                'candidate-cards.update',
                ['candidate_card' => $card->id]
            ), $payload)
            ->assertOk();

        $this->assertDatabaseHas('candidate_cards', [
            'id' => $card->id,
            'talent_id' => $talent->id
        ]);
    }

    /** @test */
    public function status_changed_after_talent_suggestion()
    {
        $pic = $this->createPicUser();
        $card = $this->createCard($pic);
        $talent = Talent::all()->random(1)->first();
        $payload = [
            'talent_id' => $talent->id,
            'proceed' => true
        ];

        $this->actingAs($pic)
            ->patchJson(route(
                'candidate-cards.update',
                ['candidate_card' => $card->id]
            ), $payload);

        $card = CandidateCard::find($card->id);
        $this->assertEquals(
            config('const.CARD_STATUS_ID.LEADER_APPROVAL_TALENT'),
            $card->card_status_id,
            'status not changed to waiting for leader approval talent'
        );
    }

    /** @test */
    public function candidate_can_show_his_associated_card()
    {
        $this->withoutExceptionHandling();
        $pic = $this->createPicUser();
        $card = $this->createCard($pic);
        $candidate = User::candidates()->get()
            ->random(1)
            ->first();

        $card->candidate_id = $candidate->id;
        $card->save();

        $this->actingAs($candidate)
            ->getJson(route('candidate-cards.show', ['candidate_card' => $card->id]))
            ->assertOk()
            ->assertJsonFragment([
                'candidate_id' => $candidate->id
            ]);
    }

    private function getOneErf(): EmployeeRequestForm
    {
        return EmployeeRequestForm::allApproved()
            ->get()
            ->random(1)
            ->first();
    }

    private function createCard(User $user): CandidateCard
    {
        $this->actingAs($user);

        $erf = EmployeeRequestForm::allApproved()
            ->get()
            ->random(1)
            ->first();

        $payload = CandidateCard::factory([
            'pic_id' => $user->id,
            'employee_request_form_id' => $erf->id,
        ])->make();

        $res = $this->postJson(route('candidate-cards.store'), json_decode($payload, true))
            ->assertCreated();

        return CandidateCard::find($res['id']);
    }
}
