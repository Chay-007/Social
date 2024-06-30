<?php

namespace App\Http\Controllers\API\Home;

#Model
use App\Models\User;
use App\Models\Posts;
use App\Models\Points;
use App\Models\Friend;
use App\Models\UserProfile;
use App\Models\UserInterests;
use App\Models\UserPostReview;
use App\Models\NotificationSetting;

#Other Class
use DB;
use OTP;
use Session;
use Validator;
use Carbon\Carbon;
use Illuminate\Support\Arr;
use Illuminate\Http\Request;
use App\Traits\FirebaseTraits;
use App\Mail\OrderShipped;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use App\Http\Controllers\API\BaseController as BaseController;
use Illuminate\Support\Facades\Http;


class FrontendUserController extends BaseController
{
    use FirebaseTraits;

    #Bind User model
    protected $user;

    #Bind UserProfile model
    protected $userProfile;

    #Bind UserInterests model
    protected $userInterest;
    /**
     * Defining the default constructor for controller
     *
     */
    public function __construct(
        User                        $user,
        Posts                       $posts,
        Points                      $points,
        Friend                      $friend,
        UserProfile                 $userProfile,
        UserInterests               $userInterest,
        UserPostReview              $userPostReview,
        NotificationSetting         $notificationSetting
    ) {

        $this->user                         = $user;
        $this->posts                        = $posts;
        $this->points                       = $points;
        $this->friend                       = $friend;
        $this->userProfile                  = $userProfile;
        $this->userInterest                 = $userInterest;
        $this->userPostReview               = $userPostReview;
        $this->notificationSetting          = $notificationSetting;
    }

