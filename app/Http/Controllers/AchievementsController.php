<?php

namespace App\Http\Controllers;

use App\Achievements;
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
        $achievements = Achievements::paginate(15);

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
        $input = $request->all(); 

        $achievements = Achievements::create($input); 

        return back()->with('success', 'Достижение успешно добавлено');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Achievements  $achievements
     * @return \Illuminate\Http\Response
     */
    public function show(Achievements $achievements)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Achievements  $achievements
     * @return \Illuminate\Http\Response
     */
    public function edit(Achievements $achievements)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Achievements  $achievements
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $input = $request->all(); 

        $achievements = Achievements::find($id);
        $achievements->update($input);

        return back()->with('success', 'Достижение успешно отредактировано');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Achievements  $achievements
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $achievements = Achievements::find($id);
        $achievements->delete();

        return back()->with('success', 'Достижение успешно удалено');
    }
}
