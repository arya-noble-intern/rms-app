<?php

namespace App\Models;

use App\Http\Resources\UserResource;
use App\Traits\Scopes\CandidateCardScope;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CandidateCard extends Model
{
    use HasFactory, SoftDeletes, CandidateCardScope;

    protected $table = 'candidate_cards';
    protected $fillable = [
        'pic_id',
        'employee_request_form_id',
        'card_status_id',
        'talent_id',
        'candidate_id',
        'last_updated_by_id',
    ];

    protected $with = [
        'employeeRequestForm', 'cardStatus', 'pic', 'talent', 'candidate'
    ];

    public function employeeRequestForm()
    {
        return $this->belongsTo(EmployeeRequestForm::class);
    }

    public function cardStatus()
    {
        return $this->belongsTo(CardStatus::class);
    }

    public function pic()
    {
        return $this->belongsTo(User::class, 'pic_id');
    }

    public function talent()
    {
        return $this->belongsTo(Talent::class);
    }

    public function candidate()
    {
        return $this->belongsTo(User::class, 'candidate_id');
    }

    public function lastUpdatedBy()
    {
        return $this->belongsTo(User::class, 'last_updated_by_id');
    }

    public function getLeaderAttribute()
    {
        return $this->employeeRequestForm->user;
    }
}
