<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

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
            'first_name' => 'teacher',
            'last_name' => 'teacher',
            'email' => 'teacher@gmail.com',
            'school_id' => 1,
            'user_id' => 1,
            'role_id' => 2
        ]);

        DB::table('employees')->insert([
            'first_name' => 'admin',
            'last_name' => 'admin',
            'email' => 'admin@gmail.com',
            'school_id' => 1,
            'user_id' => 2,
            'role_id' => 1
        ]);
    }
}
