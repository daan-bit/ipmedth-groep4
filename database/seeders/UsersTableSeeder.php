<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'username' => 'alex123',
            'password' => bcrypt('Alex1234'),
        ]);
        DB::table('users')->insert([
            'username' => 'kasper123',
            'password' => bcrypt('Kasper1234'),
        ]);
        DB::table('users')->insert([
            'username' => 'pietje',
            'password' => bcrypt('VogelBoom'),
        ]);
        DB::table('users')->insert([
            'username' => 'jasmine',
            'password' => bcrypt('HondjeKatje'),
        ]);
    }
}
