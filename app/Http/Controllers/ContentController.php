<?php

namespace App\Http\Controllers;

use App\Content;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ContentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //

        $content = Content::orderBy('id','DESC')->paginate(5);

        return view('admin.content.index',compact('content'))
            ->with('i', ($request->input('page', 1) - 1) * 5);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.content.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $this->validate($request, [
            'title' => 'required',
            'type' => 'required',
            'content' => 'required',
            'lang' => 'required'
        ]);

        Content::create($request->all());

        return redirect()->route('content.index')
            ->with('success','Content created successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Content  $content
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //

        $content = Content::find($id);


        return view('admin.content.show',compact('content'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Content  $content
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //

        $content = Content::find($id);


        return view('admin.content.edit',compact('content'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Content  $content
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        //
        $this->validate($request, [
            'title' => 'required',
            'type' => 'required',
            'content' => 'required',
            'lang' => 'required'
        ]);


        $content = Content::find($id);
        $content->title = $request->input('title');
        $content->type = $request->input('type');
        $content->content = $request->input('content');
        $content->lang = $request->input('lang');
        $content->save();


        return redirect()->route('content.index')
            ->with('success','Content updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Content  $content
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        DB::table("contents")->where('id',$id)->delete();
        return redirect()->route('content.index')
            ->with('success','Content deleted successfully');
    }

    public function all(Request $request,$type) {


        if ($request->ajax())
            return response()
                ->json(Content::where("type",$type)->get());

        $content = Content::where("type",$type)
            ->orderBy('id','DESC')
            ->paginate(5);

        return view('admin.content.index',compact('content'))
            ->with('i', ($request->input('page', 1) - 1) * 5);
    }

    public function get(Request $request,$id) {


        if ($request->ajax())
            return response()
                ->json(Content::where("id",$id)
                    ->get());

        return redirect()
            ->action("ContentController@show",["id"=>$id]);
    }
}
