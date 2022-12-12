<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;
class StudentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('students')->insert([
            'first_name' => 'Pietje',
            'user_id' => 3,
            'group_id' => 1
        ]);
        DB::table('students')->insert([
            'first_name' => 'Jasmine',
            'user_id' => 4,
            'group_id' => 2
        ]);
        DB::table('students')->insert([
            'first_name' => 'Daan',
            'user_id' => 5,
            'group_id' => 1
        ]);
   
    }
}
