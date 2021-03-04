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
            ['id' => 1, 'name' => 'superadmin'],
            ['id' => 2, 'name' => 'pic'],
            ['id' => 3, 'name' => 'leader'],
            ['id' => 4, 'name' => 'candidate']
        ];

        DB::table('roles')->insert($roles);
    }
}
