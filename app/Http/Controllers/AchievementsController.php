<?php

namespace App\Http\Controllers;

use App\Achievement;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class AchievementsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $achievements = Achievement::orderBy('id','DESC')->paginate(15);
        return view('admin.achievements.index',compact('achievements'))
            ->with('i', ($request->input('page', 1) - 1) * 15);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.achievements.create');
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
            'category' => 'integer|min:0|max:2147483647',
            'type' => 'integer|min:0|max:2147483647',
            'discount' => 'integer|min:0|max:2147483647',
            'exp' => 'integer|min:0|max:2147483647',
            'coins' => 'integer|min:0|max:2147483647',
            'money' => 'numeric',
        ]);

        $input = $request->all(); 

        $achievement = Achievement::create($input); 

        return redirect()->route('achievements.index')
            ->with('success','Achievement created successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Achievement  $achievements
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $achievement = Achievement::find($id);
        return view('admin.achievements.show',compact('achievement'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Achievement  $achievements
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $achievement = Achievement::find($id);

        return view('admin.achievements.edit',compact('achievement'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Achievement  $achievements
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'category' => 'integer|min:0|max:2147483647',
            'type' => 'integer|min:0|max:2147483647',
            'discount' => 'integer|min:0|max:2147483647',
            'exp' => 'integer|min:0|max:2147483647',
            'coins' => 'integer|min:0|max:2147483647',
            'money' => 'numeric',
        ]);
        
        $input = $request->all(); 

        $achievement = Achievement::find($id);
        $achievement->update($input);

        return redirect()->route('achievements.index')
            ->with('success','Achievement updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Achievement  $achievements
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DB::table("achievements")->where('id',$id)->delete();
        return redirect()->route('achievements.index')
            ->with('success','Achievement deleted successfully');
    }
}
