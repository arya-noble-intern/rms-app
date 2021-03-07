<?php

namespace App\Traits\Scopes;

use Illuminate\Support\Facades\Auth;

trait CandidateCardScope
{
    public function scopeMyCards($query)
    {
        $query->whereHas('employeeRequestForm', function ($q) {
            $q->where('user_id', Auth::id());
        });
    }
}
