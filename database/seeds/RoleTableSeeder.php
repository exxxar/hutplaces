<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //

        $tmp = [];
        $role = Role::create(["name"=>"superadmin"]);
        $permission = Permission::get();

        foreach($permission as $value)
            array_push($tmp,$value->id);

        $role->syncPermissions($tmp);
    }
}
