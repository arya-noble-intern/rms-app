<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Talent extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'talents';

    protected $fillable = [
        'pic_id',
        'candidate_id',
        'name',
        'source',
        'cv',
        'address',
        'applied_position',
        'dob',
        'email',
        'gender',
        'last_education',
        'mobile_phone',
        'nik',
        'total_working_experience',
        'university',
    ];

    public function pic()
    {
        return $this->belongsTo(User::class, 'pic_id');
    }

    public function candidate()
    {
        return $this->belongsTo(User::class, 'candidate_id');
    }
}
