<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

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
        //Student 1 - Test gebruiker
        //================================
        DB::table('results')->insert([
            'status' => -1,
            'assignment_id' => 1,
            'student_id' => 1,
            'drawing_id' => 1,
            'created_at' => date("Y-m-d H:i:s"),
            'updated_at' => date("Y-m-d H:i:s")
        ]);

        //================================
        //Student 2 - Jasmine
        //================================
        DB::table('results')->insert([
            'status' => 1,
            'assignment_id' => 1,
            'student_id' => 2,
            'drawing_id' => 3,
            'created_at' => date("Y-m-d H:i:s"),
            'updated_at' => date("Y-m-d H:i:s")
        ]);
        DB::table('results')->insert([
            'status' => -1,
            'assignment_id' => 2,
            'student_id' => 2,
            'drawing_id' => 2,
            'created_at' => date("Y-m-d H:i:s"),
            'updated_at' => date("Y-m-d H:i:s")
        ]);
        DB::table('results')->insert([
            'status' => 1,
            'assignment_id' => 4,
            'student_id' => 2,
            'drawing_id' => 2,
            'created_at' => date("Y-m-d H:i:s"),
            'updated_at' => date("Y-m-d H:i:s")
        ]);

        //================================
        //Student 3 - Daan
        //================================
        DB::table('results')->insert([
            'status' => -1,
            'assignment_id' => 5,
            'student_id' => 3,
            'drawing_id' => 2,
            'created_at' => date("Y-m-d H:i:s"),
            'updated_at' => date("Y-m-d H:i:s")
        ]);
        DB::table('results')->insert([
            'status' => 1,
            'assignment_id' => 4,
            'student_id' => 3,
            'drawing_id' => 2,
            'created_at' => date("Y-m-d H:i:s"),
            'updated_at' => date("Y-m-d H:i:s")
        ]);
        DB::table('results')->insert([
            'status' => -1,
            'assignment_id' => 3,
            'student_id' => 3,
            'drawing_id' => 2,
            'created_at' => date("Y-m-d H:i:s"),
            'updated_at' => date("Y-m-d H:i:s")
        ]);

        /**
         * Student Tycho
         */
        DB::table('results')->insert([
            'status' => -1,
            'assignment_id' => 3,
            'student_id' => 4,
            'drawing_id' => 1,
            'created_at' => date("Y-m-d H:i:s"),
            'updated_at' => date("Y-m-d H:i:s")
        ]);

        DB::table('results')->insert([
            'status' => 1,
            'assignment_id' => 4,
            'student_id' => 4,
            'drawing_id' => 1,
            'created_at' => date("Y-m-d H:i:s"),
            'updated_at' => date("Y-m-d H:i:s")
        ]);

        /**
         * Student test 5
         */

        DB::table('results')->insert([
            'status' => 1,
            'assignment_id' => 3,
            'student_id' => 5,
            'drawing_id' => 1,
            'created_at' => date("Y-m-d H:i:s"),
            'updated_at' => date("Y-m-d H:i:s")
        ]);

        DB::table('results')->insert([
            'status' => 1,
            'assignment_id' => 5,
            'student_id' => 5,
            'drawing_id' => 1,
            'created_at' => date("Y-m-d H:i:s"),
            'updated_at' => date("Y-m-d H:i:s")
        ]);

        DB::table('results')->insert([
            'status' => -1,
            'assignment_id' => 4,
            'student_id' => 5,
            'drawing_id' => 1,
            'created_at' => date("Y-m-d H:i:s"),
            'updated_at' => date("Y-m-d H:i:s")
        ]);
    }
}
