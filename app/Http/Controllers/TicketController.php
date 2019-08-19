<?php

namespace App\Http\Controllers;

use App\Enums\TicketType;
use App\Ticket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TicketController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $tickets = Ticket::paginate(15);

        return view('admin.tickets.index',compact('tickets'))
            ->with('i', ($request->input('page', 1) - 1) * 15);
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

        DB::table('tickets')->insert(
            [
                'email' => $request->input('email'), 
                'description' => $request->input('description'),
            ]
        );

        return back()->with('success', 'Ticket added successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $ticket = Ticket::find($id);
        return view('admin.tickets.show',compact('ticket'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'ticket_type' => 'integer|min:0|max:2147483647',
        ]);

        $ticket = Ticket::find($id);
        $ticket->is_active = $request->input('is_active') == "on" ? true : false;
        $ticket->ticket_type = TicketType::getInstance(intval($request->get("ticket_type")));
        $ticket->save();

        return redirect()->route("tickets.index")
            ->with('success','Ticket modified successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DB::table('tickets')->where('id', $id)->delete();

        return redirect()->route('tickets.index')
            ->with('success','Ticket deleted successfully');
    }
}
