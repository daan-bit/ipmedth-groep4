<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            UsersTableSeeder::class,
            SchoolsTableSeeder::class,
            ClassesTableSeeder::class,
            RolesTableSeeder::class,
            EmployeesTableSeeder::class,
            EmployeeHasClassesTableSeeder::class,
            StudentsTableSeeder::class,
            AssignmentsTableSeeder::class,
            DrawingsTableSeeder::class,
            ResultsTableSeeder::class
        ]);
    }
}
