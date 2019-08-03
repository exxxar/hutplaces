<?php

namespace App\Http\Controllers\Auth;

use App\SocialAccount;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Laravel\Socialite\Facades\Socialite;

class SocialController extends Controller
{
    //

    protected $socialPass = "test";

    public function redirectToProvider($provider)
    {
        return Socialite::driver($provider)->redirect();
    }

    public function handleProviderCallback($provider)
    {
        $socialiteUser = Socialite::driver($provider)->user();

        $user = $this->findOrCreateUser($provider, $socialiteUser);

        auth()->login($user, true);

        $client = DB::table('oauth_clients')
            ->where('password_client', true)
            ->first();


        $data = [
            'grant_type' => 'password',
            'client_id' => $client->id,
            'client_secret' => $client->secret,
            'username' => $user->email,
            'password' => $socialiteUser->getId(),
        ];

        $request = Request::create('/oauth/token', 'POST', $data);

        $response = app()->handle($request);
        $data = json_decode($response->getContent());

        if (isset($data->error))
            return redirect()->to(env('APP_URL').'/signin?error=409');

        return redirect()->to(env('APP_URL').'/cabinet?token='.$data->access_token);

    }

    public function findOrCreateUser($provider, $socialiteUser)
    {
        if ($user = $this->findUserBySocialId($provider, $socialiteUser->getId())) {
            return $user;
        }

        $email = $socialiteUser->getEmail();
        if (isset($socialiteUser->accessTokenResponseBody["email"]))
            $email = $socialiteUser->accessTokenResponseBody["email"];

        if ($email==null)
            $email =  $socialiteUser->getId().'@'.env('APP_NAME');

        if ($user = $this->findUserByEmail($provider, $email)) {
            $this->addSocialAccount($provider, $user, $socialiteUser);

            return $user;
        }



        $user = User::create([
            'name' => $socialiteUser->getName(),
            'email' => $email,
            'avatar' => $socialiteUser->getAvatar(),
            'password' => bcrypt($socialiteUser->getId()),
        ]);

        $this->addSocialAccount($provider, $user, $socialiteUser);

        return $user;
    }

    public function findUserBySocialId($provider, $id)
    {
        $socialAccount = SocialAccount::where('provider', $provider)
            ->where('provider_id', $id)
            ->first();

        return $socialAccount ? $socialAccount->user : false;
    }

    public function findUserByEmail($provider, $email)
    {
        return !$email ? null : User::where('email', $email)->first();
    }

    public function addSocialAccount($provider, $user, $socialiteUser)
    {
        SocialAccount::create([
            'user_id' => $user->id,
            'provider' => $provider,
            'provider_id' => $socialiteUser->getId(),
            'token' => $socialiteUser->token,
        ]);
    }
}
