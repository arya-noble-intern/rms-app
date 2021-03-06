<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRequestApprovalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('request_approvals', function (Blueprint $table) {
            $table->id();
            $table->foreignId('employee_request_form_id')->constrained('employee_request_forms');
            $table->foreignId('pic_id')->nullable()->constrained('users');
            $table->tinyInteger('approval_by_lhc');
            $table->mediumText('notes_by_lhc');
            $table->tinyInteger('approval_by_pic')->nullable();
            $table->mediumText('notes_by_pic')->nullable();
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
        Schema::dropIfExists('request_approvals');
    }
}
