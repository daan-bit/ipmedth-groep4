<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EmployeesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('employees')->insert([
            'first_name' => 'Teacher 1',
            'last_name' => 'teacher1',
            'email' => 'teacher1@gmail.com',
            'school_id' => 1,
            'user_id' => 7,
            'role_id' => 2
        ]);

        DB::table('employees')->insert([
            'first_name' => 'Teacher 2',
            'last_name' => 'teacher2',
            'email' => 'teacher2@gmail.com',
            'school_id' => 1,
            'user_id' => 8,
            'role_id' => 2
        ]);

        DB::table('employees')->insert([
            'first_name' => 'Teacher 3',
            'last_name' => 'teacher3',
            'email' => 'teacher3@gmail.com',
            'school_id' => 1,
            'user_id' => 9,
            'role_id' => 2
        ]);

        DB::table('employees')->insert([
            'first_name' => 'admin',
            'last_name' => 'admin',
            'email' => 'admin@gmail.com',
            'school_id' => 1,
            'user_id' => 6,
            'role_id' => 1
        ]);
    }
}
