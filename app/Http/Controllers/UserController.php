<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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

        $data= User::orderBy('id','DESC')->paginate(15);
        return view('admin.users.index',compact('data'))
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
            'money' => 'numeric',
            'level' => 'integer',
            'discount'=> 'integer',
            'base_discount' => 'integer',
            'exp' => 'integer',
            'coins'=>'integer'
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
            'active'=> $request->input('active'),
            'avatar' => $request->input('avatar')
        ]);
        $user->assignRole($request->input('roles'));
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
        $user = User::find($id);
        $roles = Role::pluck('name','name')->all();
        $userRole = $user->roles->pluck('name','name')->all();


        return view('admin.users.edit',compact('user','roles','userRole'));
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
            'base_discount' => 'integer',
            'exp' => 'integer',
            'avatar' => 'required',
            'coins'=>'integer'
        ]);

        $input = $request->all();
        if(!empty($input['password'])){
            $input['password'] = Hash::make($input['password']);
        }else{
            $input = array_except($input,array('password'));
        }


        $user = User::find($id);
        $user->update($input);
        DB::table('model_has_roles')->where('model_id',$id)->delete();


        $user->assignRole($request->input('roles'));

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
