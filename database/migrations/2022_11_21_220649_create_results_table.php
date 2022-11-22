<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('results', function (Blueprint $table) {
            $table->id();
            $table->tinyInteger('status');
            $table->unsignedBigInteger('exercise_id');
            $table->unsignedBigInteger('student_id');
            $table->unsignedBigInteger('drawing_id');
            $table->foreign('exercise_id')->references('id')->on('exercises');
            $table->foreign('student_id')->references('id')->on('students');
            $table->foreign('drawing_id')->references('id')->on('drawings');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //test
        $table->dropForeign('results_exercise_id_foreign');
        $table->dropForeign('results_student_id_foreign');
        $table->dropForeign('results_drawing_id_foreign');
        Schema::dropIfExists('results');
    }
};
