<?php

namespace App\Http\Controllers\API\Home;

#Model

use App\Models\User;
use App\Models\Friend;
use App\Models\ChatImages;
use App\Models\UserProfile;
use App\Models\UserInterests;
use App\Models\UserChatImages;
use App\Models\NotificationSetting;

#Other Class
use DB;
use OTP;
use Mail;
use Session;
use Validator;
use Socialite;
use Carbon\Carbon;
use Google_Client;
use Illuminate\Support\Arr;
use Illuminate\Http\Request;
use App\Traits\FirebaseTraits;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\API\BaseController as BaseController;
use Illuminate\Support\Facades\Http;


class SocialLoginController extends BaseController
{
    use FirebaseTraits;

    #Bind User model
    protected $user;
    
    #Bind Friend model
    protected $friend;

    #Bind UserProfile model
    protected $userProfile;

    #Bind UserInterests model
    protected $userInterest;
    /**
     * Defining the default constructor for controller
     *
     */
    public function __construct(
        User                     $user,
        Friend                   $friend,
        ChatImages               $chatImages,
        UserProfile              $userProfile,
        UserInterests            $userInterest,
        UserChatImages           $userChatImages,
        NotificationSetting      $notificationSetting
    ) {

        $this->user                         = $user;
        $this->friend                       = $friend;
        $this->chatImages                   = $chatImages;
        $this->userProfile                  = $userProfile;
        $this->userInterest                 = $userInterest;
        $this->userChatImages               = $userChatImages;
        $this->notificationSetting          = $notificationSetting;
    }

    public function socialLogin(Request $request)
    { 
        try {
            $validator = Validator::make($request->all(), [
                'name'          => 'required',
                'email'         => 'required|email|unique:users,email',
                'device_key'    => 'required',
            ]);

            if ($validator->fails()) {
                return $this->sendError('Validation Error.', $validator->messages());
            }

            $checkuser = $this->user->where('email', $request->email)->first();
            if (isset($checkuser->id)) {
            }else{
                $data = [
                    'name'                  => $request->name,
                    'email'                 => $request->email,
                    'type'                  => 'customer',
                    'password'              => Hash::make('123456'),
                    'status'                => '1',
                ];
                $checkuser = $this->user->create($data);
                $datas = [
                    'user_id'   => $checkuser->id,
                ];
                $this->notificationSetting->create($datas);
            }        
            $user = $this->user->where('id', $checkuser->id)->first();
            $device = $this->user->where('id', $user->id)->first();
            if (isset($request->device_key)) {
                $device->device_key = $request->device_key;
                $device->save();
            }
            $success['user'] = $user->id;
            $success['token']   =  $user->createToken('MyApp')->accessToken;
            $success['noti'] = $this->notification("Login",'You Are Successfully Logged In!', $user->id);
            
            return $this->sendResponse($success, 'Login successfully.'); 
           
        } catch (\Exception $ex) {
            return $this->sendError($ex, 'Error');
        }
    }

    public function bloodGroup(Request $request)
    { 
        try {            
            $customBloodGroups = ['A+', 'AB+', 'B-', 'O+', 'A-', 'AB-', 'B+', 'O-'];
            $success['list'] = $customBloodGroups;    
            return $this->sendResponse($success, 'Blood Group Get successfully.');
        } catch (\Exception $ex) {
            return $this->sendError($ex, 'Error');
        }
    }

