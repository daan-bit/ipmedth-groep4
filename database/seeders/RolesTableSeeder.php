<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = ['admin', 'docent'];
        foreach($roles as $role) {
            DB::table('roles')->insert([
                'name' => $role,
            ]);
        }
    }
}
