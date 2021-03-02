<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            [
                'name' => "PIC One",
                'email' => "pic_1@aryanoble.co.id",
                'password' => bcrypt('123123123'),
                'email_verified_at' => now(),
                'role_id' => config('const.ROLE_ID.PIC'),
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => "PIC Two",
                'email' => "pic_2@aryanoble.co.id",
                'password' => bcrypt('123123123'),
                'email_verified_at' => now(),
                'role_id' => config('const.ROLE_ID.PIC'),
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => "Leader One",
                'email' => "leader_1@aryanoble.co.id",
                'password' => bcrypt('123123123'),
                'email_verified_at' => now(),
                'role_id' => config('const.ROLE_ID.LEADER'),
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => "Leader Two",
                'email' => "leader_2@aryanoble.co.id",
                'password' => bcrypt('123123123'),
                'email_verified_at' => now(),
                'role_id' => config('const.ROLE_ID.LEADER'),
                'created_at' => now(),
                'updated_at' => now()
            ]
        ];

        DB::table('users')->insert($users);

        User::factory()->count(40)->create();
    }
}
