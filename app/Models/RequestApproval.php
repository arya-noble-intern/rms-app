<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RequestApproval extends Model
{
    use HasFactory;

    protected $table = 'request_approvals';

    protected $fillable = [
        'employee_request_form_id',
        'pic_id',
        'approval_by_lhc',
        'notes_by_lhc',
        'approval_by_pic',
        'notes_by_pic',
    ];

    protected $with = [
        'employeeRequestForm', 'pic'
    ];

    public function employeeRequestForm()
    {
        return $this->belongsTo(EmployeeRequestForm::class);
    }

    public function pic()
    {
        return $this->belongsTo(User::class, 'pic_id');
    }
}
