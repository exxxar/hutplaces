<?php

namespace App\Http\Controllers;

use App\Jobs\SendReminderEmail;
use App\Order;
use App\Ticket;
use Carbon\Carbon;
use G2APay\G2APay;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Queue;
use Illuminate\Support\Facades\Storage;

class SinglePageController extends Controller
{
    //

    public function index() {
        return view('app');
    }


    public function admin() {
        return view('admin');
    }

    public function reportSubmit(Request $request)
    {
        $attach_list = [];

        $dirName = Carbon::now()->timestamp;
        if (env("SEND_TO_GDRIVE")==true)
             Storage::cloud()->makeDirectory($dirName);


       // $dirName = Hash::make($dirName);
        Storage::makeDirectory("public\\".$dirName);

        $description = $request->get("description");
        $ticket = new Ticket();
        $ticket->email = $request->get("email");
        $ticket->description = $description;
        $ticket->directory = $dirName;
        $ticket->save();

        foreach ( $request->images as $image) {
            $imageName = $image->hashName();
            $storagePath  = Storage::disk('public')->getDriver()->getAdapter()->getPathPrefix();

          //  $image->move(public_path('images'), $imageName);
            Storage::put('public\\'.$dirName,$image,'public');



            if (env("SEND_TO_GDRIVE")==true) {

                $fileData = File::get($storagePath.'\\'.$dirName.'\\'.$imageName);
                $recursive = false; // Get subdirectories also?
                $contents = collect(Storage::cloud()->listContents('/', $recursive));
                $dir = $contents->where('type', '=', 'dir')
                    ->where('filename', '=', $dirName)
                    ->first(); // There could be duplicate directory names!
                if (!$dir) {
                    return 'Directory does not exist!';
                }
                Storage::cloud()->put($dir['path'] . '/' . $imageName, $fileData);

            }
            array_push($attach_list, $dirName.'/'.$imageName);

        }

        Mail::send('mails.report', ["description"=>  $description], function($message) use ($attach_list,$storagePath,$dirName)
        {
            $message->to(env('APP_SERVICE_EMAIL'), env('APP_SERVICE_NAME'))->subject('New report!');

            for ($i=0; $i < count($attach_list); $i++) {
                $message->attach($storagePath.'/'.$attach_list[$i]);
                Storage::delete($attach_list[$i]);

            }

        });

        return response()->json(['success'=>'You have successfully upload image.']);
    }

    public function requestMoney(Request $request,G2APay $payment){
            $order = new Order();
            $order->title = "Coins";
            $order->currency = "USA";
            $order->count=0.0;
            $order->price=0.0;
            $order->quantity=1;
            $order->payment_provider = "G2A";
            $order->save();



        $payment->addItem(1, 'Coins', 1, 1, 9.95);
        $extras = []; // Optional extras passed to order (Please refer G2APay docs)
        if (env("G2A_SANDBOX")==false)
            $response = $payment->createOrder($order->id, $extras);
        else
            $response = $payment->test()->createOrder($order->id, $extras);

    }
}
