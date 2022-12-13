<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;
class GroupsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('groups')->insert([
            'school_group' => 'Klas 3A',
            'school_year' => '2021-2022',
            'school_id' => 1,
        ]);
        DB::table('groups')->insert([
            'school_group' => 'Klas 3B',
            'school_year' => '2022-2023',
            'school_id' => 1,
        ]);
    }
}
