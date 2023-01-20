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
            'first_name' => 'Alex',
            'user_id' => 1,
            'group_id' => 1,
            'password' => 'VogelBoom'
        ]);
        DB::table('students')->insert([
            'first_name' => 'Daniel',
            'user_id' => 2,
            'group_id' => 1,
            'password' => 'HondjeKatje'
        ]);
        DB::table('students')->insert([
            'first_name' => 'Kasper',
            'user_id' => 3,
            'group_id' => 1,
            'password' => 'BoomKatje'
        ]);
        DB::table('students')->insert([
            'first_name' => 'Tycho',
            'user_id' => 4,
            'group_id' => 2,
            'password' => 'HondjeKatje'
        ]);

        /**
         * GROUP 2
         */

        DB::table('students')->insert([
            'first_name' => 'Mark',
            'user_id' => 5,
            'group_id' => 2,
            'password' => 'HondjeKatje'
        ]);
    }
}
