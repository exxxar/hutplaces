<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('skype')->default('')->nullable();
            $table->string('vk')->default('')->nullable();
            $table->string('fb')->default('')->nullable();
            $table->string('tw')->default('')->nullable();
            $table->double('money')->default(0.0);
            $table->integer('level')->default(1);
            $table->integer('discount')->default(0);
            $table->bigInteger('exp')->default(0);
            $table->boolean('active')->default(true);
            $table->string('avatar',500);

            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
