<?php

use App\Classes\CustomChatKit;
use App\Setting;
use App\User;
use Illuminate\Database\Seeder;

class SettingsTableSeeder extends Seeder
{
    use CustomChatKit;

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (Setting::all() as $setting)
            $setting->delete();

        $this->chatkit_init();

        //очищаем старые комнаты
        foreach ($this->chatkit_getRooms() as $room) {
            $this->chatkit_removeRoom($room["id"]);
        }

        //очищаем пользователей

        foreach ($this->chatkit_getUsers() as $user) {
            $this->chatkit_removeUser($user["id"]);
        }

        try {
            $this->chatkit_createUser(User::where("email", "superadmin@hutplaces.com")->first());
        } catch (\Chatkit\Exceptions\ChatkitException $e) {
        }

        $chat1 = ($this->chatkit_createRoom(User::where("email", "superadmin@hutplaces.com")->first(), "Main Room"))["id"];
        $chat2 = ($this->chatkit_createRoom(User::where("email", "superadmin@hutplaces.com")->first(), "Help"))["id"];
        //
        try {

            Setting::create([
                'title' => 'chatkit.channel.chat1',
                'value' => $chat1
            ]);

        } catch (\Illuminate\Database\QueryException $e) {

        }

        try {

            Setting::create([
                'title' => $chat1,
                'value' => `<i class="fas fa-align-justify"></i>`
            ]);

        } catch (\Illuminate\Database\QueryException $e) {

        }

        try {

            Setting::create([
                'title' => $chat2,
                'value' => `<i class="fas fa-question"></i>`
            ]);

        } catch (\Illuminate\Database\QueryException $e) {

        }

        try {
            Setting::create([
                'title' => 'chatkit.channel.chat2',
                'value' => $chat2
            ]);
        } catch (\Illuminate\Database\QueryException $e) {

        }

        try {

            Setting::create([
                'title' => 'tax',
                'value' => '5'
            ]);
        } catch (\Illuminate\Database\QueryException $e) {

        }

        try {

            Setting::create([
                'title' => 'tax',
                'value' => '5'
            ]);

        } catch (\Illuminate\Database\QueryException $e) {

        }

        try {
            Setting::create([
                'title' => 'coins_exchange',
                'value' => '5'
            ]);

        } catch (\Illuminate\Database\QueryException $e) {

        }

        try {
            Setting::create([
                'title' => 'money_exchange',
                'value' => '1'
            ]);
        } catch (\Illuminate\Database\QueryException $e) {

        }

        try {

            Setting::create([
                'title' => 'coins_title',
                'value' => 'pucks'
            ]);
        } catch (\Illuminate\Database\QueryException $e) {

        }


        try {
            Setting::create([
                'title' => 'years',
                'value' => '{"2018","2019","220"}'
            ]);
        } catch (\Illuminate\Database\QueryException $e) {

        }

    }
}
