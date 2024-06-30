<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use DB;

class CustomerUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

         $user = User::create([
            'name' => 'vesta',
            'email' => 'gk@gmail.com',
            'mobile_number' => 9718577930,
            'password' => bcrypt('vesta@123'),
        ]);
         $user = User::create([
            'name' => 'vesta',
            'email' => 'gk1@gmail.com',
            'mobile_number' => 9718577931,
            'password' => bcrypt('vesta@123'),
        ]);
         $user = User::create([
            'name' => 'vesta',
            'email' => 'gk2@gmail.com',
            'mobile_number' => 9718577932,
            'password' => bcrypt('vesta@123'),
        ]);
         $user = User::create([
            'name' => 'vesta',
            'email' => 'gk3@gmail.com',
            'mobile_number' => 9718577933,
            'password' => bcrypt('vesta@123'),
        ]);
         $user = User::create([
            'name' => 'vesta',
            'email' => 'gk4@gmail.com',
            'mobile_number' => 9718577934,
            'password' => bcrypt('vesta@123'),
        ]);
         $user = User::create([
            'name' => 'vesta',
            'email' => 'gk5@gmail.com',
            'mobile_number' => 9718577939,
            'password' => bcrypt('vesta@123'),
        ]);
         $user = User::create([
            'name' => 'vesta',
            'email' => 'gk6@gmail.com',
            'mobile_number' => 9718577936,
            'password' => bcrypt('vesta@123'),
        ]);
         $user = User::create([
            'name' => 'vesta',
            'email' => 'gk7@gmail.com',
            'mobile_number' => 9718577937,
            'password' => bcrypt('vesta@123'),
        ]);
        
    }
}
