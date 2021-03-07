<?php

namespace App\Http\Controllers;

use App\Http\Resources\EmployeeRequestFormResource;
use App\Models\EmployeeRequestForm;
use App\Models\RequestApproval;
use App\Utilities\RequestApprovalUtil;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\URL;

class RequestApprovalController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, int $id)
    {
        $validated = $request->validate([
            'approval_by_lhc' => 'required|boolean',
            'notes_by_lhc' => 'required|string'
        ]);

        $erf = EmployeeRequestForm::findOrFail($id);
        $requestApproval = $erf->requestApproval()->create($validated);

        return Response::json($requestApproval, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(int $id)
    {
        $erf = EmployeeRequestForm::findOrFail($id);
        $storeUrlSigned = RequestApprovalUtil::generateStoreUrl($erf);

        $resource = (new EmployeeRequestFormResource($erf))->additional([
            'data' => [
                'request_store_url' => $storeUrlSigned
            ]
        ]);

        return $resource;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\RequestApproval  $requestApproval
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, RequestApproval $requestApproval)
    {
        $validated = $request->validate([
            'approval_by_pic' => 'required|numeric',
            'notes_by_pic' => 'required|string'
        ]);

        $validated['pic_id'] = Auth::id();

        $requestApproval->update($validated);
        $requestApproval->save();

        return Response::json($requestApproval, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\RequestApproval  $requestApproval
     * @return \Illuminate\Http\Response
     */
    public function destroy(RequestApproval $requestApproval)
    {
        //
    }
}
