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

    public function scopeFilterQuery($query, $filter = '', $search = '')
    {
        $filterId = config("const.ERF_FILTER_OPTIONS.{$filter}");

        $query->whereHas('requestApproval', function ($q) use ($filterId) {
            switch ($filterId) {
                case "2":
                    $q->whereNull('approval_by_pic');
                    break;
                case "3":
                    $q->where('approval_by_lhc', 1)->where('approval_by_pic', 1);
                    break;
                case "4":
                    $q->where('approval_by_pic', 0);
                    break;
            }
        });

        if ($search) {
            $query->where('title', 'LIKE', "%{$search}%");
        }
    }
}
