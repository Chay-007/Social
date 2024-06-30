<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRepostIdToRepostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('reposts', function (Blueprint $table) {
            $table->unsignedBigInteger('repost_id')->index()->after('posts_id');
            $table->string('thoughts')->index()->nullable()->after('repost_id');
            $table->string('lat')->index()->nullable()->after('thoughts');
            $table->string('long')->index()->nullable()->after('lat');
            $table->foreign('repost_id')->references('id')->on('posts')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('reposts', function (Blueprint $table) {
            //
        });
    }
}
