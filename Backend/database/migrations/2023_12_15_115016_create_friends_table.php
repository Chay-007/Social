<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFriendsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('friends', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('send_by')->index();
            $table->unsignedBigInteger('send_to')->index();
            $table->unsignedBigInteger('friends_status')->index();
            $table->timestamps();
            $table->foreign('send_by')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('send_to')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('friends_status')->references('id')->on('friend_statuses')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('friends');
    }
}
