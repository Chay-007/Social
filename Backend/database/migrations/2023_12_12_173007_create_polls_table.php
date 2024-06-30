<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePollsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('polls', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->index();
            $table->unsignedBigInteger('where_to_post_id')->index();
            $table->boolean('anonymous_survey')->index()->default(false);
            $table->longText('description')->nullable();
            $table->longText('question')->nullable();
            $table->boolean('multi_option_select')->index()->default(false);
            $table->string('below_option')->index()->nullable();
            $table->boolean('status')->index()->default(true);
            $table->string('lat')->index()->nullable();
            $table->string('long')->index()->nullable();
            $table->unsignedBigInteger('day_id')->index();
            $table->timestamps();
            $table->softDeletes();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('day_id')->references('id')->on('days')->onDelete('cascade');
            $table->foreign('where_to_post_id')->references('id')->on('where_to_posts')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('polls');
    }
}
