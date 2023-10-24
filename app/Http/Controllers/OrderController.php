<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\User;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function addToCart($userId, $menuId)
    {
        return response()->json(['message' => 'Add To Cart Sucessfully']);
    }
}
