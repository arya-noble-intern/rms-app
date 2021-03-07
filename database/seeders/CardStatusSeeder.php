<?php

namespace Database\Seeders;

use App\Models\CardStatus;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CardStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('card_statuses')->insert(
            config('const.CARD_STATUSES')
        );
    }
}
