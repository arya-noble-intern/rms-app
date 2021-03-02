<?php

namespace Database\Factories;

use App\Models\EmployeeRequestForm;
use Illuminate\Database\Eloquent\Factories\Factory;

class EmployeeRequestFormFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = EmployeeRequestForm::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $age_range_from = random_int(18, 30);

        return [
            'user_id' => 0,
            'title' => $this->faker->sentence(8),
            'age_range_from' => $age_range_from,
            'age_range_to' => random_int($age_range_from, 55),
            'branch' => $this->faker->word(),
            'business_justification' => $this->faker->paragraph(),
            'department' => $this->faker->word(),
            'division' => $this->faker->word(),
            'education' => $this->faker->randomElement(['S1', 'S2', 'S3']),
            'employee_status' => $this->faker->randomElement(['Permanent', 'Internship', 'Contract']),
            'job_title' => $this->faker->sentence(),
            'min_experience' => random_int(0, 10),
            'planning' => $this->faker->randomElement(['Planned', 'Not Planned']),
            'purpose' => $this->faker->randomElement(['Replacement', 'Additional']),
            'quantity' => random_int(0, 10),
            'sex' => $this->faker->randomElement(['Male', 'Female', 'Both']),
            'technical_competencies' => $this->faker->paragraph(),
            'work_location' => $this->faker->streetName,
            'working_hours' => $this->faker->randomElement(['Part-Time', 'Full-Time']),
            'position' => $this->faker->randomElement(['Leader', 'Non-leader']),
            'company' => $this->faker->company,
            'created_at' => $this->faker->dateTime(),
            'updated_at' => null,
        ];
    }
}
