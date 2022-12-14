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
        //================================
        //Student 1 - Pietje
        //================================
        DB::table('results')->insert([
            'status' => 0,
            'assignment_id' => 1,
            'student_id' => 1,
            'drawing_id' => 1,
        ]);
        DB::table('results')->insert([
            'status' => 0,
            'assignment_id' => 2,
            'student_id' => 1,
            'drawing_id' => 1,
        ]);
        DB::table('results')->insert([
            'status' => 1,
            'assignment_id' => 3,
            'student_id' => 1,
            'drawing_id' => 2
        ]);
        DB::table('results')->insert([
            'status' => -1,
            'assignment_id' => 4,
            'student_id' => 1,
            'drawing_id' => 2
        ]);
        DB::table('results')->insert([
            'status' => 0,
            'assignment_id' => 5,
            'student_id' => 1,
            'drawing_id' => 2
        ]);

        //================================
        //Student 2 - Jasmine
        //================================
        DB::table('results')->insert([
            'status' => 1,
            'assignment_id' => 1,
            'student_id' => 2,
            'drawing_id' => 2
        ]);
        DB::table('results')->insert([
            'status' => -1,
            'assignment_id' => 2,
            'student_id' => 2,
            'drawing_id' => 2
        ]);
        DB::table('results')->insert([
            'status' => 1,
            'assignment_id' => 3,
            'student_id' => 2,
            'drawing_id' => 2
        ]);
        DB::table('results')->insert([
            'status' => -1,
            'assignment_id' => 4,
            'student_id' => 2,
            'drawing_id' => 2
        ]);
        DB::table('results')->insert([
            'status' => 1,
            'assignment_id' => 5,
            'student_id' => 2,
            'drawing_id' => 2
        ]);

        //================================
        //Student 3 - Daan
        //================================
        DB::table('results')->insert([
            'status' => 0,
            'assignment_id' => 1,
            'student_id' => 3,
            'drawing_id' => 2
        ]);
        DB::table('results')->insert([
            'status' => 1,
            'assignment_id' => 2,
            'student_id' => 3,
            'drawing_id' => 2
        ]);
        DB::table('results')->insert([
            'status' => -1,
            'assignment_id' => 3,
            'student_id' => 3,
            'drawing_id' => 2
        ]);
        DB::table('results')->insert([
            'status' => 0,
            'assignment_id' => 4,
            'student_id' => 3,
            'drawing_id' => 2
        ]);
        DB::table('results')->insert([
            'status' => 0,
            'assignment_id' => 5,
            'student_id' => 3,
            'drawing_id' => 2
        ]);

        
        

        
        

    }
}
