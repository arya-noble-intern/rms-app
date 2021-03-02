<?php

namespace Database\Seeders;

use App\Models\Talent;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class TalentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        File::cleanDirectory('storage/app/public/cv_test/');

        $pics = User::pics()->get();
        $candidates = User::candidates()->get();

        foreach ($pics as $pic) {
            $x = 0;
            do {
                $assign = (bool)random_int(0, 1);
                $candidate = null;
                if ($assign) {
                    $random = $candidates->random(1)->first();
                    $candidate = $random->id;
                }
                Talent::factory([
                    'pic_id' => $pic->id,
                    'candidate_id' => $candidate
                ])->create();

                $x++;
            } while ($x <= 5);
        }
    }
}
