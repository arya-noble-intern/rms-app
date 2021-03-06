<?php

namespace Database\Factories;

use App\Models\RequestApproval;
use Illuminate\Database\Eloquent\Factories\Factory;

class RequestApprovalFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = RequestApproval::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'employee_request_form_id' => null,
            'pic_id' => null,
            'approval_by_lhc' => null,
            'notes_by_lhc' => 'Notes by LHC',
            'approval_by_pic' => null,
            'notes_by_pic' => 'Notes by PIC',
        ];
    }
}
