<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class CandidateCardUpdateRequest extends FormRequest
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
            'last_updated_by_id' => Auth::id()
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
            'talent_id' => 'sometimes|numeric|exists:talents,id',
            'candidate_id' => 'sometimes|numeric|exists:users,id',
            'last_updated_by_id' => 'required',
            'proceed' => 'required|boolean', // T/F for incrementing status by order column 
        ];
    }
}
