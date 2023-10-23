<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Illuminate\Http\Request;

class MenuController extends Controller
{
    public function index()
    {
        $menus = Menu::all();
        return response()->json($menus);
    }

    public function deleteModel($id)
    {
     // Use Eloquent to find and delete the model by its ID
        Menu::destroy($id);
        return response()->json(['message' => 'Model deleted successfully']);
        //return ['result' => 'has ben deleted' . $id];
    }

    public function edit(Request $request, $id)
    {
        try {
            // Find the menu item by its ID
            $menu = Menu::findOrFail($id);
            
            error_log("Test");
            // Update the menu item's attributes based on the request data
            //$menu->name_menu = $request->input('name_menu');
            $menu->name_menu = $request->input('name_menu');
            // Update other attributes as needed

            // Save the changes
            $menu->save();

            // You can return a success response, if needed
            return response()->json(['message' => 'Menu item updated successfully']);
        } catch (\Exception $e) {
            // Handle any exceptions or errors
            return response()->json(['error' => 'Failed to update menu item'], 500);
        }
    }
}
