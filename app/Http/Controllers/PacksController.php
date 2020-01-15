<?php

namespace App\Http\Controllers;

use App\CardsStorageHUTDB;
use App\CardsStorageNHLHUT;
use App\Classes\TelegramNotify;
use App\Enums\AchievementType;
use App\Enums\ConsoleType;
use App\Enums\GameType;
use App\Enums\Lifetime;
use App\Packs;
use App\PacksDropRaitings;
use App\User;
use GuzzleHttp\Client;
use Illuminate\Http\Request;

class PacksController extends Controller
{
    use TelegramNotify;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function add(Request $request)
    {

        $user = User::find(auth("api")->user()->id);

        if ($user == null)
            return response()
                ->json([
                    "message" => "Please, login before!",
                    "status" => 200
                ]);

        if ($user->is_trader == 0)
            return response()
                ->json([
                    "message" => "You are not trader!",
                    "status" => 200
                ]);


        $imageName = null;

        if ($request->image != null && !is_string($request->image)) {

            $image = $request->image;
            $imageName = $image->hashName();
            $image->move(public_path() . '/img/packs', $imageName);
        }

        $pack = Packs::create([
            'title' => $request->get("title"),
            'description' => $request->get("description"),
            'console_type' => ConsoleType::getInstance(intval($request->get("console_type")))->value,
            'packs_type' => AchievementType::getInstance(intval($request->get("packs_type")))->value,
            'game_type' => GameType::getInstance(intval($request->get("game_type")))->value,
            'price' => $request->get("price"),
            'image' => $imageName,
            'lifetime' => Lifetime::getInstance(intval($request->get("lifetime")))->value,
            'is_active' => $request->get("is_active"),

            'lots_in_pack' => $request->get("lots_in_pack"),
            'lots_guaranteed' => $request->get("lots_guaranteed"),

            'seller_id' => $user->id,
        ]);

        $raitings = json_decode($request->get("raitings"), true);

        foreach ($raitings as $rate) {
            if ($rate["min_ovr"] > $rate["max_ovr"] || $rate["max_ovr"] == 0 || $rate["rate"] < 0 || $rate["rate"] > 100)
                continue;

            $pack->raitings()->create([
                'min_ovr' => $rate["min_ovr"],
                'max_ovr' => $rate["max_ovr"],
                'rate' => $rate["rate"],
            ]);
        }


        $this->msg(
            sprintf(
                "Создан новый пак\n<b>%s</b>\n<i>%s</i>\nЦена <b>%s</b> Packs\nВсего <b>%s</b>\nГарантия <b>%s</b>\n%s",
                $pack->title,
                $pack->description,
                $pack->price,
                $pack->lots_in_pack,
                $pack->lots_guaranteed,
                "http://hutplace.net/packs"
            )
        );

        return response()
            ->json([
                "status" => 200,
                "message" => "Success add new pack!"
            ]);

    }


    public function all()
    {
        return response()
            ->json([
                "packs" => Packs::with(["raitings", "seller", "lots"])->get(),
                "status" => 200
            ]);
    }

    public function demoOpen(Request $request, $id)
    {


        $pack = Packs::find($id);

        $max = $pack->lots_in_pack;
        $needed = $pack->lots_guaranteed;

        $raitings = PacksDropRaitings::where("packs_id", $id)
            ->get();


        $cards_and_drops = [];

        if (count($raitings) > 0) {
            $tmp_cards = [];
            foreach ($raitings as $rate) {
                $index = -1;

                $query = "draw=5";

                $overall_min =  $rate->min_ovr;
                $overall_max = $rate->max_ovr;
                $overall = ($overall_min || $overall_max) ?? null;

                if ($overall)
                    $query .= "&columns[" . (++$index) . "][data]=overall&columns[$index][search][value]=$overall_min<$overall_max&columns[${index}][searchable]=true&columns[$index][orderable]=true&columns[$index][search][regex]=true";

                try {
                    $context = stream_context_create(array(
                        'http' => array(
                            'method' => 'POST',
                            'header' => 'Content-Type: application/x-www-form-urlencoded' . PHP_EOL,
                            'content' => $query
                        ),
                    ));
                    ini_set('max_execution_time', 1000000);
                    $content = file_get_contents(
                        $file = 'https://nhlhutbuilder.com/php/player_stats.php',
                        $use_include_path = false,
                        $context);
                    ini_set('max_execution_time', 60);
                } catch (\Exception $e) {
                    $content = [];
                }
                $content = json_decode($content)->data;


                $count_in_rate = min(
                    round(($max * $rate->rate) / 100) < 1 ?
                        1 : round(($max * $rate->rate) / 100),
                    count($content));

                if (count($content) > 0) {
                    $index_array = [];

                    for ($i = 0; $i < $count_in_rate; $i++) {
                        $value = random_int(0, count($content) - 1);
                        if (!in_array($value, $index_array, true))
                            array_push($index_array, $value);
                        else
                            $i--;


                    }
                    try {

                        foreach ($index_array as $index)
                            array_push($tmp_cards, $content[$index]);
                    } catch (\OutOfRangeException $e) {

                    }


                }

            }


            $cards_and_drops = $tmp_cards;

            /* for ($i = 0; $i < $needed; $i++) {

                 array_push($cards_and_drops, $tmp_cards[random_int(0, count($tmp_cards)-1)]);



             }*/

        }

        return response()
            ->json([
                "status" => 200,
                "raitings" => $raitings,
                "drops" => $cards_and_drops
            ]);
    }

