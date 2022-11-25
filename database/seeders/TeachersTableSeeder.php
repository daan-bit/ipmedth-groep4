<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;
class TeachersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('teachers')->insert([
            'first_name' => 'Alex',
            'last_name' => 'Filinsky',
            'email' => 's1118551@student.hsleiden.nl',
            'school_id' => 1,
            'user_id' => 1,
            'role_id' => 2
        ]);

        DB::table('teachers')->insert([
            'first_name' => 'Kasper',
            'last_name' => 'Trouwee',
            'email' => 's1118202@student.hsleiden.nl',
            'school_id' => 1,
            'user_id' => 1,
            'role_id' => 2
        ]);
        //
    }
}
