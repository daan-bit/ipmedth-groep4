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
            'username' => 'Test gebruiker',
            'password' => bcrypt('VogelBoom'),
        ]);

        DB::table('users')->insert([
            'username' => 'Jasmine',
            'password' => bcrypt('HondjeKatje'),
        ]);

        DB::table('users')->insert([
            'username' => 'Daan',
            'password' => bcrypt('BoomKatje'),
        ]);

        DB::table('users')->insert([
            'username' => 'Tycho',
            'password' => bcrypt('HondjeKatje'),
        ]);

        for ($i = 1; $i <= 16; $i++) {
            DB::table('users')->insert([
                'username' => 'test' . $i + 4,
                'password' => bcrypt('HondjeKatje'),
            ]);
        }

        /**
         * GROUP 2
         */

        for ($i = 1; $i <= 20; $i++) {
            DB::table('users')->insert([
                'username' => 'test' . $i + 20,
                'password' => bcrypt('HondjeKatje'),
            ]);
        }

        /**
         * TEACHER AND ADMIN USERS
         */
        DB::table('users')->insert([
            'username' => 'admin',
            'password' => bcrypt('Admin1234'),
        ]);

        DB::table('users')->insert([
            'username' => 'teacher1',
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
