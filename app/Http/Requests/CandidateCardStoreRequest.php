<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class CandidateCardStoreRequest extends FormRequest
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
            'card_status_id' => config('const.CARD_STATUS_ID.TALENT_SUGGESTION'),
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
            'pic_id' => 'required',
            'employee_request_form_id' => 'required|exists:employee_request_forms,id',
            'card_status_id' => 'required',
            'last_updated_by_id' => 'required'
        ];
    }
}
