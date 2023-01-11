<?php

namespace Tests\Feature;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
class UsersLoginTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     *
     * @return void
     */


     /*For students */

    /** @test */
    public function StudentCanLogin() {
        /*Login for Student, Student Should successfully log in based on credentials*/
        $user = User::create([
            'id' => 59,
            'username' => 'Test gebruiker',
            'password' => bcrypt('Lolol'),
        ]);

        $response = $this->post('students/login', [
            'id' => strval($user->id),
            'password' => 'Lolol',
        ]);
        //if id & password is correct in normal code, user is being redirected.
        //302 status code means redirect, so thats why we use it here
        $response->assertStatus(302);
        //we check if user is authenticated in function below. If yes, no error occurs. If not, error is shown.
        $this->assertAuthenticated();
    }

    /** @test */
    public function StudentCantLogin() {
        /*Student should not be able to log in, because password is wrong*/
        $user = User::create([
            'id' => '1',
            'username' => 'Test gebruiker',
            'password' => bcrypt('VogelBoom'),
        ]);

        $response = $this->post('students/login', [
            'id' => '1',
            'password' => 'verkeerde-wachtwoord'
        ]);
        $this->assertGuest();
    }

    /*For teachers*/
    /** @test */
    public function TeacherCanLogin() {
        /*Login for teachers, teacher should successfully log in based on credentials*/
        $user = User::create([
            'username' => 'Teacher',
            'password' => bcrypt('Teacher1234'),
        ]);

        $response = $this->post('/login', [
            'username' => 'Teacher',
            'password' => 'Teacher1234',
        ]);
        /*
            user should now be logged in, so we assert him as authenticated. If he would not be authenticated
            with the credentials above return error.
        */
        $this->assertAuthenticated();

    }

       /** @test */
       public function TeacherCantLogin() {
        /*Login for teachers, teacher should successfully log in based on credentials*/
        $user = User::create([
            'username' => 'Teacher',
            'password' => bcrypt('Teacher1234'),
        ]);

        $response = $this->post('/login', [
            'username' => 'Teacher',
            'password' => 'Teacher12345', //wrong password
        ]);
        /*
            user should not be logged in, so we assert him as guest. If he would be authenticated
            with the credentials above return error.
        */
        $this->assertGuest();

    }
}
