<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
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
            'first_name' => 'Test gebruiker',
            'user_id' => 1,
            'group_id' => 1
        ]);
        DB::table('students')->insert([
            'first_name' => 'Jasmine',
            'user_id' => 2,
            'group_id' => 2
        ]);
        DB::table('students')->insert([
            'first_name' => 'Daan',
            'user_id' => 3,
            'group_id' => 1
        ]);
        DB::table('students')->insert([
            'first_name' => 'Tycho',
            'user_id' => 4,
            'group_id' => 2
        ]);
   
    }
}
