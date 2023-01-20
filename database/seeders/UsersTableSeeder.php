<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /**
         * STUDENT USERS
         */

        /**
         * GROUP 1
         */
        DB::table('users')->insert([
            'username' => 'Alex',
            'password' => bcrypt('VogelBoom'),
        ]);

        DB::table('users')->insert([
            'username' => 'Daniel',
            'password' => bcrypt('HondjeKatje'),
        ]);

        DB::table('users')->insert([
            'username' => 'Kasper',
            'password' => bcrypt('BoomKatje'),
        ]);

        /**
         * GROUP 2
         */

        DB::table('users')->insert([
            'username' => 'Tycho',
            'password' => bcrypt('HondjeKatje'),
        ]);

        DB::table('users')->insert([
            'username' => 'Mark',
            'password' => bcrypt('HondjeKatje'),
        ]);

        /**
         * TEACHER AND ADMIN USERS
         */
        DB::table('users')->insert([
            'username' => 'Veronique',
            'password' => bcrypt('Admin1234'),
        ]);

        DB::table('users')->insert([
            'username' => 'Harold',
            'password' => bcrypt('Teacher1234'),
        ]);

        DB::table('users')->insert([
            'username' => 'teacher2',
            'password' => bcrypt('Teacher1234'),
        ]);

        DB::table('users')->insert([
            'username' => 'teacher3',
            'password' => bcrypt('Teacher1234'),
        ]);
    }
}
