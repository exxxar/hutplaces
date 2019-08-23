<?php
/**
 * Created by PhpStorm.
 * User: exxxa
 * Date: 22.08.2019
 * Time: 21:41
 */

namespace App\Classes;


use App\User;
use Chatkit\Chatkit;

trait CustomChatKit
{

    protected $nameLength = 10;

    protected $chatkit;


    public function chatkit_init()
    {

        $this->chatkit = app('ChatKit');
    }

    public function chatkit_createUser(User $user) {

        $hash = $this->prepareUserId($user->id);

        return $this->chatkit->createUser([
            'id' =>  $hash,
            'name' => $user->name,
        ]);
    }


    public function chatkit_createRoom(User $user,$title){
        $hash = $this->prepareUserId($user->id);

        $room = ( $this->chatkit->createRoom([
            'creator_id'=>$hash,
            'name'=>$title,
        ]))["body"];
        return $room;
    }

    public function chatkit_getRooms(){
        $tmp = [];
        $rooms = $this->chatkit->getRooms();
        foreach($rooms["body"] as $room)
            array_push($tmp, $room);
        return $tmp;
    }

    public function chatkit_getUsers($params){
        $tmp = [];
        $rooms = $this->chatkit->getUsers($params);
        foreach($rooms["body"] as $room)
            array_push($tmp, $room);
        return $tmp;
    }

    public function chatkit_removeUser($userId){
        $this->chatkit->deleteUser(["id"=>$userId]);
    }

    public function chatkit_removeRoom($roomId){
        $this->chatkit->deleteRoom(["id"=>$roomId]);
    }

    public function chatkit_addUserToRoom($roomId,array $userIds){
        return ($this->chatkit->addUsersToRoom([
            "room_id"=>$roomId,
            "user_ids"=>$userIds
        ]))["body"];
    }

    public function chatkit_removeUserFromRoom($roomId,array $userIds){
        return ($this->chatkit->removeUsersFromRoom([
            "room_id"=>$roomId,
            "user_ids"=>$userIds
        ]))["body"];
    }

    public function chatkit_getRoomMessages($roomId,$limit = 100,$direction = "newer"){
        return ($this->chatkit->getRoomMessages([
            "room_id"=>$roomId,
            "limit"=>$limit,
            "direction"=>$direction,
        ]))["body"];
    }

    public function chatkit_sendSimpleMessage($roomId,$userId,$message){

        return ($this->chatkit->sendSimpleMessage([
            "room_id"=>$roomId,
            "sender_id"=>$userId,
            "text"=>$message,
        ]))["body"];
    }

    public function prepareUserId($userId){
        return substr(base64_encode($userId),0,$this->nameLength);
    }
}