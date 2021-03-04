<?php

namespace App\Http\Controllers;

use App\Http\Requests\TalentStoreRequest;
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
    public function index()
    {
        return TalentResource::collection(Talent::all()->paginate(30));
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
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Talent  $talent
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Talent $talent)
    {
        //
    }

    private function saveFile(TalentStoreRequest $request): String
    {
        $cv = $request->file('cv');
        $filename = time() . "_" . preg_replace('/\s+/', '_', strtolower($cv->getClientOriginalName()));
        $cv->storeAs('public/cv/', $filename, 'local');

        return $filename;
    }
}
