<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CardStatus extends Model
{
    use HasFactory;

    protected $table = 'card_statuses';

    protected $fillable = [
        'description'
    ];

    public function candidateCards()
    {
        return $this->hasMany(CandidateCard::class);
    }
}
