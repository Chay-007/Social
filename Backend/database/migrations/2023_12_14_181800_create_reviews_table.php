<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReviewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reviews', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('posts_id')->index();
            $table->unsignedBigInteger('user_id')->index();
            $table->unsignedBigInteger('where_to_post_id')->index();
            $table->boolean('review')->index()->default(false);
            $table->boolean('opinion')->index()->default(false);
            $table->longText('product_service_que')->nullable();
            $table->longText('description')->nullable();
            $table->string('reating')->nullable();
            $table->boolean('online_product_service')->index()->default(false);
            $table->boolean('recommend')->index()->default(true);
            $table->boolean('beware')->index()->default(true);
            $table->string('lat')->index()->nullable();
            $table->string('long')->index()->nullable();
            $table->boolean('status')->index()->default(true);
            $table->timestamps();
            $table->softDeletes();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('where_to_post_id')->references('id')->on('where_to_posts')->onDelete('cascade');
            $table->foreign('posts_id')->references('id')->on('posts')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reviews');
    }
}
