<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DrawingsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('drawings')->insert([
            'image' => 'images/drawings/test_zon.svg',
            'assignment_id' => 1,
            'student_id' => 1
        ]);
        DB::table('drawings')->insert([
            'image' => 'images/drawings/test_vis.svg',
            'assignment_id' => 2,
            'student_id' => 1
        ]);
        DB::table('drawings')->insert([
            'image' => 'images/drawings/test_zon2.svg',
            'assignment_id' => 1,
            'student_id' => 2
        ]);
    }
}
