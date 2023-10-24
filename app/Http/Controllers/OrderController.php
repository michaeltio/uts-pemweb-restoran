<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\User;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function addToCart(Request $request)
    {
        $menuId = $request->input('menuId');

        // Process the menuId, for example, save it to the database or perform other actions

        // Return a response, e.g., JSON response
        return response()->json(['message' => 'Order received successfully'], 201);
    }
}
