<?php

namespace App\Traits\Scopes;

use Illuminate\Support\Facades\Auth;

trait EmployeeRequestFormScope
{
    public function scopeMine($query)
    {
        $query->where('user_id', Auth::id());
    }
}
