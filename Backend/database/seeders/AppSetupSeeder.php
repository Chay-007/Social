<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\setup\AppSetup;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use DB;


class AppSetupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */

    public function run()
    {
         $user = AppSetup::create([
            'language_id'       => 1,
            'currency_id'        => 1,
            'razar_pay_key'      => '',
            'razar_pay_auth'     => '',
        ]);

    }
}
