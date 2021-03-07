<?php

namespace Tests\Feature\Http\Controllers;

use App\Http\Controllers\CandidateCardController;
use App\Models\CandidateCard;
use App\Models\EmployeeRequestForm;
use App\Models\Talent;
use App\Models\User;
use Database\Seeders\DatabaseSeeder;
use Database\Seeders\RoleSeeder;
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
            DatabaseSeeder::class
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
        $this->assertActionUsesMiddleware(CandidateCardController::class, $action, $middleware);
    }

    /** @test */
    public function pic_can_create_candidate_card()
    {
        $pic = $this->createPicUser();
        $card = $this->createCard($pic);

        $this->assertDatabaseHas('employee_request_forms', [
            'id' => $card->id,
            'pic_id' => $pic->id,
            'last_updated_by' => $pic->id
        ]);
    }

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
            'talent_id' => $talent->id
        ];

        $this->actingAs($pic)
            ->patchJson(route(
                'candidate-cards',
                ['candidate_card' => $card->id]
            ), $payload)
            ->assertOk();

        $this->assertDatabaseHas('candidate-cards', [
            'id' => $card->id,
            'talent_id' => $talent->id
        ]);
    }

    /** @test */
    public function candidate_can_show_his_associated_card()
    {
        $pic = $this->createPicUser();
        $card = $this->createCard($pic);
        $candidate = User::candidates()->get()
            ->random(1)
            ->first();

        $card->candidate_id = $candidate->id;
        $card->save();

        $this->actingAs($candidate)
            ->getJson('candidate-cards', ['candidate_card' => $card->id])
            ->assertOk()
            ->assertJsonFragment([
                'candidate_id' => $candidate->id
            ]);
    }

    private function getOneErf(): EmployeeRequestForm
    {
        return EmployeeRequestForm::allAproved()
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

        $res = $this->postJson(route('candidate-cards.store'), $payload)
            ->assertCreated();

        return CandidateCard::find($res['id']);
    }
}
