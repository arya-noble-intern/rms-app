<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class EmployeeRequestFormResource extends JsonResource
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
            'user_id' => $this->user_id,
            'title' => $this->title,
            'age_range_from' => $this->age_range_from,
            'age_range_to' => $this->age_range_to,
            'branch' => $this->branch,
            'business_justification' => $this->business_justification,
            'department' => $this->department,
            'division' => $this->division,
            'education' => $this->education,
            'employee_status' => $this->employee_status,
            'job_title' => $this->job_title,
            'min_experience' => $this->min_experience,
            'planning' => $this->planning,
            'purpose' => $this->purpose,
            'quantity' => $this->quantity,
            'sex' => $this->sex,
            'technical_competencies' => $this->technical_competencies,
            'work_location' => $this->work_location,
            'working_hours' => $this->working_hours,
            'position' => $this->position,
            'company' => $this->company,
            'leader' => new UserResource($this->user),
            'dates' => [
                'created_at' => $this->created_at,
                'created_at_diff' => $this->created_at->diffForHumans()
            ],
            'approval' => $this->requestApproval,
            'candidate_cards_count' => $this->candidate_cards_count
        ];
    }
}
