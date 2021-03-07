<?php

namespace App\Observers;

use App\Mail\RequestApprovalMail;
use App\Models\EmployeeRequestForm;
use App\Utilities\RequestApprovalUtil;
use Illuminate\Support\Facades\Mail;

class EmployeeRequestFormObserver
{
    /**
     * Handle the EmployeeRequestForm "created" event.
     *
     * @param  \App\Models\EmployeeRequestForm  $employeeRequestForm
     * @return void
     */
    public function created(EmployeeRequestForm $employeeRequestForm)
    {
        $url = RequestApprovalUtil::generateShowUrl($employeeRequestForm);
        Mail::to(config('app.lhc_email'))->send(
            new RequestApprovalMail($employeeRequestForm, $url)
        );
    }

    /**
     * Handle the EmployeeRequestForm "updated" event.
     *
     * @param  \App\Models\EmployeeRequestForm  $employeeRequestForm
     * @return void
     */
    public function updated(EmployeeRequestForm $employeeRequestForm)
    {
        //
    }

    /**
     * Handle the EmployeeRequestForm "deleted" event.
     *
     * @param  \App\Models\EmployeeRequestForm  $employeeRequestForm
     * @return void
     */
    public function deleted(EmployeeRequestForm $employeeRequestForm)
    {
        //
    }

    /**
     * Handle the EmployeeRequestForm "restored" event.
     *
     * @param  \App\Models\EmployeeRequestForm  $employeeRequestForm
     * @return void
     */
    public function restored(EmployeeRequestForm $employeeRequestForm)
    {
        //
    }

    /**
     * Handle the EmployeeRequestForm "force deleted" event.
     *
     * @param  \App\Models\EmployeeRequestForm  $employeeRequestForm
     * @return void
     */
    public function forceDeleted(EmployeeRequestForm $employeeRequestForm)
    {
        //
    }
}
