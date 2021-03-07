<?php

namespace App\Models;

use App\Traits\Scopes\UserScope;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable, SoftDeletes, UserScope;

    protected $table = 'users';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected $with = [
        'role'
    ];

    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    public function employeeRequestForms()
    {
        return $this->hasMany(EmployeeRequestForm::class);
    }

    public function talentPics()
    {
        return $this->hasMany(Talent::class, 'pic_id');
    }

    public function talentCandidate()
    {
        return $this->hasOne(Talent::class, 'candidate_id');
    }

    public function requestApprovals()
    {
        return $this->hasMany(RequestApproval::class, 'pic_id');
    }

    public function cardPic()
    {
        return $this->hasMany(CandidateCard::class, 'pic_id');
    }

    public function cardCandidate()
    {
        return $this->hasMany(CandidateCard::class, 'candidate_id');
    }



    /**
     * @param string 'role name
     * @return bool
     */
    public function is($roleName): bool
    {
        if ($this->role->name == $roleName) {
            return true;
        }

        return false;
    }
}
