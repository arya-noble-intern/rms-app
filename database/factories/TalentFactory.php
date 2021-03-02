<?php

namespace Database\Factories;

use App\Models\Talent;
use Illuminate\Database\Eloquent\Factories\Factory;

class TalentFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Talent::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'pic_id' => 0,
            'candidate_id' => null,
            'name'  => $this->faker->name(),
            'source' => $this->faker->company,
            'cv' => $this->faker->file('storage/app/public/cv_dummy/', 'storage/app/public/cv_test/'),
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
    }
}
