<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\User;
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

        $users = User::orderBy('id','DESC')->paginate(15);
        return view('admin.users.index',compact('users'))
            ->with('i', ($request->input('page', 1) - 1) * 15);


    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $roles = Role::pluck('name','name')->all();
        return view('admin.users.create',compact('roles'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name'=> 'required',
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = new User([
            'name' => $request->input('name'),
            'email'=> $request->input('email'),
            'password'=> Hash::make($request->input('password')),
            'skype' => $request->input('skype'),
            'vk'=> $request->input('vk'),
            'fb'=> $request->input('fb'),
            'tw' => $request->input('tw'),
            'active'=> $request->input('active'),
            'avatar' => $request->input('avatar')
        ]);
        $user->save();

        return back()->with('success', 'Пользователь успешно добавлен');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::find($id);
        return view('admin.users.show',compact('user'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'name'=> 'required',
            'email' => 'required|email',
            'money' => 'numeric',
            'level' => 'integer',
            'discount'=> 'integer',
            'exp' => 'integer',
            'coins' => 'integer',
            'avatar' => 'required'
        ]);

        $user = User::find($id);
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->password = Hash::make($request->input('password'));
        $user->skype = $request->input('skype');
        $user->vk = $request->input('vk');
        $user->fb = $request->input('fb');
        $user->tw = $request->input('tw');
        $user->money = $request->input('money');
        $user->level = $request->input('level');
        $user->discount = $request->input('discount');
        $user->exp = $request->input('exp');
        $user->coins = $request->input('coins');
        $user->active = $request->input('active');
        $user->avatar = $request->input('avatar');
        $user->save();

        return back()->with('success', 'Пользователь успешно отредактирован');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

        $user = User::find($id);
        $user->delete();

        return back()->with('success', 'Пользователь успешно удален');
    }
}
