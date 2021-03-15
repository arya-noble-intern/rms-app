<?php

namespace App\Http\Controllers;

use App\Http\Requests\CandidateCardStoreRequest;
use App\Http\Requests\CandidateCardUpdateRequest;
use App\Http\Resources\CandidateCardResource;
use App\Models\CandidateCard;
use App\Models\CardStatus;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class CandidateCardController extends Controller
{

    public function __construct()
    {
        $this->middleware('role.check:pic,leader')->only('index');
        $this->middleware('role.check:pic,leader,candidate')->only('show');
        $this->middleware('role.check:pic')->only(['update', 'destroy']);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $cards = CandidateCard::when(
            !authUser()->is('pic'),
            function ($q) {
                return $q->myCards();
            }
        )->filterQuery($request)
            ->paginate(30);

        return CandidateCardResource::collection($cards);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\CandidateCardStoreRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CandidateCardStoreRequest $request)
    {
        return Response::json(
            CandidateCard::create($request->validated()),
            201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CandidateCard  $candidateCard
     * @return \Illuminate\Http\Response
     */
    public function show(CandidateCard $candidateCard)
    {
        return new CandidateCardResource($candidateCard);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\CandidateCardStoreRequest $request
     * @param  \App\Models\CandidateCard  $candidateCard
     * @return \Illuminate\Http\Response
     */
    public function update(CandidateCardUpdateRequest $request, CandidateCard $candidateCard)
    {
        $validated = $request->validated();

        if ($request->get('proceed')) {
            $nextStatusId = $this->nextStatus($candidateCard);
            if ($nextStatusId) {
                $validated['card_status_id'] = $nextStatusId;
            }
        }

        $candidateCard->update($validated);

        return Response::json($candidateCard, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CandidateCard  $candidateCard
     * @return \Illuminate\Http\Response
     */
    public function destroy(CandidateCard $candidateCard)
    {
        //
    }

    private function nextStatus(CandidateCard $candidateCard): int
    {
        $currentStatusOrder = $candidateCard->cardStatus->order;
        $nextStatus = CardStatus::where('order', ++$currentStatusOrder)
            ->first();

        return  $nextStatus ? $nextStatus->id : false;
    }
}
