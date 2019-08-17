<?php

namespace App\Http\Controllers\API;

use App\Enums\TriggerType;
use App\Http\Requests\RegisterFormRequest;
use App\Level;
use App\Stats;
use App\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Laravel\Socialite\Facades\Socialite;

class AuthController extends Controller
{

       public function register()
    {
        $user = User::create([
            'name' => request('name'),
            'email' => request('email'),
            'avatar' => '',
            'level_id'=>(Level::where("level","1")->first())->id,
            'password' => bcrypt(request('password'))
        ]);

        foreach (TriggerType::toArray() as $key => $value) {
            $stat = $user->has('stats', function (Builder $query) use ($value){
                $query->where('stat_type', '=', $value);
            })->get();

            if (empty($stat))
                $user->stats()->attach(Stats::create([
                    'stat_type'=>$value,
                    'stat_value'=>0,
                    'user_id'=>$user->id
                ]));
            //todo: реализовать метод, который будет добавлять всем новый тип тригера для ачивок и статистики
        }

        return response()->json(['status' => 201]);
    }

    public function login()
    {
        // Проверяем существует ли пользователь с указанным email адресом
        $user = User::whereEmail(request('username'))->first();

        if (!$user) {
            return response()->json([
                'message' => 'Wrong email or password',
                'status' => 422
            ], 422);
        }

        // Если пользователь с таким email адресом найден - проверим совпадает
        // ли его пароль с указанным
        if (!Hash::check(request('password'), $user->password)) {
            return response()->json([
                'message' => 'Wrong email or password',
                'status' => 422
            ], 422);
        }

        // Внутренний API запрос для получения токенов
        $client = DB::table('oauth_clients')
            ->where('password_client', true)
            ->first();

        // Убедимся, что Password Client существует в БД (т.е. Laravel Passport
        // установлен правильно)
        if (!$client) {
            return response()->json([
                'message' => 'Laravel Passport is not setup properly.',
                'status' => 500
            ], 500);
        }

        $data = [
            'grant_type' => 'password',
            'client_id' => $client->id,
            'client_secret' => $client->secret,
            'username' => request('username'),
            'password' => request('password'),
        ];

        $request = Request::create('/oauth/token', 'POST', $data);

        $response = app()->handle($request);

        // Проверяем был ли внутренний запрос успешным
        if ($response->getStatusCode() != 200) {
            return response()->json([
                'message' => 'Wrong email or password',
                'status' => 422
            ], 422);
        }

        // Вытаскиваем данные из ответа
        $data = json_decode($response->getContent());

        // Формируем окончательный ответ в нужном формате
        return response()->json([
            'token' => $data->access_token,
            'user' => $user,
            'status' => 200
        ]);
    }

    public function logout()
    {
        $accessToken = auth()->user()->token();

        $refreshToken = DB::table('oauth_refresh_tokens')
            ->where('access_token_id', $accessToken->id)
            ->update([
                'revoked' => true
            ]);

        $accessToken->revoke();

        return response()->json(['status' => 200]);
    }

    public function getUser()
    {
        return auth()->user();
    }
}
