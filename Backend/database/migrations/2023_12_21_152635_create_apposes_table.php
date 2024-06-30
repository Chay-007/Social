<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateApposesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('apposes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('posts_id')->index();
            $table->unsignedBigInteger('appose_post_id')->index();
            $table->unsignedBigInteger('user_id')->index();
            $table->string('star')->index()->nullable();
            $table->string('reason')->index()->nullable();
            $table->boolean('status')->index()->default(true);
            $table->timestamps();
            $table->softDeletes();
            $table->foreign('appose_post_id')->references('id')->on('posts')->onDelete('cascade');
            $table->foreign('posts_id')->references('id')->on('posts')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('apposes');
    }
}
