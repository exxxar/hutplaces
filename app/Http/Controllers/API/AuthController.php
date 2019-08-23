<?php

namespace App\Http\Controllers\API;

use App\Classes\CustomChatKit;
use App\Enums\TriggerType;
use App\Http\Controllers\Controller;
use App\Level;
use App\Setting;
use App\Stats;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    use CustomChatKit;


    public function __construct()
    {
        $this->chatkit_init();
    }

    public function register()
    {
        $user = User::create([
            'name' => request('name'),
            'email' => request('email'),
            'avatar' => '',
            'level_id' => (Level::where("level", "1")->first())->id,
            'password' => bcrypt(request('password'))
        ]);

        foreach (TriggerType::toArray() as $key => $value) {
            $stat = Stats::where("stat_type", $value)
                ->where("user_id", $user->uid)
                ->first();

            if (empty($stat)) {
                $stat = Stats::create([
                    'stat_type' => $value,
                    'stat_value' => 0,
                    'user_id' => $user->id
                ]);

                $user->stats()->save($stat);
            }
            //todo: реализовать метод, который будет добавлять всем новый тип тригера для ачивок и статистики
        }

         $this->chatkit_createUser($user);



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

        $chats = Setting::where("title", "like", "chatkit.channel.%")->get();

        foreach ($chats as $chat) {
            $this->chatkit_addUserToRoom($chat->value, [$this->prepareUserId($user->id)]);
        }
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
        $userId =  auth("api")->user()->id;

        $refreshToken = DB::table('oauth_refresh_tokens')
            ->where('access_token_id', $accessToken->id)
            ->update([
                'revoked' => true
            ]);

        $accessToken->revoke();


        $chats = Setting::where("title", "like", "chatkit.channel.%")->get();

        foreach ($chats as $chat) {
            $this->chatkit_removeUserFromRoom($chat->value, [$this->prepareUserId($userId)]);
        }

        Auth::logout();

        return response()->json(['status' => 200]);
    }

    public function getUser()
    {
        return auth()->user();
    }
}
