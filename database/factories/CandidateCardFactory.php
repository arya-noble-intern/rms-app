<?php

namespace Database\Factories;

use App\Models\CandidateCard;
use Illuminate\Database\Eloquent\Factories\Factory;

class CandidateCardFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = CandidateCard::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'pic_id' => 0,
            'employee_request_form_id' => 0,
            'card_status_id' => 0,
            'talent_id' => 0,
            'candidate_id' => 0,
            'last_updated_by_id' => 0,
        ];
    }
}
