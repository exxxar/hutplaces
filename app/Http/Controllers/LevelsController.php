<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Level;

class LevelsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $levels = Level::orderBy('id','DESC')->paginate(15);
        return view('admin.levels.index',compact('levels'))
            ->with('i', ($request->input('page', 1) - 1) * 15);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.levels.create');
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
            'title'=> 'required',
            'experience' => 'integer|min:0|max:2147483647',
            'level'=> 'integer|min:0|max:2147483647',
            'discount' => 'integer|min:0|max:2147483647',
        ]);

        $input = $request->all(); 

        $level = Level::create($input); 

        return redirect()->route('levels.index')
            ->with('success','Level created successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $level = Level::find($id);
        return view('admin.levels.show',compact('level'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $level = Level::find($id);

        return view('admin.levels.edit',compact('level'));
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
            'title'=> 'required',
            'experience' => 'integer|min:0|max:2147483647',
            'level'=> 'integer|min:0|max:2147483647',
            'discount' => 'integer|min:0|max:2147483647',
        ]);

        $input = $request->all(); 

        $level = Level::find($id);
        $level->update($input);

        return redirect()->route('levels.index')
            ->with('success','Level updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DB::table("levels")->where('id',$id)->delete();
        return redirect()->route('levels.index')
            ->with('success','Level deleted successfully');
    }
}
