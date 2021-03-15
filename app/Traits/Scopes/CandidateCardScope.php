<?php

namespace App\Traits\Scopes;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

trait CandidateCardScope
{
    public function scopeMyCards($query)
    {
        $query->whereHas('employeeRequestForm', function ($q) {
            $q->where('user_id', Auth::id());
        });
    }

    public function scopeFilterQuery($query, Request $request)
    {
        $sortBy = $request->get('sortBy') ?? 'created_at';
        $sortDir = $request->get('sortDir') ?? 'desc';
        $statusOrder = $request->get('statusOrder') ?? 0;

        $query->when(
            $sortBy,
            function ($q) use ($sortBy, $sortDir) {
                return $q->orderBy($sortBy, $sortDir);
            }
        )->when($statusOrder != 0, function ($q) use ($statusOrder) {
            return $q->whereHas(
                'cardStatus',
                function ($q) use ($statusOrder) {
                    return $q->where('order', $statusOrder);
                }
            );
        });
    }
}
