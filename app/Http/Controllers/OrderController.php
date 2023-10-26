<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider;

class OrderController extends Controller
{

    //create new order
    public function addToCart(Request $request)
    {

        //var_dump(Auth::User());
        // if (Auth::check()) {
        try {
            $order = new Order();
            // $order->user_id = 1;
            //$order->user_id = $request->input('user_id');
            $order->name_menu = $request->input('name_menu');
            $order->price = $request->input('price');
            $order->save();

            return response()->json(['message' => "berhasil masukin"]);
        } catch (\Exception $e) {

            return response()->json(['error' => "ga berhasil"], 500);
        }

        // } else {
        //return response()->json(['message' => 'Not Auth'], 201);
        //return redirect()->intended('login');
        // }

        //return response()->json(['response' => Auth::user()->id], 500);
    }

    public function checkOut()
    {
        return response()->json(['message' => 'Checkout Succesfully'], 201);
    }
}
