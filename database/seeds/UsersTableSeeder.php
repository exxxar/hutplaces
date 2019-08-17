<?php

use App\Enums\TriggerType;
use App\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       $user =  User::create([
            'name'=>'admin',
            'email'=>'admin@hutplaces.com',
            'password'=>Hash::make('admin'),
            'skype'=>'skype',
            'vk'=>'',
            'fb'=>'',
            'tw'=>'',
            'money'=>100000,
            'level_id'=>1,
            'discount'=>100,
            'exp'=>0,
            'active'=>1,
            'avatar'=>'',
            'coins'=>10000
        ]);

        foreach (TriggerType::toArray() as $key => $value) {
            $stat = $user
                        ->stats()
                        ->where("stat_type",$value)
                        ->first();

            if (empty($stat))
                $user->stats()->attach(Stats::create([
                    'stat_type'=>$value,
                    'stat_value'=>0,
                    'user_id'=>$user->id
                ]));
            //todo: реализовать метод, который будет добавлять всем новый тип тригера для ачивок и статистики
        }
    }
}
