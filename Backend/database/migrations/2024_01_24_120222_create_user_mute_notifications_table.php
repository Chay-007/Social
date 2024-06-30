<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserMuteNotificationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_mute_notifications', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('mute_by')->index();
            $table->unsignedBigInteger('muted_to')->index();
            $table->timestamps();
            $table->foreign('mute_by')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('muted_to')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_mute_notifications');
    }
}
