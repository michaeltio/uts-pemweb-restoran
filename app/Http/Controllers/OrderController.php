<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use App\Models\Order;
use App\Models\User;
use Illuminate\Http\Request;
use PhpParser\Node\Stmt\TryCatch;

class OrderController extends Controller
{
    public function getAllOrderFromId($id)
    {
        $orders = Order::where('user_id', $id)->get();
        return response()->json($orders);
    }

    public function addToCart(Request $request)
    {
        try {
            //buat row baru di tabel order
            $orderTable = new Order();
            //untuk nyari id makanan
            $menuId = $request->input('menu_id');
            $resultMenu = Menu::find($menuId);

            $orderTable->user_id = $request->input('user_id');
            $orderTable->name_menu = $resultMenu->name_menu;
            $orderTable->price = $resultMenu->price;
            $orderTable->img_menu = $resultMenu->img_menu;

            $orderTable->save();
            return response()->json(['user id & menu id' => $request->input('user_id') . " " .  $request->input('menu_id')]);
        } catch (\Exception $e) {
            return response()->json(['error' => 'error to add to cart']);
        }

        // Process the menuId, for example, save it to the database or perform other actions

        // Return a response, e.g., JSON response
        return response()->json(['message' => 'Order received successfully'], 201);
    }

    public function clearCart($id)
    {
        try {
            Order::where('user_id', $id)->delete();

            return response()->json(['message' => 'Succesful']);
        } catch (\Exception $th) {
            return response()->json(['error' => 'Failed to Delete']);
        }
    }
}
