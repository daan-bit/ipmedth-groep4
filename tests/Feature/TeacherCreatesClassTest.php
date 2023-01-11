<?php

namespace Tests\Feature;
use App\Models\User;
use App\Models\School;
use App\Models\Group;
use App\Models\Employee;
use App\Models\Role;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class TeacherCreatesClassTest extends TestCase
{
    use RefreshDatabase;
    /** @test */
    public function TeacherCanCreateClass() {
        /*First, we create a teacher and log in with the teacher username & password*/
        $user = User::create([
            'id' => '3',
            'username' => 'Testdocent',
            'password' => bcrypt('VogelBoom'),
        ]);

        $this->post('/login', [
            'username' => $user->username,
            'password' =>  'VogelBoom',
        ]);
        $this->assertAuthenticated();
        /*
            user should now be logged in, so we assert him as authenticated. If he would not be authenticated
            with the credentials above return error.
        */

        /*now, we create a new school because we need to assign the id of a school to a*/
        $school = School::create([
            'id' => 1,
            'name' => 'Test School',
            'address' => 'test_address',
            'postal_code' => 'test21',
            'city' => 'Test'
        ]);

        $role = Role::create([
            'id' => 2,
            'name' => 'docent'
        ]);
        $employee = Employee::create([
            'first_name' => 'Teacher 1',
            'last_name' => 'teacher1',
            'email' => 'teacher1@gmail.com',
            'school_id' => $school->id,
            'user_id' => $user->id,
            'role_id' => $role->id
        ]);

        $group = Group::create([
            'school_group' => '1',
            'school_year' => '2023-2024',
            'school_id' => $school->id,
        ]);

        $response =  $this->post('/docent/groep', [
            'school_group' => $group->school_group,
            'school_year' =>  $group->school_year,
            'school_id' => $group->school_id,
            'employee_id' => $employee->id
        ]);
        //302 status because original code redirects us back to other page
        $response->assertStatus(302);
    }



}
