<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class AssignmentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('assignments')->insert([
            'name' => 'Opdracht 1',
            'description' => 'Teken een kat',
            'images' => json_encode(['afbeelding_1' => 'afbeelding1.png', 'afbeelding_2' => 'afbeelding_2.png']),
            'timer' => 60,
            'world' => 1,
            'level' => 1
        ]);

        DB::table('assignments')->insert([
            'name' => 'Opdracht 2',
            'description' => 'Teken een Hond',
            'images' => json_encode(['afbeelding_1' => 'afbeelding4.png', 'afbeelding_5' => 'afbeelding_5.png']),
            'timer' => 90,
            'world' => 1,
            'level' => 2
        ]);
    }
}
