<?php
  
namespace App\Traits;
# Models
use App\Models\User;
# Other Class
use Kreait\Firebase;
use Kreait\Firebase\Factory;
use Kreait\Firebase\Database;
use Kreait\Firebase\ServiceAccount;
use Illuminate\Support\Facades\Auth;

trait FirebaseTraits {
   function notification($title , $body,$user_id,$additionalParams = []){
            $id       = $additionalParams['id'] ?? null;
            $type     = $additionalParams['type'] ?? null;
            $subType     = $additionalParams['subType'] ?? null;
            $community_id     = $additionalParams['community_id'] ?? null;
            $MyID     = $additionalParams['MyID'] ?? null;
            $url = 'https://fcm.googleapis.com/fcm/send';
            $FcmToken = User::whereId($user_id)->pluck('device_key')->all();
              
            $serverKey = 'AAAA2qkjInE:APA91bHpLpT88ywCVZFafl5iBjDrZ14Zt9Q0kfcm8T9u4DfbnK_XejMcrEXhamVOdScVoqyotKUMG4igm-73k6rzFt5KZoIQ7CXG-pmDMAP1XsMHXZEV9p4bfMaiSU0hlNw1eMZkwADM';
      
            $data = [
                "registration_ids" => $FcmToken,
                "notification" => [
                    "title" => $title,
                    "body" => $body,  
                ],
                "data" => [
                  "id"                      => $id,
                  "type"                    => $type,
                  'MyID'                    => $MyID,
                  'subType'                 => $subType,
                  'community_id'            => $community_id,
                ],
            ];
            $encodedData = json_encode($data);
        
            $headers = [
                'Authorization:key=' . $serverKey,
                'Content-Type: application/json',
            ];
        
            $ch = curl_init();
          
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
            curl_setopt($ch, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1);
            // Disabling SSL Certificate support temporarly
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);        
            curl_setopt($ch, CURLOPT_POSTFIELDS, $encodedData);

            // Execute post
            $result = curl_exec($ch);
            // dd($result);
            if ($result) {
                return true;
            } else{
              return false;
            }
    }

   function customerBooking($url,$data){
         $firebase         = (new Factory)->withServiceAccount(__DIR__.'/vanam.json')->withDatabaseUri('https://affixcity-a158a-default-rtdb.asia-southeast1.firebasedatabase.app/');
        $database       = $firebase->createDatabase();
        $newPost          = $database->getReference($url)->set($data);
   }
    function customerBookingStatus($url,$data){
         $firebase         = (new Factory)->withServiceAccount(__DIR__.'/vanam.json')->withDatabaseUri('https://affixcity-a158a-default-rtdb.asia-southeast1.firebasedatabase.app/');
        $database       = $firebase->createDatabase();
        $newPost          = $database->getReference($url)->set($data);
   }

      function customerBookingStatusUpdate($url,$data){
         $firebase         = (new Factory)->withServiceAccount(__DIR__.'/vanam.json')->withDatabaseUri('https://affixcity-a158a-default-rtdb.asia-southeast1.firebasedatabase.app/');
        $database       = $firebase->createDatabase();
        $newPost          = $database->getReference($url)->update($data);
   }
    function customerBookingStatusDelete($url){
          $firebase         = (new Factory)->withServiceAccount(__DIR__.'/vanam.json')->withDatabaseUri('https://affixcity-a158a-default-rtdb.asia-southeast1.firebasedatabase.app/');
        $database       = $firebase->createDatabase();       
        $reference = $database->getReference($url);
        $snapshot = $reference->getSnapshot();
         $snapshot->getValue();
         $reference->remove();
   }
    function customerBookingStatusGet($url){
          $firebase         = (new Factory)->withServiceAccount(__DIR__.'/vanam.json')->withDatabaseUri('https://affixcity-a158a-default-rtdb.asia-southeast1.firebasedatabase.app/');
        $database       = $firebase->createDatabase();       
        $reference = $database->getReference($url);
        $snapshot = $reference->getSnapshot();
        return $snapshot->getValue();
   }
    function customerBookingDelete($url,$id){
          $firebase         = (new Factory)->withServiceAccount(__DIR__.'/vanam.json')->withDatabaseUri('https://affixcity-a158a-default-rtdb.asia-southeast1.firebasedatabase.app/');
        $database       = $firebase->createDatabase();       
        $reference = $database->getReference($url);
        $snapshot = $reference->getSnapshot();
         $snapshot->getValue();
         $reference->remove();
   }

   function customerBookingCheck($url,$id){
          $firebase         = (new Factory)->withServiceAccount(__DIR__.'/vanam.json')->withDatabaseUri('https://affixcity-a158a-default-rtdb.asia-southeast1.firebasedatabase.app/');
        $database       = $firebase->createDatabase();       
        $reference = $database->getReference($url);
        $snapshot = $reference->getSnapshot();
        return $snapshot->getValue();
   }

    function customerBookingUpdate($url,$data){
         $firebase         = (new Factory)->withServiceAccount(__DIR__.'/vanam.json')->withDatabaseUri('https://affixcity-a158a-default-rtdb.asia-southeast1.firebasedatabase.app/');
        $database       = $firebase->createDatabase();
        $newPost          = $database->getReference($url)->set($data);
   }
	
}