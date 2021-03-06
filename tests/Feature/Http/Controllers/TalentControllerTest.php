<?php

namespace Tests\Feature\Http\Controllers;

use App\Models\Talent;
use App\Models\User;
use Database\Seeders\DatabaseSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;
use Tests\TestTraits\CreateUserTestTrait;

class TalentControllerTest extends TestCase
{
    use RefreshDatabase, WithFaker, CreateUserTestTrait;

    public function setUp(): void
    {
        parent::setUp();

        $this->seed(DatabaseSeeder::class);
    }

    /** @test */
    public function non_authenticated_users_cannot_access_these_apis()
    {
        $this->getJson(route('talents.index'))
            ->assertStatus(401);

        $this->postJson(route('talents.store'))
            ->assertStatus(401);

        $this->patchJson(route('talents.update', ['talent' => -1]))
            ->assertStatus(401);
    }

    /** @test */
    public function pic_can_create_talent()
    {
        $this->withoutExceptionHandling();
        $user = $this->createUser();
        $pic = $this->setPicRole($user);

        $res = $this->createTalent($pic);
        $this->assertDatabaseHas('talents', ['id' => $res->id, 'name' => $res->name]);
    }

    /** @test */
    public function non_pic_can_not_create_talent()
    {
        $user = $this->createUser();
        $candidate = $this->createUser();
        $leader = $this->setLeaderRole($user);

        $this->actingAs($candidate)
            ->postJson(route('talents.store'), [])
            ->assertStatus(403);

        $this->actingAs($leader)
            ->postJson(route('talents.store'), [])
            ->assertStatus(403);
    }

    /** @test */
    public function pic_can_edit_talent()
    {
        $pic = $this->setPicRole($this->createUser());
        $talent = $this->createTalent($pic);

        $this->actingAs($pic);
        $this->patchJson(route('talents.update', ['talent' => $talent->id]), ['name' => 'updated'])
            ->assertStatus(200);

        $this->assertDatabaseHas('talents', ['id' => $talent->id,  'name' => 'updated']);
    }

    /** @test */
    public function pic_can_list_all_talents()
    {
        $this->withoutExceptionHandling();
        $pic = $this->setPicRole($this->createUser());
        Talent::factory(['pic_id' => $pic->id])->count(10)->create();
        $this->actingAs($pic)
            ->getJson(route('talents.index'))
            ->assertJsonStructure(
                [
                    'data' => [
                        0 =>
                        [
                            'id',
                            'name'
                        ]
                    ],
                    'meta' => [],
                    'links' => []
                ]
            );
    }


    private function createTalent(User $user): Talent
    {
        Storage::fake('local');
        $this->actingAs($user);

        $cv = UploadedFile::fake()->image('cv.jpg');
        $payload = [
            'pic_id' => $user->id,
            'candidate_id' => null,
            'name'  => $this->faker->name(),
            'source' => $this->faker->company,
            'cv' => $cv,
            'address' => $this->faker->address,
            'applied_position' => $this->faker->sentence(3),
            'dob' => $this->faker->date(),
            'email' => $this->faker->safeEmail,
            'gender' => $this->faker->randomElement(['Male', 'Female']),
            'last_education' => $this->faker->randomElement(['S1', 'S2', 'S3']),
            'mobile_phone' => $this->faker->phoneNumber,
            'nik' => $this->faker->creditCardNumber,
            'total_working_experience' => random_int(0, 10),
            'university' => $this->faker->company,
        ];

        $response = $this->postJson(route('talents.store'), $payload)
            ->assertStatus(201);

        return Talent::find($response['id']);
    }
}
