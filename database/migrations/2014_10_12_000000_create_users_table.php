<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('firstName');
            $table->string('lastName')->nullable();
            $table->date('birthdate');
            $table->string('gender');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
            $table->boolean('isAdmin')->default(false);
        });

        $admin = new User();
        $admin->setAttribute('firstName', 'admin');
        $admin->setAttribute('lastName', 'admin');
        $admin->setAttribute('birthdate', '2000-01-01');
        $admin->setAttribute('gender', 'Male');
        $admin->setAttribute('email', 'admin@example.com');
        $admin->setAttribute('password', Hash::make('password'));
        $admin->setAttribute('isAdmin', true);
        $admin->save();
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
