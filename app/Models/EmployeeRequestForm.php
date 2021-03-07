<?php

namespace App\Models;

use App\Traits\Scopes\EmployeeRequestFormScope;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class EmployeeRequestForm extends Model
{
    use HasFactory, SoftDeletes, EmployeeRequestFormScope;

    protected $table = 'employee_request_forms';

    protected $fillable = [
        'user_id',
        'title',
        'age_range_from',
        'age_range_to',
        'branch',
        'business_justification',
        'department',
        'division',
        'education',
        'employee_status',
        'job_title',
        'min_experience',
        'planning',
        'purpose',
        'quantity',
        'sex',
        'technical_competencies',
        'work_location',
        'working_hours',
        'position',
        'company'
    ];

    protected $with = [
        'user', 'requestApproval'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function requestApproval()
    {
        return $this->hasOne(RequestApproval::class);
    }

    public function isAllApproved()
    {
        $request = $this->requestApproval;
        return $request->approval_by_lhc && $request->approval_by_pic;
    }
}
