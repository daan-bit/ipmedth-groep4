<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;
class ResultsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('results')->insert([
            'status' => -1,
            'assignment_id' => 1,
            'student_id' => 1,
            'drawing_id' => 1,
        ]);
        DB::table('results')->insert([
            'status' => 1,
            'assignment_id' => 2,
            'student_id' => 1,
            'drawing_id' => 1,
        ]);
        DB::table('results')->insert([
            'status' => 1,
            'assignment_id' => 3,
            'student_id' => 1,
            'drawing_id' => 1,
        ]);
        DB::table('results')->insert([
            'status' => 1,
            'assignment_id' => 1,
            'student_id' => 2,
            'drawing_id' => 2
        ]);

    }
}
