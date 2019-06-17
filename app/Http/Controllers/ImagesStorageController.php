<?php

namespace App\Http\Controllers;

use App\ImagesStorage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class ImagesStorageController extends Controller
{

    public function get($name){

       /* if (!Storage::exist(Storage::path("/public/".$name)))
            return */
        return response()->file(Storage::path("/public/".$name));
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $directories = Storage::directories("/");

        $files = Storage::files("/public/");

        $fitlered_files = array_filter($files, function ($str) {
            return
                strpos($str, ".jpg") != 0 ||
                strpos($str, ".jpeg") != 0 ||
                strpos($str, ".png") != 0;
        });


        return view('admin.imagestorage.index', ["files" => $fitlered_files]);
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
        if($request->hasAny('files'))
        {
            $tmp = [];

            $allowedfileExtension=['jpeg','jpg','png','docx'];
            $files = $request->file('files');

            foreach($files as $file) {
                $filename = $file->getClientOriginalName();
                $extension = $file->getClientOriginalExtension();
                $check = in_array($extension, $allowedfileExtension);

                if ($check) {
                    $file->storeAs(
                        'public', $filename
                    );
                }

                array_push($tmp,$filename) ;
            }

            return \GuzzleHttp\json_encode($tmp);
        }


        return "failed";
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\ImagesStorage $imagesStorage
     * @return \Illuminate\Http\Response
     */
    public function show(ImagesStorage $imagesStorage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\ImagesStorage $imagesStorage
     * @return \Illuminate\Http\Response
     */
    public function edit(ImagesStorage $imagesStorage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\ImagesStorage $imagesStorage
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ImagesStorage $imagesStorage)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ImagesStorage $imagesStorage
     * @return \Illuminate\Http\Response
     */
    public function destroy($name)
    {

        Storage::delete('/public/'.$name);
        return back()->with('success', 'Изображение успешно удалено');
    }
}
