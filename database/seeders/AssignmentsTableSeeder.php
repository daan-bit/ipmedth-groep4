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
            'description' => 'Teken de zon',
            'prompt' => 'zon',
            'images' => json_encode(['afbeelding_1' => 'afbeelding1.png', 'afbeelding_2' => 'afbeelding_2.png']),
            'world' => 1,
            'level' => 1
        ]);

        DB::table('assignments')->insert([
            'name' => 'Opdracht 2',
            'description' => 'Teken een Vis',
            'prompt' => 'vis',
            'images' => json_encode(['afbeelding_1' => 'afbeelding4.png', 'afbeelding_5' => 'afbeelding_5.png']),
            'world' => 1,
            'level' => 2
        ]);
        DB::table('assignments')->insert([
            'name' => 'Opdracht 3',
            'description' => 'Teken een zwaard',
            'prompt' => 'zwaard',
            'images' => json_encode(['afbeelding_1' => 'afbeelding4.png', 'afbeelding_5' => 'afbeelding_5.png']),
            'world' => 1,
            'level' => 3
        ]);
        DB::table('assignments')->insert([
            'name' => 'Opdracht 4',
            'description' => 'Teken een hoed',
            'prompt' => 'hoed',
            'images' => json_encode(['afbeelding_1' => 'afbeelding4.png', 'afbeelding_5' => 'afbeelding_5.png']),
            'world' => 1,
            'level' => 4
        ]);
        DB::table('assignments')->insert([
            'name' => 'Opdracht 5',
            'description' => 'Teken een kanon',
            'prompt' => 'kanon',
            'images' => json_encode(['afbeelding_1' => 'afbeelding4.png', 'afbeelding_5' => 'afbeelding_5.png']),
            'world' => 1,
            'level' => 5
        ]);
    }
}
