<?php

namespace App\Http\Controllers;

use App\Models\CardStatus;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class StatusController extends Controller
{
    public function __construct()
    {
        $this->middleware(['role.check:pic,leader']);
    }
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        return Response::json(
            CardStatus::all(),
            200
        );
    }
}
