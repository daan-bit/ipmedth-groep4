<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class TeacherHasClassesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //een klas kan bijv 2 docenten hebben die werkzaam zijn op verschillende dagen
        DB::table('teacher_has_classes')->insert([
         'class_id' => 1,
         'teacher_id' => 1,
        ]);

        DB::table('teacher_has_classes')->insert([
            'class_id' => 2,
            'teacher_id' => 1,
        ]);
        
        DB::table('teacher_has_classes')->insert([
            'class_id' => 2,
            'teacher_id' => 2,
        ]);
    }
}
