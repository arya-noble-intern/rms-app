<?php

namespace App\Http\Controllers;

use App\Models\EmployeeRequestForm;
use Illuminate\Http\Request;

class PendingRequestApprovalController extends Controller
{
    public function __construct()
    {
        $this->middleware('role.check:leader');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $forms = EmployeeRequestForm::mine()
            ->doesntHave('requestApproval')
            ->latest()
            ->get();

        return EmployeeRequestForm::collection($forms);
    }
}
