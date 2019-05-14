<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\User;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::paginate(15);

        return view('admin.users', ['users' => $users]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
            'money' => 'numeric',
            'level' => 'integer',
            'discount'=> 'integer',
            'base_discount' => 'integer',
            'exp' => 'integer',
            'avatar' => 'required'
        ]);

        $user = new User([
            'name' => $request->input('name'),
            'email'=> $request->input('email'),
            'password'=> Hash::make($request->input('password')),
            'skype' => $request->input('skype'),
            'vk'=> $request->input('vk'),
            'fb'=> $request->input('fb'),
            'tw' => $request->input('tw'),
            'money'=> $request->input('money'),
            'level'=> $request->input('level'),
            'discount' => $request->input('discount'),
            'exp'=> $request->input('exp'),
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
        //
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
            'password' => 'required',
            'money' => 'numeric',
            'level' => 'integer',
            'discount'=> 'integer',
            'base_discount' => 'integer',
            'exp' => 'integer',
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
