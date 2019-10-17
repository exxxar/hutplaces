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

        $rooms = $this->chatkit_getRooms();
        /*//очищаем старые комнаты
        foreach ($rooms as $room) {
            $this->chatkit_removeRoom($room["id"]);
        }*/

        try {
            $this->chatkit_createUser(User::where("email", "superadmin@hutplaces.com")->first());

        } catch (\Chatkit\Exceptions\ChatkitException $e) {
        }
        if (count($rooms)==0) {
            $chat1 = ($this->chatkit_createRoom(User::where("email", "superadmin@hutplaces.com")->first(), "Main Room"))["id"];
            $chat2 = ($this->chatkit_createRoom(User::where("email", "superadmin@hutplaces.com")->first(), "Help"))["id"];
           // $chat3 = ($this->chatkit_createRoom(User::where("email", "superadmin@hutplaces.com")->first(), "News"))["id"];

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

        }
        else {
            $index = 0;
            foreach ($rooms as $room) {
                try {
                    Setting::create([
                        'title' => 'chatkit.channel.chat'.(++$index),
                        'value' => $room["id"]
                    ]);

                } catch (\Illuminate\Database\QueryException $e) {

                }

                try {
                    Setting::create([
                        'title' => $room["id"],
                        'value' => `<i class="fas fa-align-justify"></i>`
                    ]);

                } catch (\Illuminate\Database\QueryException $e) {

                }
            }
        }

        $config = ["tax"=>"5","coins_exchange"=>"5","money_exchange"=>"1","coins_title"=>"pucks","years"=>'{"2019","2020"}'];

        foreach ($config as $key=>$value){
            try {

                Setting::create([
                    'title' => $key,
                    'value' => $value
                ]);

            } catch (\Illuminate\Database\QueryException $e) {

            }
        }

    }
}
