<?php

namespace App\Http\Controllers;

use App\Http\Requests\TalentStoreRequest;
use App\Http\Requests\TalentUpdateRequest;
use App\Http\Resources\TalentResource;
use App\Models\Talent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class TalentController extends Controller
{
    public function __construct()
    {
        $this->middleware(['role.check:pic']);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $sortBy = $request->get('sortBy') ?? 'created_at';
        $sortDir = $request->get('sortDir') ?? 'desc';

        $talents = Talent::orderBy($sortBy, $sortDir)->paginate(10);
        return TalentResource::collection($talents);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\TalentStoreRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TalentStoreRequest $request)
    {
        $validated = $request->validated();

        $filename = $this->saveFile($request);
        $validated['cv'] = $filename;

        $talent = Talent::create($validated);
        return Response::json($talent, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Talent  $talent
     * @return \Illuminate\Http\Response
     */
    public function show(Talent $talent)
    {
        return new TalentResource($talent);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\TalentStoreRequestt  $request
     * @param  \App\Models\Talent  $talent
     * @return \Illuminate\Http\Response
     */
    public function update(TalentUpdateRequest $request, Talent $talent)
    {
        $validated = $request->validated();

        $filename = $this->saveFile($request);
        if ($filename) {
            $validated['cv'] = $filename;
        }

        $talent = $talent->update($validated);
        return Response::json($talent, 200);
    }

    private function saveFile($request): String
    {
        if ($request->hasFile('cv')) {
            $cv = $request->file('cv');
            $filename = time() . "_" . preg_replace('/\s+/', '_', strtolower($cv->getClientOriginalName()));
            $cv->storeAs('public/cv/', $filename, 'local');
        }

        return $filename ?? false;
    }
}
