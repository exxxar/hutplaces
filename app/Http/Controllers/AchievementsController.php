<?php

namespace App\Http\Controllers;

use App\Achievement;
use App\CardsStorage;
use App\Enums\AchievementType;
use App\Enums\TriggerType;
use App\UserAchievements;
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
        if ($request->ajax())
            return response()
                ->json([
                    'status' => 200,
                    'achievements' => Achievement::all()
                ]);

        $achievements = Achievement::orderBy('id', 'DESC')->paginate(10);
        return view('admin.achievements.index', compact('achievements'))
            ->with('i', ($request->input('page', 1) - 1) * 10);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $cards = CardsStorage::all();
        return view('admin.achievements.create', compact("cards"));
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
            'type' => 'integer|min:0|max:2147483647',
            'trigger_type' => 'integer|min:0|max:2147483647',
            'trigger_value' => 'integer|min:0|max:2147483647',
            'discount' => 'integer|min:0|max:2147483647',
            'exp' => 'integer|min:0|max:2147483647',
            'coins' => 'integer|min:0|max:2147483647',
            'money' => 'numeric',
        ]);

        $input = $request->all();

        $fileImage = null;
        $fileBg = null;

        if ($request->hasFile('image')) {
            $fileImage = $request->file('image');
            $fileImage->move(public_path() . '/img/achievements/element/', $fileImage->getClientOriginalName());
        }

        if ($request->hasFile('background')) {
            $fileBg = $request->file('background');
            $fileBg->move(public_path() . '/img/achievements/bg/', $fileBg->getClientOriginalName());
        }

        $achievement = new Achievement();
        $achievement->type = AchievementType::getInstance(intval($request->get("type")));
        $achievement->trigger_type = TriggerType::getInstance(intval($request->get("trigger_type")));
        $achievement->trigger_value = $request->get("trigger_value");

        $achievement->title = $request->get("title");
        $achievement->description = $request->get("description");
        $achievement->discount = $request->get("discount");
        $achievement->exp = $request->get("exp");
        $achievement->coins = $request->get("coins");
        $achievement->money = $request->get("money");
        $achievement->is_active = $request->get("is_active") == "on" ? true : false;
        $achievement->random_rewards = $request->get("random_rewards") == "on" ? true : false;
        $achievement->card_id = $request->get("card_id");

        if (!empty($request->get("item_id")))
            $achievement->item_id = $request->get("item_id");
        if (!empty($fileImage))
            $achievement->image = $fileImage->getClientOriginalName();
        if (!empty($fileBg))
            $achievement->background = $fileBg->getClientOriginalName();

        $achievement->save();

        return redirect()->route('achievements.index')
            ->with('success', 'Achievement created successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Achievement $achievements
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $achievement = Achievement::with(["card", "users"])->find($id);
        return view('admin.achievements.show', compact('achievement'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Achievement $achievements
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $achievement = Achievement::find($id);
        $cards = CardsStorage::all();

        return view('admin.achievements.edit', compact('achievement', 'cards'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Achievement $achievements
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'type' => 'required',
            'trigger_type' => 'required',
            'trigger_value' => 'required',
            'discount' => 'integer|min:0|max:2147483647',
            'exp' => 'integer|min:0|max:2147483647',
            'coins' => 'integer|min:0|max:2147483647',
            'money' => 'numeric',
        ]);

        $input = $request->all();

        $fileImage = null;
        $fileBg = null;

        if ($request->hasFile('image')) {
            $fileImage = $request->file('image');
            $fileImage->move(public_path() . '/img/achievements/element/', $fileImage->getClientOriginalName());
        }

        if ($request->hasFile('background')) {
            $fileBg = $request->file('background');
            $fileBg->move(public_path() . '/img/achievements/bg/', $fileBg->getClientOriginalName());
        }

        $achievement = Achievement::find($id);
        $achievement->type = AchievementType::getInstance(intval($request->get("type")));
        $achievement->trigger_type = TriggerType::getInstance(intval($request->get("trigger_type")));
        $achievement->trigger_value = $request->get("trigger_value");

        $achievement->title = $request->get("title");
        $achievement->description = $request->get("description");
        $achievement->discount = $request->get("discount");
        $achievement->exp = $request->get("exp");
        $achievement->coins = $request->get("coins");
        $achievement->money = $request->get("money");
        $achievement->is_active = $request->get("is_active") == "on" ? true : false;
        $achievement->random_rewards = $request->get("random_rewards") == "on" ? true : false;
        $achievement->card_id = $request->get("card_id");
        if (!empty($request->get("item_id")))
            $achievement->item_id = $request->get("item_id");
        if (!empty($fileImage))
            $achievement->image = $fileImage->getClientOriginalName();
        if (!empty($fileBg))
            $achievement->background = $fileBg->getClientOriginalName();

        $achievement->save();

        return redirect()->route('achievements.index')
            ->with('success', 'Achievement updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Achievement $achievements
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DB::table("achievements")->where('id', $id)->delete();
        return redirect()->route('achievements.index')
            ->with('success', 'Achievement deleted successfully');
    }
}
