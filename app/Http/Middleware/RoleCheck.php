<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RoleCheck
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next, ...$roles)
    {
        if (!Auth::check()) {
            return response(['error' => 'Not authenticated'], 401);
        }

        $userId = Auth::id();
        $user = User::find($userId);
        $userRole = $user->role->name;

        if (in_array($userRole, $roles)) {
            return $next($request);
        }

        return response()->json(['error' => 'Forbidden request.'], 403);
    }
}
