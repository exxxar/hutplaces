<?php

namespace App\Http\Controllers;

use App\Achievement;
use Illuminate\Http\Request;

class AchievementsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $achievements = Achievement::paginate(15);

        return view('admin.achievements', ['achievements' => $achievements]);
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
            'category' => 'integer',
            'type' => 'integer',
            'discount' => 'integer',
            'exp' => 'integer',
            'coins' => 'integer',
            'money' => 'numeric',
        ]);

        $input = $request->all(); 

        $achievements = Achievement::create($input);

        return back()->with('success', 'Достижение успешно добавлено');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Achievement  $achievements
     * @return \Illuminate\Http\Response
     */
    public function show(Achievement $achievements)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Achievement  $achievements
     * @return \Illuminate\Http\Response
     */
    public function edit(Achievement $achievements)
    {
        //
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
            'category' => 'integer',
            'type' => 'integer',
            'discount' => 'integer',
            'exp' => 'integer',
            'coins' => 'integer',
            'money' => 'numeric',
        ]);
        
        $input = $request->all(); 

        $achievements = Achievement::find($id);
        $achievements->update($input);

        return back()->with('success', 'Достижение успешно отредактировано');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Achievement  $achievements
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $achievements = Achievement::find($id);
        $achievements->delete();

        return back()->with('success', 'Достижение успешно удалено');
    }
}
