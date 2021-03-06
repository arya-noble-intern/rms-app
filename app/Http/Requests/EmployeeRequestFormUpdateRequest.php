<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class EmployeeRequestFormUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'sometimes|string',
            'age_range_from' => 'sometimes|numeric',
            'age_range_to' => 'sometimes|numeric|gte:age_range_from',
            'branch' => 'sometimes|string',
            'business_justification' => 'sometimes|string',
            'department' => 'sometimes|string',
            'division' => 'sometimes|string',
            'education' => 'sometimes|string',
            'employee_status' => ['sometimes', Rule::in(['Permanent', 'Internship', 'Contract'])],
            'job_title' => 'sometimes|string',
            'min_experience' => 'sometimes|numeric',
            'planning' => ['sometimes', Rule::in(['Planned', 'Not Planned'])],
            'purpose' => ['sometimes', Rule::in(['Replacement', 'Additional'])],
            'quantity' => 'sometimes|numeric',
            'sex' => ['sometimes', Rule::in(['Male', 'Female', 'Both'])],
            'technical_competencies' => 'sometimes|string',
            'work_location' => 'sometimes|string',
            'working_hours' => ['sometimes', Rule::in(['Part-Time', 'Full-Time'])],
            'position' => ['sometimes', Rule::in(['Leader', 'Non-leader'])],
            'company' => 'sometimes|string',
        ];
    }
}
