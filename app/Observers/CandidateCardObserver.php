<?php

namespace App\Observers;

use App\Models\CandidateCard;
use App\Models\CardStatus;

class CandidateCardObserver
{
    /**
     * Handle the CandidateCard "created" event.
     *
     * @param  \App\Models\CandidateCard  $candidateCard
     * @return void
     */
    public function created(CandidateCard $candidateCard)
    {
        //
    }

    /**
     * Handle the CandidateCard "updated" event.
     *
     * @param  \App\Models\CandidateCard  $candidateCard
     * @return void
     */
    public function updated(CandidateCard $candidateCard)
    {
    }

    /**
     * Handle the CandidateCard "deleted" event.
     *
     * @param  \App\Models\CandidateCard  $candidateCard
     * @return void
     */
    public function deleted(CandidateCard $candidateCard)
    {
        //
    }

    /**
     * Handle the CandidateCard "restored" event.
     *
     * @param  \App\Models\CandidateCard  $candidateCard
     * @return void
     */
    public function restored(CandidateCard $candidateCard)
    {
        //
    }

    /**
     * Handle the CandidateCard "force deleted" event.
     *
     * @param  \App\Models\CandidateCard  $candidateCard
     * @return void
     */
    public function forceDeleted(CandidateCard $candidateCard)
    {
        //
    }
}
