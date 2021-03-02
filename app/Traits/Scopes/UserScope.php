<?php

namespace App\Traits\Scopes;

trait UserScope
{
    public function scopePics($query)
    {
        $query->where('role_id', config('const.ROLE_ID.PIC'));
    }

    public function scopeLeaders($query)
    {
        $query->where('role_id', config('const.ROLE_ID.LEADER'));
    }

    public function scopeCandidates($query)
    {
        $query->where('role_id', config('const.ROLE_ID.CANDIDATE'));
    }
}
