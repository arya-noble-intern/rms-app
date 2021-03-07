<?php

namespace App\Utilities;

use App\Models\EmployeeRequestForm;
use Illuminate\Support\Facades\URL;

class RequestApprovalUtil
{
    public static function generateShowUrl(EmployeeRequestForm $employeeRequestForm): string
    {
        $url = URL::temporarySignedRoute(
            'request-approvals.show',
            now()->addDay(),
            ['id' => $employeeRequestForm->id]
        );

        return $url;
    }

    public static function generateStoreUrl(EmployeeRequestForm $employeeRequestForm): string
    {
        $url = URL::temporarySignedRoute(
            'request-approvals.store',
            now()->addDay(),
            ['id' => $employeeRequestForm->id]
        );

        return $url;
    }
}
