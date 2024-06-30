<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddChatIdToBlockChatsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('block_chats', function (Blueprint $table) {
            //
            $table->unsignedBigInteger('chat_with')->index()->after('user_id');
            $table->foreign('chat_with')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('block_chats', function (Blueprint $table) {
            //
        });
    }
}
