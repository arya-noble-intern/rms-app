<?php

namespace Database\Seeders;

use App\Models\EmployeeRequestForm;
use App\Models\User;
use Illuminate\Database\Seeder;

class CandidateCardSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $pics = User::pics()->get();
        $allApprovedForms = EmployeeRequestForm::whereHas('requestApproval', function ($q) {
            $q->where('approval_by_pic', 1)->where('approval_by_lhc', 1);
        })->get();

        foreach ($allApprovedForms as $form) {
            $pic = $pics->random(1)->first();
            $pic->cardPic()->create([
                'employee_request_form_id' => $form->id,
                'card_status_id' => 1,
                'talent_id' => null,
                'candidate_id' => null,
                'last_updated_by_id' => $pic->id,
            ]);
        };
    }
}
