<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory;
    protected $fillable = ['name_menu', 'price', 'desc_menu', 'type_menu', 'img_menu'];

    protected $attributes = [
        'desc_menu' => 'Menu Baru', // Replace 'default_image.jpg' with your default image path
        'type_menu' => 'Menu Baru', // Replace 'default_image.jpg' with your default image path
        'img_menu' => 'DEFAULT_MENU.webp', // Replace 'default_image.jpg' with your default image path
    ];
}
