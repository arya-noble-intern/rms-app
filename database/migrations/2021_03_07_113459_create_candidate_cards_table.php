<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCandidateCardsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('candidate_cards', function (Blueprint $table) {
            $table->id();
            $table->foreignId("pic_id")->constrained('users');
            $table->foreignId("employee_request_form_id")->constrained('employee_request_forms');
            $table->foreignId("card_status_id")->constrained('card_statuses')->default(1);
            $table->foreignId("talent_id")->nullable()->constrained('talents');
            $table->foreignId("candidate_id")->nullable()->constrained('users');
            $table->foreignId("last_updated_by_id")->nullable()->constrained('users');
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
        Schema::dropIfExists('candidate_cards');
    }
}
