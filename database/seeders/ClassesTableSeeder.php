<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;
class ClassesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('classes')->insert([
            'school_class' => 'Klas 3A',
            'school_year' => '2022-2023',
            'school_id' => 1,
        ]);
        DB::table('classes')->insert([
            'school_class' => 'Klas 3B',
            'school_year' => '2022-2023',
            'school_id' => 1,
        ]);
    }
}
