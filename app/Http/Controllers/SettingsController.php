<?php

namespace App\Http\Controllers;

use App\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SettingsController extends Controller
{


    function __construct()
    {
       // $this->middleware('permission:settings-list');
       // $this->middleware('permission:settings-create', ['only' => ['create','store']]);
       // $this->middleware('permission:settings-edit', ['only' => ['edit','update']]);
       // $this->middleware('permission:settings-delete', ['only' => ['destroy']]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //

        $settings = Setting::orderBy('id','DESC')->paginate(15);
        return view('admin.settings.index',compact('settings'))
            ->with('i', ($request->input('page', 1) - 1) * 15);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
         return view('admin.settings.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required|unique:settings,title',
            'value' => 'required',
        ]);


        Setting::create([
            'title' => $request->input('title'),
            'value' => $request->input('value')
        ]);


        return redirect()->route('admin.settings.index')
            ->with('success','Setting created successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $setting = Setting::find($id);


        return view('admin.settings.show',compact('setting'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $setting = Setting::find($id);

        return view('admin.settings.edit',compact('setting'));
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
        $this->validate($request, [
            'title' => 'required|unique:settings,title',
            'value' => 'required',
        ]);

        Setting::create([
            'title' => $request->input('title'),
            'value' => $request->input('value')
        ]);


        $setting = Setting::find($id);
        $setting->title = $request->input('title');
        $setting->value = $request->input('value');
        $setting->save();



        return redirect()->route('admin.settings.index')
            ->with('success','Setting updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DB::table("settings")->where('id',$id)->delete();
        return redirect()->route('admin.settings.index')
            ->with('success','Setting deleted successfully');
    }
}
