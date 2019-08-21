<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $permissions = [
            'auction-list',
            'auction-create',
            'auction-edit',
            'auction-delete',

            'mails-list',
            'mails-create',
            'mails-edit',
            'mails-delete',

            'statistic-list',
            'statistic-create',
            'statistic-edit',
            'statistic-delete',

            'wof-list',
            'wof-create',
            'wof-edit',
            'wof-delete',

            'wager-list',
            'wager-create',
            'wager-edit',
            'wager-delete',

            'packs-list',
            'packs-create',
            'packs-edit',
            'packs-delete',

            'broadcast-push',

            'slider-change',

            'role-list',
            'role-create',
            'role-edit',
            'role-delete',

            'setting-list',
            'setting-create',
            'setting-edit',
            'setting-delete',

            'ticket-list',
            'ticket-create',
            'ticket-edit',
            'ticket-delete',

            'user-list',
            'user-create',
            'user-edit',
            'user-delete',

            'level-list',
            'level-create',
            'level-edit',
            'level-delete',

            'achievement-list',
            'achievement-create',
            'achievement-edit',
            'achievement-delete',

            'cards-storage-list',
            'cards-storage-create',
            'cards-storage-edit',
            'cards-storage-delete',

            'coins-list',
            'coins-create',
            'coins-edit',
            'coins-delete',

            'content-list',
            'content-create',
            'content-edit',
            'content-delete',

            'item-list',
            'item-create',
            'item-edit',
            'item-delete',

            'lot-list',
            'lot-create',
            'lot-edit',
            'lot-delete',

            'lottery-list',
            'lottery-create',
            'lottery-edit',
            'lottery-delete',

            'place-list',
            'place-create',
            'place-edit',
            'place-delete',

            'promocode-list',
            'promocode-create',
            'promocode-edit',
            'promocode-delete',

            'stat-list',
            'stat-create',
            'stat-edit',
            'stat-delete',

            'transaction-list',
            'transaction-create',
            'transaction-edit',
            'transaction-delete',


        ];


        foreach ($permissions as $permission) {
            Permission::create(['name' => $permission]);
        }
    }
}
