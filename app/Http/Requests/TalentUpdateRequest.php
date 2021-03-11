<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TalentUpdateRequest extends FormRequest
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
            'candidate_id' => 'nullable',
            'name' => 'sometimes|string',
            'source'  => 'nullable|string',
            'cv'  => 'nullable|file:size:5000',
            'address'  => 'nullable|string',
            'applied_position'  => 'nullable|string',
            'dob'  => 'nullable|date',
            'email'  => 'nullable|email',
            'gender'  => 'nullable|string',
            'last_education'  => 'nullable|string',
            'mobile_phone'  => 'nullable|string',
            'nik'  => 'nullable|string',
            'total_working_experience'  => 'nullable|numeric',
            'university'  => 'nullable|string',
        ];
    }
}
