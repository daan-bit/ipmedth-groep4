<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class EmployeeHasGroupsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //een groep kan bijv 2 docenten hebben die werkzaam zijn op verschillende dagen
        DB::table('employee_has_groups')->insert([
         'group_id' => 1,
         'employee_id' => 1,
        ]);

        DB::table('employee_has_groups')->insert([
            'group_id' => 2,
            'employee_id' => 1,
        ]);
        
        DB::table('employee_has_groups')->insert([
            'group_id' => 2,
            'employee_id' => 2,
        ]);
    }
}
