<?php

namespace Database\Seeders;

use App\Models\EmployeeRequestForm;
use App\Models\RequestApproval;
use App\Models\User;
use Illuminate\Database\Seeder;

class RequestApprovalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $erfCount = EmployeeRequestForm::count();
        $erfs = EmployeeRequestForm::all()->random($erfCount / 2);
        $pics = User::pics()->get();

        foreach ($erfs as $erf) {
            $lhcApprove = $this->decide();
            $picApprove = $lhcApprove ? $this->decide() : null;
            $randomPic = $pics->random(1)->first();

            $notesByLhc = $lhcApprove ? 'LHC Approved' : 'LHC Rejected';
            $notesByPic = null;
            if ($picApprove != null) {
                $notesByPic = $picApprove ? 'Lets Proceed' : 'Cannot Proceed request';
            }
            RequestApproval::factory([
                'pic_id' => $picApprove ? $randomPic->id : null,
                'approval_by_lhc' => $lhcApprove,
                'approval_by_pic' => $picApprove ?? null,
                'notes_by_lhc' => $notesByLhc,
                'notes_by_pic' => $notesByPic,
            ])->for($erf)->create();
        }
    }

    private function decide(): bool
    {
        return (bool)random_int(0, 1);
    }
}
