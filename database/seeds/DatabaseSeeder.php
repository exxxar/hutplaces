<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(StatisticTableSeeder::class);
        $this->call(AchievementsTableSeeder::class);

        /* $this->call(SettingsTableSeeder::class);
         $this->call(LevelsTableSeeder::class);
         $this->call(UsersTableSeeder::class);
         $this->call(PermissionTableSeeder::class);
         $this->call(ContentTableSeeder::class);*/
       //

    }
}
