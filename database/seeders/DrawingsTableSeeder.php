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
            'student_id' => 5
        ]);
        DB::table('drawings')->insert([
            'image' => 'images/example_drawings/zon/zon_3.svg',
            'assignment_id' => 1,
            'student_id' => 2
        ]);
        DB::table('drawings')->insert([
            'image' => 'images/example_drawings/zon/zon_1.svg',
            'assignment_id' => 1,
            'student_id' => 3
        ]);
        DB::table('drawings')->insert([
            'image' => 'images/example_drawings/vis/vis_1.svg',
            'assignment_id' => 2,
            'student_id' => 3
        ]);
        DB::table('drawings')->insert([
            'image' => 'images/example_drawings/zwaard/zwaard_1.svg',
            'assignment_id' => 3,
            'student_id' => 3
        ]);
        DB::table('drawings')->insert([
            'image' => 'images/example_drawings/zon/zon_1.svg',
            'assignment_id' => 1,
            'student_id' => 4
        ]);
        DB::table('drawings')->insert([
            'image' => 'images/example_drawings/vis/vis_3.svg',
            'assignment_id' => 2,
            'student_id' => 4
        ]);
        DB::table('drawings')->insert([
            'image' => 'images/example_drawings/zon/zon_2.svg',
            'assignment_id' => 1,
            'student_id' => 5
        ]);
        DB::table('drawings')->insert([
            'image' => 'images/example_drawings/vis/vis_2.svg',
            'assignment_id' => 2,
            'student_id' => 5
        ]);
        DB::table('drawings')->insert([
            'image' => 'images/example_drawings/zwaard/zwaard_2.svg',
            'assignment_id' => 3,
            'student_id' => 5
        ]);
    }
}
