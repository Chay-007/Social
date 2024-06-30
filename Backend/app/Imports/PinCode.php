<?php

namespace App\Imports;

use App\Models\State;
use App\Models\City;
use App\Models\Pimcode;

# Other Classes
use DB;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Maatwebsite\Excel\Concerns\ToCollection;

class PinCode implements ToCollection
{
     public $data;
    /**
    * @param Collection $collection
    */
    public function collection(Collection $collection)
    {
      // dd($collection);
        #start Transcation
      
          try{
            
            foreach ($collection as $key=>$row) 
            { 
                if($key>0){
                   
                    $pincode = $row[0];
                    $cityname = $row[1];
                    $statename = $row[2];
                    $longitude = $row[3];
                    $latitude = $row[4];

                    $check = State::where('name','=',$statename)->first();
                    if($check){
                       $state_id = $check->id;
                    }else{
                         $data = [
                            'name'             => $statename,
                            'country_id'      => 1,
                            'user_id'          => 1,
                            ];
                           $states =  State::create($data);
                            $state_id = $states->id;
                    }
                     $checkc = City::where('name','=',$cityname)->first();
                    if($checkc){
                       $city_id = $checkc->id;
                    }else{
                        $data = [
                        'name'             => $cityname,
                        'country_id'      => 1,
                        'state_id'         => $state_id,
                        'user_id'          => Auth::id(),
                        'status'           => '1',
                        ];
                           $states =  City::create($data);
                            $city_id = $states->id;
                    }

                     $checkp = Pimcode::where('pincode','=',$pincode)->first();
                    if($checkp){
                   
                    }else{
                        $data = [
                            'pincode'          => $pincode,
                            'longitude'        => $longitude,
                            'latitude'         => $latitude,
                            'country_id'      => 1,
                            'state_id'         => $state_id,
                            'city_id'          => $city_id,
                            'user_id'          => Auth::id(),
                            'status'           => '1',
                        ];
                           Pimcode::create($data);
                            
                    }


                   
                } 
            }

           

        }catch(\Exception $ex)
        {
            toastr()->success($ex->getMessage());
            
        }
    }
}
