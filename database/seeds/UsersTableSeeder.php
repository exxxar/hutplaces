<?php

use App\Enums\TriggerType;
use App\Events\Achievement;
use App\Stats;
use App\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
            'name' => 'superadmin2',
            'email' => 'superadmin2@hutplaces.com',
            'password' => Hash::make('admin'),
            'skype' => '',
            'vk' => '',
            'fb' => '',
            'tw' => '',
            'money' => 1000000,
            'level_id' => 1,
            'discount' => 100,
            'exp' => 0,
            'active' => 1,
            'avatar' => 'avatar-14.jpg',
            'coins' => 1000000,
            'is_trader' => true
        ]);

        foreach (TriggerType::toArray() as $key => $value) {
            $stat = $user
                ->stats()
                ->where("stat_type", $value)
                ->first();

            if (empty($stat)) {
                $stat = Stats::create([
                    'stat_type' => $value,
                    'stat_value' => 0,
                    'user_id' => $user->id
                ]);

                $user->stats()->save($stat);
            }
        }

        $role = Role::where("name", "superadmin")->first();
        $user->assignRole([$role->id]);

        event(new Achievement(TriggerType::Level, 1, $user->id));

    }
}
