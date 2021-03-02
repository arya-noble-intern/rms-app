<?php

namespace Database\Seeders;

use App\Models\EmployeeRequestForm;
use App\Models\User;
use Illuminate\Database\Seeder;

class EmployeeRequestFormSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $leaders = User::where('role_id', config('const.ROLE_ID.LEADER'))->get();

        foreach ($leaders as $user) {
            EmployeeRequestForm::factory([
                'user_id' => $user->id
            ])->count(5)->create();
        }
    }
}
