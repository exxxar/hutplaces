<?php
/**
 * Created by PhpStorm.
 * User: exxxa
 * Date: 11.11.2019
 * Time: 9:15
 */

namespace App\Classes;


use Telegram\Bot\FileUpload\InputFile;
use Telegram\Bot\Laravel\Facades\Telegram;

trait TelegramNotify
{
    public function upload()
    {
        $activity = Telegram::getUpdates();
        dd($activity);
    }

    public function orderRequest($text)
    {

        /*  $text = "A new contact us query\n"
              . "<b>Email Address: </b>\n"
              . "$request->email\n"
              . "<b>Message: </b>\n"
              . $request->message;*/

        Telegram::sendMessage([
            'chat_id' => env("TELEGRAM_ORDER_REQUEST_CHAT_ID", ''),
            'parse_mode' => 'HTML',
            'text' => $text,
            'disable_notification'=>'true'
        ]);

    }

    public function photoMessage($message,$photo,$chatId)
    {
        /*   $request->validate([
               'file' => 'file|mimes:jpeg,png,gif'
           ]);

           $photo = $request->file('file');
        */
        Telegram::sendPhoto([
            'chat_id' => $chatId,
            'photo' => InputFile::create($photo),
            'parse_mode' => 'HTML',
            'caption'=>$message
        ]);
    }

    public function msg($text,$chatId)
    {

        /*  $text = "A new contact us query\n"
              . "<b>Email Address: </b>\n"
              . "$request->email\n"
              . "<b>Message: </b>\n"
              . $request->message;*/

        Telegram::sendMessage([
            'chat_id' => $chatId,
            'parse_mode' => 'HTML',
            'text' => $text,
            'disable_notification'=>'true'
        ]);

    }

    public function photo($photo,$chatId)
    {
        /*   $request->validate([
               'file' => 'file|mimes:jpeg,png,gif'
           ]);

           $photo = $request->file('file');
        */
        Telegram::sendPhoto([
            'chat_id' => $chatId,
            'photo' => InputFile::createFromContents(file_get_contents($photo->getRealPath()), str_random(10) . '.' . $photo->getClientOriginalExtension())
        ]);
    }
}
