<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $bookings = Booking::all();
         return response()->json($bookings);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $booking = new Booking;
        $booking->user_id = $request->input('user_id');
        $booking->flight_id = $request->input('flight_id');
        $booking->type = $request->input('type');
        $booking->depart = $request->input('depart');
        $booking->arrival = $request->input('arrival');
        $booking->from = $request->input('from');
        $booking->to = $request->input('to');
        $booking->class = $request->input('class');
        $booking->special_request = $request->input('specialReq');
        $booking->last_name = $request->input('lastName');
        $booking->first_name = $request->input('firstName');
        $booking->email = $request->input('email');
        $booking->phone = $request->input('phone');
        $booking->number_tickets = $request->input('numberTickets');

        $booking->save();

        return response()->json(['message'=>'Booking Added !', 'user'=>$booking]);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
