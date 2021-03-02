<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTalentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('talents', function (Blueprint $table) {
            $table->id();
            $table->foreignId('pic_id')->constrained('users');
            $table->foreignId('candidate_id')->nullable()->constrained('users');
            $table->string('name');
            $table->string('source');
            $table->string('cv');
            $table->string('address');
            $table->string('applied_position');
            $table->date('dob');
            $table->string('email');
            $table->enum('gender', ['Male', 'Female']);
            $table->string('last_education');
            $table->string('mobile_phone');
            $table->string('nik');
            $table->tinyInteger('total_working_experience');
            $table->string('university');
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
        Schema::dropIfExists('talents');
    }
}
