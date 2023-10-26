<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\User;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index()
    {
        $orders = Order::all();
        return response()->json($orders);
    }
    public function addToCart(Request $request)
    {
        

        // Process the menuId, for example, save it to the database or perform other actions

        // Return a response, e.g., JSON response
        return response()->json(['message' => 'Order received successfully'], 201);
    }
}
