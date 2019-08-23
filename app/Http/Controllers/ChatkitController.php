<?php

namespace App\Http\Controllers;

use App\Classes\CustomChatKit;
use App\Setting;
use Illuminate\Http\Request;

class ChatkitController extends Controller
{
    use CustomChatKit;

    public function __construct()
    {
        $this->chatkit_init();
    }

    public function getCurrentUser(Request $request)
    {
        return response()
            ->json([
                "status" => 200,
                "current_user_id" => $this->prepareUserId(auth("api")->user()->id)
            ]);
    }

    public function getMessages(Request $request)
    {

        $fetchMessages = $this->chatkit_getRoomMessages($request->get("room_id"));

        $messages = collect($fetchMessages)->map(function ($message) {
            return [
                'id' => $message['id'],
                'senderId' => $message['user_id'],
                'text' => $message['text'],
                'timestamp' => $message['created_at']
            ];
        });

        return response($messages);
    }

    /**
     * Receives a client request and provides a new token.
     *
     * @param  \Illuminate\Http\Request $request
     * @return mixed
     */
    public function authenticate(Request $request)
    {
        $response = $this->chatkit->authenticate([
            'user_id' => $request->user_id,
        ]);
        return response()
            ->json(
                $response['body'],
                $response['status']
            );
    }

    /**
     * Send user message.
     *
     * @param  \Illuminate\Http\Request $request
     * @return mixed
     */
    public function sendMessage(Request $request)
    {
        $message = $this->chatkit_sendSimpleMessage(
            $request->get("room_id"),
            $request->get("user_id"),
            $request->get("text")
        );

        return response($message);
    }

    /**
     * Get all users.
     *
     * @param  \Illuminate\Http\Request $request
     * @return mixed
     */
    public function getUsers(Request $request)
    {
        $roomId = $request->get("room_id");
        $member_user_ids = ($this->chatkit->getRoom(["id" => $roomId]))["body"]["member_user_ids"];

        $users = $this->chatkit->getUsersByID(["user_ids" => $member_user_ids]);
        return response()
            ->json([
                "status" => 200,
                "users" => $users["body"]
            ]);
    }

    /**
     * Get all users.
     *
     * @param  \Illuminate\Http\Request $request
     * @return mixed
     */
    public function logout(Request $request)
    {
        $userId = $request->get("user_id");
        $roomId = $request->get("room_id");
        $this->chatkit->removeUsersFromRoom([
            "room_id" => $roomId,
            "user_ids" => [$userId]
        ]);
    }

    public function test()
    {
        $member_user_ids = ($this->chatkit->getRoom(["id" => "81035535-9806-4c26-99b7-e42842451c11"]))["body"]["member_user_ids"];

        $users = $this->chatkit->getUsersByID(["user_ids" => $member_user_ids]);
        return response()
            ->json([
                "status" => 200,
                "users" => $users["body"]
            ]);
    }

    public function getRooms(Request $request)
    {
        $tmp = [];
        $chats = Setting::where("title", "like", "chatkit.channel.%")->get();

        foreach ($chats as $chat) {
            array_push($tmp, [
                "id" => $chat->value,
                "title" => (Setting::where("title", $chat->value)->first())->value
            ]);
        }

        return response()
            ->json([
                "status" => 200,
                "chats" => $tmp
            ]);
    }


}
