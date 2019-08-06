<?php

namespace App\Http\Controllers;

use App\Events\UserUpdate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\User;
use Illuminate\Support\Facades\Storage;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        $users = User::orderBy('id', 'DESC')->paginate(15);
        $roles = Role::pluck('name', 'name')->all();

        return view('admin.users.index', compact('users', 'roles'))
            ->with('i', ($request->input('page', 1) - 1) * 15);


    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $roles = Role::pluck('name', 'name')->all();

        $files = Storage::files("/public/");

        $images = array_filter($files, function ($str) {
            return
                strpos($str, ".jpg") != 0 ||
                strpos($str, ".jpeg") != 0 ||
                strpos($str, ".png") != 0;
        });


        return view('admin.users.create', compact('roles', 'images'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'money' => 'numeric',
            'level' => 'integer',
            'discount' => 'integer',
            'base_discount' => 'integer',
            'exp' => 'integer',
            'coins' => 'integer'
        ]);

        $user = new User([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
            'skype' => $request->input('skype'),
            'vk' => $request->input('vk'),
            'fb' => $request->input('fb'),
            'tw' => $request->input('tw'),
            'active' => $request->input('active'),
            'avatar' => $request->input('avatar')
        ]);
        $user->assignRole($request->input('roles'));
        $user->save();

        return back()->with('success', 'Пользователь успешно добавлен');
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::find($id);
        return view('admin.users.show', compact('user'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $user = User::find($id);
        $roles = Role::pluck('name', 'name')->all();
        $userRole = $user->roles->pluck('name', 'name')->all();

        $files = Storage::files("/public/");

        $images = array_filter($files, function ($str) {
            return
                strpos($str, ".jpg") != 0 ||
                strpos($str, ".jpeg") != 0 ||
                strpos($str, ".png") != 0;
        });

        broadcast(new UserUpdate($id));

        return view('admin.users.edit', compact('user', 'roles', 'userRole', 'images'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'money' => 'numeric',
            'level' => 'integer',
            'discount' => 'integer',
            'exp' => 'integer',
            'coins' => 'integer',
            'avatar' => 'required'
        ]);

        $input = $request->all();
        if (!empty($input['password'])) {
            $input['password'] = Hash::make($input['password']);
        } else {
            $input = array_except($input, array('password'));
        }


        $user = User::find($id);
        $user->update($input);
        DB::table('model_has_roles')->where('model_id', $id)->delete();


        $user->assignRole($request->input('roles'));

        broadcast(new UserUpdate($id));

        return back()->with('success', 'Пользователь успешно отредактирован');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

        $user = User::find($id);
        $user->delete();

        return back()->with('success', 'Пользователь успешно удален');
    }

    public function payment(Request $request, $paymentProvider){
            $user = User::find(auth()->user()->id);

            $money = $request->get("money");

            $user->money += $money;
            $user->save();

        broadcast(new UserUpdate($user->id));

            return response()
                ->json([
                    'money' => $money,
                    'currency' => 'rub'
                ]);

    }
}
