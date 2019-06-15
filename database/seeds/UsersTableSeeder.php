<?php

use App\User;
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
        User::create([
            'name'=>'admin',
            'email'=>'admin@hutplaces.com',
            'password'=>Hash::make('admin'),
            'skype'=>'skype',
            'vk'=>'',
            'fb'=>'',
            'tw'=>'',
            'money'=>100000,
            'level'=>100,
            'discount'=>100,
            'exp'=>0,
            'active'=>1,
            'avatar'=>'',
            'coins'=>10000
        ]);
    }
}
