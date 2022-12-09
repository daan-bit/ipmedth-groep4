<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;
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
            'image' => 'result_1313245.png',
            'assignment_id' => 1,
            'student_id' => 1
        ]);
        DB::table('drawings')->insert([
            'image' => 'result_13132345.png',
            'assignment_id' => 2,
            'student_id' => 1
        ]);
        DB::table('drawings')->insert([
            'image' => 'result_1313232345.png',
            'assignment_id' => 1,
            'student_id' => 2
        ]);
    }
}
