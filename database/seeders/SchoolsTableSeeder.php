<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SchoolsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('schools')->insert([
            'name' => 'Basisschool het Mozaiek',
            'address' => 'Nieuwstraat 43',
            'postal_code' => '2152BE',
            'city' => 'Nieuw-Vennep'
        ]);
    }
};

