<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class TalentStoreRequest extends FormRequest
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
            'pic_id' => Auth::id(),
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
            'pic_id' => 'required',
            'candidate_id' => 'nullable',
            'name' => 'required|string',
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

    public function withValidator($validator)
    {
        if ($validator->fails()) {
            print_r($validator->errors());
        }
    }
}
