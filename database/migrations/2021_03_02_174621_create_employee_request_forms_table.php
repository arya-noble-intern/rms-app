<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeeRequestFormsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employee_request_forms', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users');
            $table->string('title');
            $table->smallInteger('age_range_from');
            $table->smallInteger('age_range_to');
            $table->string('branch');
            $table->text('business_justification');
            $table->string('department');
            $table->string('division');
            $table->string('education');
            $table->string('employee_status');
            $table->string('job_title');
            $table->tinyInteger('min_experience');
            $table->string('planning');
            $table->string('purpose');
            $table->tinyInteger('quantity');
            $table->string('sex');
            $table->text('technical_competencies');
            $table->string('work_location');
            $table->string('working_hours');
            $table->string('position');
            $table->string('company');
            $table->timestamps();

            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('employee_request_forms');
    }
}
