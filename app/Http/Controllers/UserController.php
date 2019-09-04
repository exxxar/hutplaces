<?php

namespace App\Http\Controllers;

use App\Achievement;
use \App\Events\Achievement as AchievementEvent;
use App\Enums\TriggerType;
use App\Events\GainExpirience;
use App\Events\UserUpdate;
use App\Level;
use App\Lottery;
use App\Place;
use App\Stats;
use App\Ticket;
use App\Transaction;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;
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
        return view('admin.users.create', compact('roles', 'levels'));
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

        foreach (TriggerType::toArray() as $key => $value) {
            $stat = Stats::where("stat_type", $value)
                ->where("user_id", $user->uid)
                ->fisrt();

            if (empty($stat)) {
                $stat = Stats::create([
                    'stat_type' => $value,
                    'stat_value' => 0,
                    'user_id' => $user->id
                ]);

                $user->stats()->save($stat);
            }
        }


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


        event(new AchievementEvent(TriggerType::Experience, $money, $user->id));
        event(new AchievementEvent(TriggerType::Spent_Money, $money, $user->id));

        Transaction::create([
            'user_id' => $user->id,
            'amount' => $money,
            'payment_system' => $paymentProvider,
            'currency' => 'rub'
        ]);

        //broadcast(new UserUpdate($user->id));

        broadcast(new UserUpdate($user->id));

        return response()
            ->json([
                'money' => $money,
                'currency' => 'rub'
            ]);

    }

    public function lotteries(Request $request, $id)
    {
        $lotteries = Place::with(["lottery", "lottery.lot", "lottery.lot.card"])
            ->where("user_id", $id)->get();

        $tmp = [];

        foreach ($lotteries as $lottery)
            array_push($tmp, $lottery->lottery);

        if ($request->ajax())
            return response()
                ->json([
                    "status" => 200,
                    "lotteries" => $tmp
                ]);

        return $tmp;

    }

    public function wins(Request $request, $id)
    {
        if ($request->ajax())
            return response()
                ->json([
                    "status" => 200,
                    "lotteries" => (User::with(["lotteries", "lotteries.lot", "lotteries.lot.card"])->find($id))->lotteries
                ]);

        $itemsOnPage = 10;

        $wins = (User::with(["lotteries", "lotteries.lot", "lotteries.lot.card"])
            ->find($id))
            ->lotteries()
            ->orderBy('id', 'DESC')
            ->paginate($itemsOnPage);

        return view("admin.users.wins", compact("wins"))
            ->with('i', ($request->input('page', 1) - 1) * $itemsOnPage);


    }

    public function cards(Request $request, $id)
    {

        if ($request->ajax())
            return response()
                ->json([
                    "status" => 200,
                    "cards" => (User::with(["cards"])->find($id))->cards
                ]);

        $itemsOnPage = 10;

        $cards = (User::with(["cards"])->find($id))
            ->cards()
            ->orderBy('id', 'DESC')
            ->paginate($itemsOnPage);

        return view("admin.users.cards", compact("cards"))
            ->with('i', ($request->input('page', 1) - 1) * $itemsOnPage);

    }


    public function stats(Request $request, $id)
    {

        $stats = Stats::where("user_id", $id)->get();

        if ($request->ajax())
            return response()
                ->json([
                    "status" => 200,
                    "stats" => $stats
                ]);


        return view("admin.users.stats", compact("stats"));
    }

    public function achievements(Request $request, $id)
    {

        if ($request->ajax())
            return response()
                ->json([
                    "status" => 200,
                    "achievements" => (User::with(["achievements"])->find($id))->achievements
                ]);

        $itemsOnPage = 10;

        $achievements = (User::with(["achievements"])
            ->find($id))
            ->achievements()
            ->orderBy('id', 'DESC')
            ->paginate($itemsOnPage);

        return view("admin.users.achievements", compact("achievements"))
            ->with('i', ($request->input('page', 1) - 1) * $itemsOnPage);


    }

    public function progress(Request $request)
    {
        $achId = $request->get("ach_id");
        $user = User::find($request->get("user_id"));
        if ($user == null)
            return response()
                ->json([
                    "status" => 200,
                    "current" => 0,
                    "needed" => 0,
                    "trigger_title" => "empty"
                ]);

        $ach = Achievement::find($achId);
        $stat = Stats::where("user_id", $user->id)
            ->where("stat_type", $ach->trigger_type->value)
            ->first();

        return response()
            ->json([
                "status" => 200,
                "current" => $stat == null ? 0 : $stat->stat_value,
                "needed" => $ach->trigger_value,
                "trigger_title" => $ach->trigger_type->key
            ]);
    }

    public function promo(Request $request, $id)
    {

        if ($request->ajax())
            return response()
                ->json([
                    "status" => 200,
                    "promocodes" => (User::with(["promocodes"])->find($id))->promocodes
                ]);

        $itemsOnPage = 10;

        $promocodes = (User::with(["promocodes"])
            ->find($id))
            ->promocodes()
            ->orderBy('id', 'DESC')
            ->paginate($itemsOnPage);

        return view("admin.users.promo", compact("promocodes"))
            ->with('i', ($request->input('page', 1) - 1) * $itemsOnPage);


    }

    public function avatarRefresh(Request $request)
    {

        $user = User::find(auth("api")->user()->id);
        $filesInFolder = File::files(public_path() . '/img/avatars');
        $file = pathinfo($filesInFolder[random_int(0, count($filesInFolder) - 1)]);
        $user->avatar = $file['filename'] . "." . $file['extension'];
        $user->save();

        // broadcast(new UserUpdate($user->id));

        return response()
            ->json([
                "status" => 200,
                'avatar' => $user->avatar,
                "message" => "Success!"
            ]);

    }

    public function avatarSet(Request $request)
    {

        $user = User::find(auth("api")->user()->id);
        $user->avatar = $request->get("image");
        $user->save();

        return response()
            ->json([
                "status" => 200,
                'avatar' => $user->avatar,
                "message" => "Success!"
            ]);

    }


    public function tickets(Request $request, $id)
    {
        if ($request->ajax())
            return response()
                ->json([
                    "status" => 200,
                    "tickets" => Ticket::where("user_id", $id)->get()
                ]);

        $itemsOnPage = 10;

        $tickets = Ticket::where("user_id", $id)
            ->orderBy('id', 'DESC')
            ->paginate($itemsOnPage);

        return view("admin.users.tickets", compact("tickets"))
            ->with('i', ($request->input('page', 1) - 1) * $itemsOnPage);
    }

    public function transactions(Request $request, $id)
    {
        if ($request->ajax())
            return response()
                ->json([
                    "status" => 200,
                    "transactions" => Transaction::where("user_id", $id)->get()
                ]);

        $itemsOnPage = 50;

        $transactions = Transaction::where("user_id", $id)
            ->orderBy('id', 'DESC')
            ->paginate($itemsOnPage);

        return view("admin.users.transactions", compact("transactions"))
            ->with('i', ($request->input('page', 1) - 1) * $itemsOnPage);


    }

    public function images(Request $request)
    {

        $tmp = [];
        $filesInFolder = File::files(public_path() . '/img/avatars');
        foreach ($filesInFolder as $f) {
            $file = pathinfo($f);
            array_push($tmp, $file['filename'] . "." . $file['extension']);
        }

        return response()
            ->json([
                "status" => 200,
                'images' => $tmp,
            ]);


    }

    public function updatePass(Request $request)
    {
        $user = User::find(auth("api")->user()->id);

        if ($user->password != Hash::make($request->input('old')))
            return response()
                ->json([
                    "status" => 200,
                    "message" => "Old password is not correct!"
                ]);

        if (count($request->input('new')) < 5)
            return response()
                ->json([
                    "status" => 200,
                    "message" => "Bad password length! Must be at least 5 char"
                ]);


        $user->password = Hash::make($request->input('new'));
        $user->save();

        return response()
            ->json([
                "status" => 200,
                "message" => "Success password change"
            ]);
    }

    public function updateInfo(Request $request)
    {

        $user = User::find(auth("api")->user()->id);

        $user->name = $request->get("name");
        $user->skype = $request->get("skype");
        $user->vk = $request->get("vk");
        $user->fb = $request->get("fb");
        $user->tw = $request->get("tw");

        $user->save();

        return response()
            ->json([
                "status" => 200,
                "message" => "Success info update"
            ]);
    }
}
