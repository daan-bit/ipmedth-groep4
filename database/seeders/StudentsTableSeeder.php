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
        /**
         * GROUP 1
         */
        DB::table('students')->insert([
            'first_name' => 'Test gebruiker',
            'user_id' => 1,
            'group_id' => 1
        ]);
        DB::table('students')->insert([
            'first_name' => 'Jasmine',
            'user_id' => 2,
            'group_id' => 1
        ]);
        DB::table('students')->insert([
            'first_name' => 'Daan',
            'user_id' => 3,
            'group_id' => 1
        ]);
        DB::table('students')->insert([
            'first_name' => 'Tycho',
            'user_id' => 4,
            'group_id' => 1
        ]);

        for ($i = 1; $i <= 16; $i++) {
            DB::table('students')->insert([
                'first_name' => 'test' . $i + 4,
                'user_id' => $i + 4,
                'group_id' => 1
            ]);
        }

        /**
         * GROUP 2
         */

        for ($i = 1; $i <= 20; $i++) {
            DB::table('students')->insert([
                'first_name' => 'test' . $i + 20,
                'user_id' => $i + 20,
                'group_id' => 2
            ]);
        }
    }
}