    public function gender(Request $request)
    {
        try {
            $customGender = ['male', 'female'];
            $success['list'] = $customGender;
            return $this->sendResponse($success, 'Gender Get successfully.');
        } catch (\Exception $ex) {
            return $this->sendError($ex, 'Error');
        }
    }
    public function chatimage(Request $request) {
        try {
            foreach ($request->image as $key => $value) {
                $unique = substr(str_shuffle("0123456789"), 0, 4);
                $data = [
                    'file'          => isset($value) ? fileUploadProfile('admin/home/chatImage', $value, $unique) : '',
                    'community_id'  => $request->community_id,
                ];
                $success = $this->chatImages->create($data);
                return $this->sendResponse($success, 'Image Get successfully.');
            }
        } catch (\Exception $ex) {
            return $this->sendError($ex, 'Error');
        }
    }
    public function userFriends(Request $request){
            // try {
                

                
                $myFriends = $this->friend->where(function ($query) {$query->where('send_to', Auth::id())->orWhere('send_by', Auth::id());})->where('friends_status', 1)->paginate(20);
                
                $myFriendsArray = [];
                foreach ($myFriends as $key => $value) {
                    if ($value->send_to != Auth::id()) {
                        $value->load(['sendto.userProfile']);
                        $myFriendsArray[] = $value->sendto;
                    }elseif ($value->send_by != Auth::id()) {
                        $value->load(['user.userProfile']);
                        $myFriendsArray[] = $value->user;
                    }
                }
                $mutualFriends = [];
                foreach ($myFriendsArray as $id) {
                    $myFriendsfriend = $this->friend->where(function ($query) use ($id) {$query->where('send_to', $id->id)->orWhere('send_by',  $id->id);})->where('friends_status', 1)->get();

                    $temp = [];
                    
                    foreach ($myFriendsfriend as $key => $value) {
                        $value->load(['sendto.userProfile', 'user.userProfile']);
                    
                        if (in_array( $value->sendto && $value->sendto->id, $myFriendsArray) && $value->sendto->id !=  $id->id && $value->sendto->id != Auth::id()) {
                            $temp[] = $value->sendto;
                        }

                        if (in_array( $value->user && $value->user->id, $myFriendsArray) && $value->user->id !=  $id->id && $value->user->id != Auth::id()) {
                            $temp[] = $value->user;
                        }
                    }
                
                    $data[] = [
                        'friend'                    => $id,
                        'mutual_friends'            => $temp,
                        'mutual_friends_count'      => count($temp)
                    ];
                    
                }

                return $this->sendResponse($data, 'Friends Get successfully.');
            // } catch (\Exception $ex) {
            //     return $this->sendError($ex, 'Error');
            // }
    }
    public function otherFriend(Request $request) {
        // try {
            $validator = Validator::make($request->all(), [
                'user_id'          => 'required',
            ]);

            if ($validator->fails()) {
                return $this->sendError('Validation Error.', $validator->messages());
            }
            // $success = $this->friend->where('friends_status', 1)->where('send_to', $request->user_id)->orWhere('send_by', $request->user_id)->paginate(10);
            $success = $this->friend->where(function ($query) use($request) {$query->where('send_to', $request->user_id)->orWhere('send_by', $request->user_id);})->where('friends_status', '=', 1)->paginate(10);
            foreach ($success as $friend) {
                if ($friend->send_to != $request->user_id) {
                    $relationName =['sendto','sendto.userProfile'];
                    $friend->load($relationName);
                }
                if ($friend->send_by != $request->user_id) {
                    $relationName = ['user','user.userProfile'];
                    $friend->load($relationName);
                }
            }
            return $this->sendResponse($success, 'Friends Get successfully.');

        // } catch (\Exception $ex) {
        //     return $this->sendError($ex, 'Error');
        // }
    }
    public function verifyGoogleToken(Request $request)
    {
        // require_once 'vendor/autoload.php';
        $client = new Google_Client(['client_id' => '939140522609-t73fkq4eojim75umri9p1duif0nmv5uo.apps.googleusercontent.com']);
        DB::beginTransaction();
        // try {
            $payload = $client->verifyIdToken($request->token);

            $checkuserss = $this->user->where('email', $payload['email'])->first();
            if (isset($checkuserss->id)) {
               
            }else{
                $data = [
                    'name'                  => $payload['name'],
                    'email'                 => $payload['email'],
                    'type'                  => 'customer',
                    'password'              => Hash::make('123456'),
                    'status'                => '1',
                ];
                $checkuserss = $this->user->create($data);
                $profile = [
                        'user_id' =>$checkuserss->id,
                    ];
                $this->userProfile->create($profile);
                $datas = [
                    'user_id'   => $checkuserss->id,
                ];
                $this->notificationSetting->create($datas);
               
            }        
            $user = $this->user->where('id', $checkuserss->id)->first();
            $device = $this->user->where('id', $user->id)->first();
            if (isset($request->device_key)) {
                $device->device_key = $request->device_key;
                $device->save();
            }
            $success['user'] = $user->id;
            $success['token']   =  $user->createToken('MyApp')->accessToken;
            DB::commit();
            return $this->sendResponse($success, 'Login successfully.');
            DB::rollback();
        // } catch (\Exception $e) {
        //     return $this->sendError($e, 'Error');
        // }
    }
    public function verifyFacebookToken(Request $request)
    {
        // try {
            $response = Socialite::driver('facebook')->userFromToken($request->token);
            $userId = $response->getId();
            $name = $response->getName();
            $email = $response->getEmail();
            $avatar = $response->getAvatar();
            $user = [
                'id' => $userId,
                'name' => $name,
                'email' => $email,
                'avatar' => $avatar,
            ];
            // Token is valid on the server side

            $checkuserss = $this->user->where('social_login_id', $user['id'])->first();
                if (isset($checkuserss->id)) {
                }else{
                    $data = [
                        'name'                  => $user['name'],
                        'email'                 => isset($user['email']) ? $user['email'] : '',
                        'type'                  => 'customer',
                        'social_login_id'       => $user['id'],
                        'password'              => Hash::make('123456'),
                        'status'                => '1',
                    ];
                    $checkuser = $this->user->create($data);
                    $profile = [
                        'user_id' => $checkuserss->id,
                    ];
                    $this->userProfile->create($profile);
                    $datas = [
                        'user_id'   => $checkuser->id,
                    ];
                    $this->notificationSetting->create($datas);
                
                }        
                $user = $this->user->where('id', $checkuser->id)->first();
                $device = $this->user->where('id', $user->id)->first();
                if (isset($request->device_key)) {
                    $device->device_key = $request->device_key;
                    $device->save();
                }
                $success['user'] = $user->id;
                $success['token']   =  $user->createToken('MyApp')->accessToken;
                return $this->sendResponse($success, 'Login successfully.');
        // } catch (\Exception $e) {
        //     return $this->sendError($e, 'Error');
        // }
    }
    public function userChatImages(Request $request){
        try{
            $validator = Validator::make($request->all(), [
                'image'          => 'required',
            ]);

            if ($validator->fails()) {
                return $this->sendError('Validation Error.', $validator->messages());
            }
            $success = [];
            foreach ($request->image as $key => $value) {
                $unique = substr(str_shuffle("0123456789"), 0, 4);
                $data =[
                        'image' => isset($value) ? fileUploadProfile('admin/home/chatImage', $value, $unique) : '',
                ];
                $createdRecord = $this->userChatImages->create($data);
                $success[] = $createdRecord;
            }
            return $this->sendResponse($success, 'Login successfully.');
        } catch (\Exception $e) {
            return $this->sendError($e, 'Error');
        }
    }


}
