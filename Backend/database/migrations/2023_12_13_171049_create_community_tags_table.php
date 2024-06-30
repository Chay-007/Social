<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommunityTagsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('community_tags', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('community_id')->index();
            $table->unsignedBigInteger('tag_id')->index();
            $table->boolean('status')->index()->default(true);
            $table->timestamps();
            $table->softDeletes();
            $table->foreign('tag_id')->references('id')->on('tags')->onDelete('cascade');
            $table->foreign('community_id')->references('id')->on('communities')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('community_tags');
    }
}
