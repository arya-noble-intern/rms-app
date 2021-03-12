<?php

namespace App\Traits\Scopes;

use Illuminate\Support\Facades\Auth;

trait EmployeeRequestFormScope
{
    public function scopeMine($query)
    {
        $query->where('user_id', Auth::id());
    }

    public function scopeAllApproved($query)
    {
        $query->whereHas('requestApproval', function ($q) {
            $q->where('approval_by_lhc', 1)->where('approval_by_pic', 1);
        });
    }

    public function scopeApprovedByLhc($query)
    {
        $query->whereHas('requestApproval', function ($q) {
            $q->where('approval_by_lhc', 1);
        });
    }
}
