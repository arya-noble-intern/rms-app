<?php

namespace App\Http\Controllers;

use App\Http\Requests\EmployeeRequestFormStoreRequest;
use App\Http\Requests\EmployeeRequestFormUpdateRequest;
use App\Http\Resources\EmployeeRequestFormResource;
use App\Models\EmployeeRequestForm;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;

class EmployeeRequestFormController extends Controller
{
    public function __construct()
    {
        $this->middleware(['role.check:leader'])->only('store');
        $this->middleware(['role.check:pic,leader'])->except('store');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $forms = EmployeeRequestForm::when(
            authUser()->is('leader'),
            function ($query) {
                return $query->mine();
            }
        )->when(
            authUser()->is('pic'),
            function ($query) {
                return $query->approvedByLhc();
            }
        )->latest()->paginate(30);

        return EmployeeRequestFormResource::collection($forms);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\EmployeeRequestFormStoreRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(EmployeeRequestFormStoreRequest $request)
    {
        $validated = $request->validated();

        $erf = EmployeeRequestForm::create($validated);
        return Response::json($erf, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\EmployeeRequestForm  $employeeRequestForm
     * @return \Illuminate\Http\Response
     */
    public function show(EmployeeRequestForm $employeeRequestForm)
    {
        return new EmployeeRequestFormResource($employeeRequestForm);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\EmployeeRequestFormUpdateRequest  $request
     * @param  \App\Models\EmployeeRequestForm  $employeeRequestForm
     * @return \Illuminate\Http\Response
     */
    public function update(EmployeeRequestFormUpdateRequest $request, EmployeeRequestForm $employeeRequestForm)
    {
        $this->authorize('update', $employeeRequestForm);
        $validated = $request->validated();

        $employeeRequestForm->update($validated);
        $employeeRequestForm->save();

        return Response::json($employeeRequestForm, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\EmployeeRequestForm  $employeeRequestForm
     * @return \Illuminate\Http\Response
     */
    public function destroy(EmployeeRequestForm $employeeRequestForm)
    {
        //
    }
}