    public function removePack(Request $request, $id)
    {
        $pack = Packs::where("seller_id", auth("api")->user()->id)
            ->where("id", $id)
            ->get();

        if ($pack != null || count($pack) > 0) {
            Packs::where("id", $id)
                ->delete();

            PacksDropRaitings::where("packs_id", $id)
                ->delete();

            return response()
                ->json([
                    "message" => "Success cancel!",
                    "status" => 200
                ]);
        } else {
            return response()
                ->json([
                    "message" => "Error cancel!",
                    "status" => 200
                ]);
        }

    }

    public function buyPack(Request $request, $id)
    {

        $user = User::find(auth("api")->user()->id);

        if ($user == null)
            return response()
                ->json([
                    "message" => "Please, login before!",
                    "status" => 200
                ]);

        $pack = Packs::find($id);

        if ($user->money < $pack->price)
            return response()
                ->json([
                    "message" => "You haven't money to open pack!",
                    "status" => 200
                ]);

        $user->money -= $pack->price;
        $user->save();

        $max = $pack->lots_in_pack;
        $needed = $pack->lots_guaranteed;

        $price = $pack->price;

        $raitings = PacksDropRaitings::where("packs_id", $id)
            ->get();


        $cards_and_drops = [];

        if (count($raitings) > 0) {
            $tmp_cards = [];
            foreach ($raitings as $rate) {
                $index = -1;

                $query = "draw=5";

                $overall_min =  $rate->min_ovr;
                $overall_max = $rate->max_ovr;
                $overall = ($overall_min || $overall_max) ?? null;

                if ($overall)
                    $query .= "&columns[" . (++$index) . "][data]=overall&columns[$index][search][value]=$overall_min<$overall_max&columns[${index}][searchable]=true&columns[$index][orderable]=true&columns[$index][search][regex]=true";

                try {
                    $context = stream_context_create(array(
                        'http' => array(
                            'method' => 'POST',
                            'header' => 'Content-Type: application/x-www-form-urlencoded' . PHP_EOL,
                            'content' => $query
                        ),
                    ));
                    ini_set('max_execution_time', 1000000);
                    $content = file_get_contents(
                        $file = 'https://nhlhutbuilder.com/php/player_stats.php',
                        $use_include_path = false,
                        $context);
                    ini_set('max_execution_time', 60);
                } catch (\Exception $e) {
                    $content = [];
                }
                //$content = json_decode($content)->data;
                $content = $content->data;


                $count_in_rate = min(
                    round(($max * $rate->rate) / 100) < 1 ?
                        1 : round(($max * $rate->rate) / 100),
                    count($content));

                if (count($content) > 0) {
                    $index_array = [];

                    for ($i = 0; $i < $count_in_rate; $i++) {
                        $value = random_int(0, count($content) - 1);
                        if (!in_array($value, $index_array, true))
                            array_push($index_array, $value);
                        else
                            $i--;


                    }
                    try {

                        foreach ($index_array as $index)
                            array_push($tmp_cards, $content[$index]);
                    } catch (\OutOfRangeException $e) {

                    }


                }

            }


            for ($i = 0; $i < $needed; $i++) {

                $drop_card = $tmp_cards[random_int(0, count($tmp_cards) - 1)];

                $arr = (array)json_decode(json_encode($drop_card, true));
                $card = new CardsStorageNHLHUT();
                $card->fill($arr);
                //$card->card_synergies = json_encode($drop_card["card_synergies"]);
                $card->save();

                /* $card = CardsStorageHUTDB::create(\GuzzleHttp\json_encode($drop_card));
                 $card->card_synergies = json_encode($drop_card["card_synergies"]);
                 $card->save();*/

                $user->cards()->attach($card->id);

                array_push($cards_and_drops, $drop_card);


            }

        }

        return response()
            ->json([
                "status" => 200,
                "drops" => $cards_and_drops
            ]);
    }
}
