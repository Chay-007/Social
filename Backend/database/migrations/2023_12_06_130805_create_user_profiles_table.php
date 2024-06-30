<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_profiles', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->index();
            $table->enum('gender', ['male', 'female'])->default('male');
            $table->string('dob')->index()->nullable();
            $table->enum('blood_group', ['A+', 'AB+', 'B-', 'O+', 'A-', 'AB-', 'B+', 'O-'])->default('O+');
            $table->string('profession')->index()->nullable();
            $table->string('image')->index()->nullable();
            $table->longText('description')->index()->nullable();
            $table->string('education')->index()->nullable();
            $table->string('linkedin')->index()->nullable();
            $table->boolean('status')->index()->default(true);
            $table->timestamps();
            $table->softDeletes();
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
        Schema::dropIfExists('user_profiles');
    }
}
