<?php

namespace App\Http\Controllers;

use App\Mail\RequestApprovalMail;
use App\Models\EmployeeRequestForm;
use App\Utilities\RequestApprovalUtil;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\URL;

class RequestApprovalResendController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $erf = EmployeeRequestForm::findOrFail($request->get('erf_id'));

        if ($erf->user_id != Auth::id()) {
            return Response::json('forbidden', 403);
        }

        $url = RequestApprovalUtil::generateShowUrl($erf);

        Mail::to(config('app.lhc_email'))->send(new RequestApprovalMail($erf, $url));

        return Response::json('ok', 200);
    }
}
