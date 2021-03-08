<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CandidateCardResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'pic_id' => $this->pic_id,
            'employee_request_form_id' => $this->employee_request_form_id,
            'card_status_id' => $this->card_status_id,
            'talent_id' =>  $this->talent_id,
            'candidate_id' => $this->candidate_id,
            'last_updated_by_id' => $this->last_updated_by_id,

            'status' => $this->cardStatus,
            'employee_request_form' => new EmployeeRequestFormResource($this->employeeRequestForm),
            'pic' => new UserResource($this->pic),
            'talent' => new TalentResource($this->talent),
            'candidate' => new UserResource($this->candidate),
            'leader' => new UserResource($this->leader),
            'last_updated_by' => new UserResource($this->lastUpdatedBy)
        ];
    }
}