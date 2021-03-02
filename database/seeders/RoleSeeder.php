<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = [
            ['name' => 'superadmin'],
            ['name' => 'pic'],
            ['name' => 'leader'],
            ['name' => 'candidate']
        ];

        DB::table('roles')->insert($roles);
    }
}
