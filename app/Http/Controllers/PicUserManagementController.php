<?php

namespace App\Http\Controllers;

use App\Http\Requests\PicUserManagementStoreRequest;
use App\Http\Requests\PicUserManagementUpdateRequest;
use App\Http\Resources\UserResource;
use App\Models\Talent;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;

class PicUserManagementController extends Controller
{

    public function __construct()
    {
        $this->middleware('role.check:pic');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return UserResource::collection(User::withTrashed()->paginate(30));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\PicUserManagementStoreRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PicUserManagementStoreRequest $request)
    {
        $validated = $request->validated();
        $talent = Talent::findOrFail($validated['talent_id']);


        $user = User::create($validated);
        $talent->candidate_id = $user->id;
        $talent->save();

        return $user;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        return new UserResource($user);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\PicUserManagementUpdateRequest  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(PicUserManagementUpdateRequest $request, User $user)
    {
        $validated = $request->Validated();

        $user->update($validated);

        return Response::json($user, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        User::find($id)->delete();
        return Response::json('', 204);
    }
}
