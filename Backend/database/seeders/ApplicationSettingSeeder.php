<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ApplicationSetting;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use DB;

class ApplicationSettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         $user = ApplicationSetting::create([
            'no_of_booking'      => 1,
            'recharge_amount'    => 500,
            'razer_pay_key'      => 'affixcity',
            'razer_pay_auth_key' =>'affixcity',
        ]);
    }
}