    public function register(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'name'          => 'required',
                'email'         => 'required|email|unique:users,email',
                'password'      => 'required',
            ]);
            if ($validator->fails()) {
                return $this->sendError('Validation Error.', $validator->messages());
            }

            $checkuser = $this->user->where('email', $request->email)->first();
            if (!isset($checkuser->id)) {
                $data = [
                    'name'                  => $request->name,
                    'email'                 => $request->email,
                    'mobile_number'         => $request->mobile_number,
                    'type'                  => 'customer',
                    'password'              => Hash::make($request->password),
                    'status'                => '1',
                ];
                $checkuser = $this->user->create($data);
                if (Auth::attempt(['email' => $checkuser->email, 'password' => $request->password])) {
                    $user = Auth::user();
                    $device = $this->user->where('id', $user->id)->first();
                    if (isset($request->device_key)) {
                        $device->device_key = $request->device_key;
                        $device->save();
                    }
                    $datas = [
                        'user_id'   => $user->id,
                    ];
                    $this->notificationSetting->create($datas);
                    $success['user'] = $user->id;
                    $success['token']   =  $user->createToken('MyApp')->accessToken;
                    $success['noti'] = $this->notification(null,"Login",'You Are Successfully Logged In!', $user->id);
                }
               
                return $this->sendResponse($success, 'Login successfully.');
            } else {
                return $this->sendError('Error.', 'Email Already Taken');
            }
        } catch (\Exception $ex) {
            return $this->sendError($ex, 'Somthing Went wrong');
        }
    }


    #Customer login
    public function login(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'email'     => 'required',
                'password'  => 'required',
            ]);
            if ($validator->fails()) {
                return $this->sendError('Validation Error.', $validator->messages());
            }

            $checkuser = $this->user->where('email', $request->email)->first();
            if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {                
                $user = Auth::user();       
                $device = $this->user->where('id', $user->id)->first();        
                if (isset($device)) {
                    if (isset($request->device_key)) {
                        $device->device_key = $request->device_key;
                        $device->save();
                    }
                    $datas = [
                        'user_id'   => $user->id,
                    ];
                    $this->notificationSetting->create($datas);
                    $success['user'] = $user->id;
                    $success['token']   =  $user->createToken('MyApp')->accessToken;
                    $success['noti'] = $this->notification(null,"Login",'You Are Successfully Logged In!', $user->id);
                    return $this->sendResponse($success, 'Login successfully.');
                }else{
                    return $this->sendError('Error.', 'You cant login');
                }
            }else {
                return $this->sendError('Error.', 'Please Enter valid credential');
            }
        } catch (\Exception $ex) {
            return $this->sendError($ex, 'Error');
        }
    }


    public function sendOtpEmail(Request $request)
    {
        try {
            $checkuser = $this->user->where('email', $request->email)->first();

            if (isset($checkuser->email)) {
                $otp = $request->otp;
                $toEmail = $checkuser->email;
                
                    $subject = "Forget Password";
                    $response = Mail::to($toEmail)->send(new OrderShipped($subject,$otp));

                return $this->sendResponse('success.', $response);
            } else {
                return $this->sendError('success', 'Email not valid');
            }
        } catch (\Exception $ex) {
            return $this->sendError('Error.', 'Something Went wrong');
        }
    }

    
    public function forgetPassword(Request $request)
    { 
        // try {
            
            $validator = Validator::make($request->all(), [
                'email'         => 'required',
                'password'      => 'required',
                'c_password'    => 'required|same:password',
            ]);
            if ($validator->fails()) {
                return $this->sendError('Validation Error.', $validator->errors());
            }
            $checkuser = $this->user->where('email', $request->email)->first();
            
            if(isset($checkuser)){
                if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
                    return $this->sendError('Validation Error.', "The new password must not match the old one.");
                }else{
                    $success = $this->user->where('email', $request->email)->update(['password' => Hash::make($request->password)]);
                    return $this->sendResponse($success, 'Password Change Successfully.');
                }
                
            } else {
                return $this->sendError('Error.', 'Email is wrong');
            }
        // } catch (\Exception $ex) {
        //     return $this->sendError('Error.', 'Something is wrong');
        // }
    }

    public function editProfile(Request $request){ 
        DB::beginTransaction();
        try {
            $validator = Validator::make($request->all(), [
                'mobile_number' => 'required|digits:10|unique:users,mobile_number,'.Auth::user()->id,
                'email'         => 'required|email|unique:users,email,'.Auth::user()->id,
                'name'          => 'required',
                'dob'           => 'required',
                'gender'        => 'required',
                'linkedin'      => 'required',
                'education'     => 'required',
                'profession'    => 'required',
                'blood_group'   => 'required',
                'description'   => 'required',
            ]);
            if ($validator->fails()) {
                return $this->sendError('Validation Error.', $validator->errors());
            }
            $checkuser = $this->user->where('id', Auth::user()->id)->first();    
            if(isset($checkuser)){
                $checkuser->name            = $request->name;
                $checkuser->mobile_number   = $request->mobile_number;
                $checkuser->email           = $request->email;
                $checkuser->update();
            }
            $checkuser = $this->userProfile->where('user_id', Auth::user()->id)->first();
            $image = $request->file('image');
            $unique= substr(str_shuffle("0123456789"),0,4);
            if(isset($checkuser)){
                if (isset($request->image)) {
                    $checkuser->image   = isset($image) ? fileUploadProfile('public/admin/home/profile', $image,$unique) : 'public/img/noimageprofile.jpg';
                }
                $checkuser->dob             = $request->dob;
                $checkuser->gender          = $request->gender;
                $checkuser->linkedin        = $request->linkedin;
                $checkuser->education       = $request->education;
                $checkuser->profession      = $request->profession;
                $checkuser->blood_group     = $request->blood_group;
                $checkuser->description     = $request->description;
                $checkuser->update();
            }
            if (isset($request->interest_id)) {                
                $this->userInterest->where('user_id', Auth::user()->id)->delete();
                $interests = $request->interest_id;            
                foreach ($interests as $key => $interest) {
                    if ($interest != null) {
                        $interestData = [
                            'user_id'       => Auth::user()->id,
                            'interest_id'   => $interest,
                        ];
                        $this->userInterest->create($interestData);
                    }
                }
            }    
            DB::commit();
            return $this->sendResponse($checkuser, 'Profile Edit Successfully.');
        } catch (\Exception $ex) {
            DB::rollback();
            return $this->sendError('Error.', 'Something is wrong');
        }
    }

    public function userProfile(Request $request){ 
        DB::beginTransaction();
        // try {
            $validator = Validator::make($request->all(), [
                'dob'           => 'required',
                'gender'        => 'required',
                'education'     => 'required',
                'profession'    => 'required',
                'blood_group'   => 'required',
                'interest_id'   => 'required',
            ]);
            if ($validator->fails()) {
                return $this->sendError('Validation Error.', $validator->errors());
            }          
            $image = $request->file('image');
            $unique= substr(str_shuffle("0123456789"),0,4);
            $checkUser = $this->user->where('id', Auth::id())->first();
            $datasss = [
                'name' => $request->name,
            ];
            if (isset($datasss)) {
                $checkUsers = $checkUser->update($datasss);
            } else {
                $checkUsers = $this->user->create($datasss);
            }

            $check = $this->userProfile->where('user_id', Auth::id())->first();
            $data = [
                'user_id'               => Auth::user()->id,
                'dob'                   => $request->dob,
                'image'                 => isset($image) ? fileUploadProfile('admin/home/profile', $image, $unique) : (isset($check->image) ? $check->image : null),
                'gender'                => $request->gender,
                'linkedin'              => $request->linkedin,
                'education'             => $request->education,
                'profession'            => $request->profession,
                'blood_group'           => $request->blood_group,
                'description'           => $request->description,
            ];
            
            if (isset($check)) {
                $checkuser = $check->update($data);
            } else {
                $checkuser = $this->userProfile->create($data);
            }

            if (isset($request->interest_id)) {
                $this->userInterest->where('user_id', Auth::id())->forceDelete();
                $interests = $request->interest_id;            
                foreach ($interests as $key => $interest) {
                    if ($interest != null) {
                        $interestData = [
                            'user_id'       => Auth::user()->id,
                            'interest_id'   => $interest,
                        ];
                        $this->userInterest->create($interestData);
                    }
                }
            }    
            DB::commit();   
            return $this->sendResponse($checkuser, 'Profile Create Successfully.');
        // } catch (\Exception $ex) {
            DB::rollback();
        //     return $this->sendError('Error.', 'Something is wrong');
        // }
    }

    public function getProfile(Request $request)
    {
        try{  
            $posts = $this->posts->where('user_id',Auth::id())->where('post_master_id',4)->orWhere('post_master_id',3)->pluck('id'); 
            // $userPostReviewCount = $this->userPostReview->whereIn('posts_id',$posts)->count();
            // $pointsCount = $this->points->whereIn('posts_id',$posts)->count();
            // $success['points'] = $userPostReviewCount + $pointsCount;
            $relationss = ['points', 'reviews'];
            $checkposts = $this->posts->withCount($relationss)->where('user_id', Auth::id())->get();
            $totalPointsCount = 0;
            $totalReviewsCount = 0;

            foreach ($checkposts as $post) {
                $totalPointsCount += $post->points_count;
                $totalReviewsCount += $post->reviews_count;
            }

            $success['points'] = $totalPointsCount + $totalReviewsCount;
            $success['friend_count'] = $this->friend->where('friends_status',1)->where('send_by',Auth::id())->orWhere('send_to',Auth::id())->count();
            $relations = ['userProfile'];
            $success['friends'] = $this->friend->with($relations)->where('friends_status',1)->where('send_by',Auth::id())->orWhere('send_to',Auth::id())->take(3)->get();;
            $relation = ['userProfile','interest.interest'];             
            $success['list']= $this->user->with($relation)->where('id',Auth::user()->id)->get();

            return $this->sendResponse($success, 'Profile Get successfully.');
        } catch (\Exception $ex) {
            return $this->sendError('Error.', 'Something Wrong');
        }
    }

    public function logOut(Request $request){
        try {
            $user_id = Auth::id();
            if (isset($user_id)) {
                $checkuser = User::where('id',$user_id)->first();
                $checkuser->device_key = null;
                $checkuser->update();
                return $this->sendResponse($checkuser, 'User logout successfully');
            } 
        } catch (\Exception $ex) {
            return $this->sendError('Error.', 'Something is wrong');
        }       
    }

    public function checkLogin(Request $request)
    {
        try {
            if (isset(auth('api')->user()->id)) {
                $success['status'] = true;
            } else {
                $success['status'] = false;
            }
           
            return $this->sendResponse($success, 'token checked.');
        } catch (\Exception $ex) {
            return $this->sendError('Error.', 'Something is wrong');
        }
    }
    public function getusers(Request $request){
        try {
            $success = $this->user->where('id','!=',Auth::id())->where('id','!=',1)->get();
            return $this->sendResponse($success, 'token checked.');
        } catch (\Exception $ex) {
            return $this->sendError('Error.', 'Something is wrong');
        }
    }
    public function notiSetting(Request $request) {
        // try {

            $validator = Validator::make($request->all(), [
                'type' => 'required',
            ]);
            
            if ($validator->fails()) {
                return $this->sendError('Validation Error.', $validator->errors());
            }
            
            $check = $this->notificationSetting->where('user_id', Auth::id())->first();
            
            if (!$check) {
                // Handle the case where the record is not found.
                return $this->sendError('Notification settings not found for the user.');
            }
            
            if ($request->type == 'friend') {
                $check->friend_request_notification = $check->friend_request_notification == 1 ? 0 : 1;
            }
            
            if ($request->type == 'post') {
                $check->post_notification = $check->post_notification == 1 ? 0 : 1;
            }
            
            if ($request->type == 'like') {
                $check->like_notification = $check->like_notification == 1 ? 0 : 1;
            }
            
            if ($request->type == 'community') {
                $check->addInto_community_notification = $check->addInto_community_notification == 1 ? 0 : 1;
            }
            
            $check->save();
            
            return $this->sendResponse($check, 'Notification Updated');
            
        // } catch (\Exception $ex) {
        //     return $this->sendError('Error.', 'Something is wrong');
        // }
        
    }
    public function getnotiSetting(Request $request) {

        $success = $this->notificationSetting->where('user_id',Auth::id())->first();
        return $this->sendResponse($success, 'Notification Updated');
    }
}
