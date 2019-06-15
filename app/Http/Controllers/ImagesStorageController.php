<?php

namespace App\Http\Controllers;

use App\ImagesStorage;
use Illuminate\Http\Request;

class ImagesStorageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $imagestorages = ImagesStorage::paginate(15);

        return view('admin.imagestorage', ['imagestorages' => $imagestorages]);
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name'=> 'required',
        ]);

        $imagestorage = new ImagesStorage([
            'title' => $request->input('title'),
        ]);
        $imagestorage->save();

        return back()->with('success', 'Изображение успешно добавлено');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\ImagesStorage  $imagesStorage
     * @return \Illuminate\Http\Response
     */
    public function show(ImagesStorage $imagesStorage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\ImagesStorage  $imagesStorage
     * @return \Illuminate\Http\Response
     */
    public function edit(ImagesStorage $imagesStorage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ImagesStorage  $imagesStorage
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ImagesStorage $imagesStorage)
    {
        $request->validate([
            'name'=> 'required',
        ]);
        
        $imagestorage = ImagesStorage::find($id);
        $imagestorage->name = $request->input('name');
        $imagestorage->save();

        return back()->with('success', 'Изображение успешно отредактировано');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ImagesStorage  $imagesStorage
     * @return \Illuminate\Http\Response
     */
    public function destroy(ImagesStorage $imagesStorage)
    {
        $imagestorage = ImagesStorage::find($id);
        $imagestorage->delete();

        return back()->with('success', 'Изображение успешно удалено');
    }
}
