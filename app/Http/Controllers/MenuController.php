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

    public function store(Request $request)
    {
        $request->validate([
            'name_menu' => 'required|string',
            'price' => 'required|numeric',
            'desc_menu' => 'string',
            'img_menu' => 'file|image|max:2048', // Adjust image validation rules as needed
            'type_menu' => 'string',
        ]);

        $menu = new Menu;
        $menu->name_menu = $request->input('name_menu');
        $menu->price = $request->input('price');
        $menu->desc_menu = $request->input('desc_menu');
        $menu->type_menu = $request->input('type_menu');

        //Handle menu_image upload
        if ($request->hasFile('menu_image')) {
            $imagePath = $request->file('menu_image')->store('menu_images');
            $menu->menu_image = $imagePath;
        }

        $menu->save();

        return response()->json(['message' => 'Menu created successfully'], 201);
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
            $menu = Menu::find($id);

            if (!$menu) {
                return response()->json(['error' => 'Menu not found'], 404);
            }
            // Update the menu item's attributes based on the request data
            $menu->name_menu = $request->input('name_menu');
            $menu->price = $request->input('price');
            $menu->desc_menu = $request->input('desc_menu');
            $menu->img_menu = $request->input('img_menu');
            $menu->type_menu = $request->input('type_menu');

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
