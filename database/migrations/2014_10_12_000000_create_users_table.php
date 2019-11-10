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
        Schema::disableForeignKeyConstraints();
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

            $table->integer('discount')->default(0);
            $table->bigInteger('exp')->default(0);
            $table->bigInteger('coins')->default(0);
            $table->bigInteger('bonus')->default(0);
            $table->boolean('active')->default(true);//todo: change to is_active
            $table->boolean('is_trader')->default(false);//todo: add to admin

            $table->integer('trader_randoms_limit')->default(0);
            $table->integer('trader_auction_limit')->default(0);
            $table->integer('trader_packs_limit')->default(0);
            $table->integer('trader_wof_limit')->default(0);

            $table->string('avatar',500)->default('')->nullable();

            $table->unsignedInteger("level_id" );
            $table->foreign('level_id')->references('id')->on('levels');


            $table->rememberToken();
            $table->timestamps();
        });
        Schema::enableForeignKeyConstraints();
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
