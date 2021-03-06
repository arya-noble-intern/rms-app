<?php

namespace Tests\TestTraits;

use App\Models\User;

trait CreateUserTestTrait
{

    public function createUser(): User
    {
        $user = User::factory()->create();

        return $user;
    }

    public function setPicRole(User $user): User
    {
        $user->role_id = config('const.ROLE_ID.PIC');
        $user->save();

        return $user;
    }

    public function setLeaderRole(User $user): User
    {
        $user->role_id = config('const.ROLE_ID.LEADER');
        $user->save();

        return $user;
    }

    public function setCandidateRole(User $user): User
    {
        $user->role_id = config('const.ROLE_ID.CANDIDATE');
        $user->save();

        return $user;
    }

    public function createPicUser(): User
    {
        $user = $this->createUser();
        $pic = $this->setPicRole($user);
        return $pic;
    }

    public function createLeaderUser(): User
    {
        $user = $this->createUser();
        $pic = $this->setLeaderRole($user);
        return $pic;
    }
}
