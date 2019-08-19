<?php

namespace App\Http\Controllers;

use App\Events\GainExpirience;
use App\Events\UserUpdate;
use App\Level;
use App\Transaction;
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
        $levels = Level::all();
        $roles = Role::pluck('name', 'name')->all();

        $files = Storage::files("/public/");

        $images = array_filter($files, function ($str) {
            return
                strpos($str, ".jpg") != 0 ||
                strpos($str, ".jpeg") != 0 ||
                strpos($str, ".png") != 0;
        });


        return view('admin.users.create', compact('roles', 'images', 'levels'));
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
            'discount' => 'integer',
            'exp' => 'integer',
            'coins' => 'integer',
            'level' => 'integer'
        ]);

        $avatar = null;

        if ($request->hasFile('avatar')) {
            $avatar = $request->file('avatar');
            $avatar->move(public_path() . '/img/avatars/', $avatar->getClientOriginalName());
        }

        $user = new User([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
            'skype' => $request->input('skype'),
            'vk' => $request->input('vk'),
            'fb' => $request->input('fb'),
            'tw' => $request->input('tw'),
            'active' => $request->input('active') == "on" ? true : false,
            'coins' => $request->input('coins'),
            'exp' => $request->input('exp'),
            'discount' => $request->input('discount'),
            'money' => $request->input('money'),
            'level_id' => $request->input('level'),
        ]);

        if (!empty($avatar))
            $user->avatar = $avatar->getClientOriginalName();

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
        $levels = Level::all();
        $user = User::find($id);
        $roles = Role::pluck('name', 'name')->all();
        $userRole = $user->roles->pluck('name', 'name')->all();
        return view('admin.users.edit', compact('user', 'roles', 'userRole', 'levels'));
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
            'discount' => 'integer',
            'exp' => 'integer',
            'coins' => 'integer',

        ]);

        $avatar = null;

        if ($request->hasFile('avatar')) {
            $avatar = $request->file('avatar');
            $avatar->move(public_path() . '/img/avatars/', $avatar->getClientOriginalName());
        }

        $user = User::find($id);
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        if (!empty($request->input('password')))
            $user->password = Hash::make($request->input('password'));
        $user->skype = $request->input('skype');
        $user->vk = $request->input('vk');
        $user->fb = $request->input('fb');
        $user->tw = $request->input('tw');
        $user->active = $request->input('active') == "on" ? true : false;
        $user->coins = $request->input('coins');
        $user->exp = $request->input('exp');
        $user->discount = $request->input('discount');
        $user->money = $request->input('money');
        $user->level_id = $request->input('level');


        if (!empty($avatar))
            $user->avatar = $avatar->getClientOriginalName();

        $user->assignRole($request->input('roles'));
        $user->save();

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

    public function payment(Request $request, $paymentProvider)
    {


        $user = User::find(auth()->user()->id);

        $money = $request->get("money");
        $user->exp += $money;
        $user->money += $money;
        $user->save();

        event(new GainExpirience($user->id));

        Transaction::create([
            'user_id' => $user->id,
            'amount' => $money,
            'payment_system' => $paymentProvider,
            'currency' => 'rub'
        ]);

        //broadcast(new UserUpdate($user->id));

        return response()
            ->json([
                'money' => $money,
                'currency' => 'rub'
            ]);

    }
}
