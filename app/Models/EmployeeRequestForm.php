<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class EmployeeRequestForm extends Model
{
    use HasFactory, SoftDeletes;

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

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
