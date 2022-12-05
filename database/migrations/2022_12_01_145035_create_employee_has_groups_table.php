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
        Schema::create('employee_has_groups', function (Blueprint $table) {
            $table->unsignedBigInteger('group_id');
            $table->unsignedBigInteger('employee_id');
            $table->foreign('group_id')->references('id')->on('groups');
            $table->foreign('employee_id')->references('id')->on('employees');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('employee_has_groups', function (Blueprint $table) {
            $table->dropForeign('employee_has_groups_employee_id_foreign');
            $table->dropForeign('employee_has_groups_group_id_foreign');
        });
        Schema::dropIfExists('employee_has_groups');
    }
};
