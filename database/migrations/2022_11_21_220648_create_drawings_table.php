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
        Schema::create('drawings', function (Blueprint $table) {
            $table->id();
            $table->string('image');
            $table->unsignedBigInteger('assignment_id');
            $table->unsignedBigInteger('student_id');
            $table->foreign('assignment_id')->references('id')->on('assignments')->onDelete('cascade');
            $table->foreign('student_id')->references('id')->on('students')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('drawings', function (Blueprint $table) {
            $table->dropForeign('drawings_assignment_id_foreign')->onDelete('cascade');
            $table->dropForeign('drawings_student_id_foreign')->onDelete('cascade');
        });
        Schema::dropIfExists('drawings');
    }
};
