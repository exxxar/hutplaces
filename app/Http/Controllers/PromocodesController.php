<?php

namespace App\Http\Controllers;

use App\Classes\TelegramNotify;
use App\Enums\Lifetime;
use App\Enums\TriggerType;
use App\Events\Achievement;
use App\Events\UserUpdate;
use App\Promocode;
use App\User;
use DateTime;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class PromocodesController extends Controller
{
    use TelegramNotify;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $promocodes = Promocode::orderBy('id', 'DESC')->paginate(15);
        return view('admin.promo.index', compact('promocodes'))
            ->with('i', ($request->input('page', 1) - 1) * 15);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.promo.create');
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
            'lifetime' => 'integer|min:0|max:2147483647',
            'activation_count' => 'integer|min:0|max:2147483647',
            'count' => 'integer|min:0|max:2147483647',
            'exp' => 'integer|min:0|max:2147483647',
            'discount' => 'integer|min:0|max:2147483647',
            'money' => 'numeric',
        ]);

        $input = $request->all();

        Promocode::create($input);

        return redirect()->route('promo.index')
            ->with('success', 'Promocode created successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Promocode $promocodes
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        $promocode = Promocode::find($id);
        return view('admin.promo.show', compact('promocode'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Promocode $promocodes
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $promocode = Promocode::find($id);
        return view('admin.promo.edit', compact('promocode'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Promocode $promocodes
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'lifetime' => 'integer|min:0|max:2147483647',
            'activation_count' => 'integer|min:0|max:2147483647',
            'count' => 'integer|min:0|max:2147483647',
            'exp' => 'integer|min:0|max:2147483647',
            'discount' => 'integer|min:0|max:2147483647',
            'money' => 'numeric',
        ]);

        $input = $request->all();

        $promocodes = Promocode::find($id);
        $promocodes->update($input);

        return redirect()->route('promo.index')
            ->with('success', 'Promocode updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Promocode $promocodes
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DB::table("promocodes")->where('id', $id)->delete();
        return redirect()->route('promo.index')
            ->with('success', 'Promocode deleted successfully');
    }

    public function activate(Request $request)
    {

        if (auth("api")->user() == null)
            return response()
                ->json([
                    'status' => 200,
                    'message' => 'User must autorize'
                ]);

        $code = $request->get("code");

        $isActivated = (User::with(["promocodes"])
                ->find(auth("api")->user()->id))
                ->promocodes()
                ->where("code", $code)
                ->first() != null;

        if ($isActivated)
            return response()
                ->json([
                    'status' => 200,
                    'message' => 'This promocode was activated!!'
                ]);

        if (!$request->ajax())
            return response()
                ->json([
                    'status' => 200,
                    'message' => 'Must be AJAX request'
                ]);


        $promocode = Promocode::where("code", $code)->first();

        if (!$promocode)
            return response()
                ->json([
                    'status' => 200,
                    'message' => 'Promocode not found'
                ]);


        if (!$promocode->is_active)
            return response()
                ->json([
                    'status' => 200,
                    'message' => 'Promocode is inactive'
                ]);

        if ($promocode->activation_count >= $promocode->count)
            return response()
                ->json([
                    'status' => 200,
                    'message' => 'Your promotional code limit has been reached.'
                ]);

        $time = $promocode->lifetime->value;
        $timesArray = [1000, 6, 12, 24, 36, 48, 96, 128];

        $time_1 = (intval($timesArray[$time] * 60 * 60) + date_timestamp_get(new DateTime($promocode->created_at)));
        $time_2 = date_timestamp_get(now());

        if ($time_1 < $time_2)
            return response()
                ->json([
                    'status' => 200,
                    'message' => 'The code expired.'
                ]);


        $promocode->activation_count += 1;
        $promocode->save();

        $user = User::find(auth("api")->user()->id);
        $user->promocodes()->attach($promocode->id);

        broadcast(new UserUpdate($user->id));

        if (!empty($promocode->card_id)) {
            $user->cards()->attach($promocode->card_id);
            event(new Achievement(TriggerType::CardsCount, 1, $user->id));
        }

        if (!empty($promocode->money) && $promocode->money > 0)
            $user->money += $promocode->money;

        if (!empty($promocode->bonus) && $promocode->bonus > 0)
            $user->bonus += $promocode->bonus;

        if (!empty($promocode->coins) && $promocode->coins > 0) {
            $user->coins += $promocode->coins;
            event(new Achievement(TriggerType::CoinsCount, $promocode->coins, $user->id));
        }

        if (!empty($promocode->exp) && $promocode->exp > 0) {
            $user->exp += $promocode->exp;
            event(new Achievement(TriggerType::Experience, $promocode->exp, $user->id));
        }

        if (!empty($promocode->discount) && $promocode->discount > 0) {
            $user->discount = max($user->discount, $promocode->discount);
            event(new Achievement(TriggerType::Discount, $promocode->discount, $user->id));
        }

        if ($promocode->activation_count >= $promocode->count) {
            $promocode->is_active = false;
            $promocode->save();
        }

        event(new Achievement(TriggerType::PromocodesCount, 1, $user->id));

        return response()
            ->json([
                'status' => 200,
                'message' => 'Promocode was success activated'
            ]);
    }


    public function add(Request $request)
    {

        $promo = Promocode::create([
            'lifetime' => Lifetime::getInstance(intval($request->get("lifetime")))->value,
            'is_active' => true,
            'title' => $request->get("title"),
            'description' => $request->get("description"),
            'activation_count' => 0,
            'count' => $request->get("count"),
            'money' => $request->has("money") ? $request->get("money") : 0,
            'exp' => $request->has("exp") ? $request->get("exp") : 0,
            'discount' => $request->has("discount") ? $request->get("discount") : 0,
            'coins' => $request->has("coins") ? $request->get("coins") : 0,
            'bonus' => $request->has("bonus") ? $request->get("bonus") : 0,
            'creator_id' => auth("api")->user()->id,
            'code' => $request->has("code") ? $request->get("code") :
                strtoupper(substr(base64_encode(random_int(0, 9999999)), 0, 8)),
        ]);

        $this->msg(
            sprintf(
                "Создан новый промокод\n<b>%s</b>\n<i>%s</i>\nhttp://hutplace.net/promotions",
                $promo->title,
                $promo->description
            )
        );

        return response()
            ->json([
                "status" => 200,
                "message" => "Success!"
            ]);
    }

    public function promotions(Request $request)
    {

        $promocodes = Promocode::where("is_active", 1)->get();
        $promocodes->makeHidden(['code']);

        return response()
            ->json([
                "promotions" => $promocodes,
                "status" => 200,
            ]);

    }
}
