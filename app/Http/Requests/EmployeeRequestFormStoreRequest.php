<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class EmployeeRequestFormStoreRequest extends FormRequest
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
     * Prepare the data for validation.
     *
     * @return void
     */
    protected function prepareForValidation()
    {
        $this->merge([
            'user_id' => Auth::id(),
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'user_id' => 'required',
            'title' => 'required|string',
            'age_range_from' => 'required|numeric',
            'age_range_to' => 'required|numeric|gte:age_range_from',
            'branch' => 'required|string',
            'business_justification' => 'required|string',
            'department' => 'required|string',
            'division' => 'required|string',
            'education' => 'required|string',
            'employee_status' => ['required', Rule::in(['Permanent', 'Internship', 'Contract'])],
            'job_title' => 'required|string',
            'min_experience' => 'required|numeric',
            'planning' => ['required', Rule::in(['Planned', 'Not Planned'])],
            'purpose' => ['required', Rule::in(['Replacement', 'Additional'])],
            'quantity' => 'required|numeric',
            'sex' => ['required', Rule::in(['Male', 'Female', 'Both'])],
            'technical_competencies' => 'required|string',
            'work_location' => 'required|string',
            'working_hours' => ['required', Rule::in(['Part-Time', 'Full-Time'])],
            'position' => ['required', Rule::in(['Leader', 'Non-leader'])],
            'company' => 'required|string',
        ];
    }
}
