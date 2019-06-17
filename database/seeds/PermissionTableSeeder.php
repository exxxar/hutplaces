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
            'role-list',
            'role-create',
            'role-edit',
            'role-delete',
            'settings-list',
            'settings-create',
            'settings-edit',
            'settings-delete',
            'tickets-list',
            'tickets-create',
            'tickets-edit',
            'tickets-delete',
            'users-list',
            'users-create',
            'users-edit',
            'users-delete',
            'levels-list',
            'levels-create',
            'levels-edit',
            'levels-delete',
        ];


        foreach ($permissions as $permission) {
            Permission::create(['name' => $permission]);
        }
    }
}
