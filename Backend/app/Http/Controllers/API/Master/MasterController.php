<?php

namespace App\Http\Controllers\API\Master;

# Models
use App\Models\User;
use App\Models\Share;
use App\Models\Likes;
use App\Models\Friend;
use App\Models\Posts;
use App\Models\Repost;
use App\Models\Points;
use App\Models\Comments;
use App\Models\SavedPost;
use App\Models\Interests;
use App\Models\UserSerach;
use App\Models\ReportPost;
use App\Models\UserProfile;
use App\Models\WhereToPost;
use App\Models\Notification;
use App\Models\FriendStatus; 
use App\Models\FavouriteChat; 
use App\Models\PreviousChat; 
use App\Models\UserPostReview;
use App\Models\NotificationSetting;
use App\Models\UserMuteNotification;

# Other Classes
use DB;
use Validator;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Traits\QueryTraits;
use App\Traits\FirebaseTraits;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Arr;
use App\Http\Controllers\API\BaseController as BaseController;

class MasterController extends BaseController
{
    use QueryTraits;

    use FirebaseTraits;

    #Bind user model
    protected $user;
    
    #Bind Interests model
    protected $interest;
    
    #Bind WhereToPost model
    protected $whereToPost;
    
    #Bind User Profile model
    protected $userProfile;

    /**
      * Defining the default constructor for controller
      *
      */
    public function __construct(
        User                     $user,
        Likes                    $likes,
        Share                    $share,
        Points                   $points,
        Posts                    $posts,
        Friend                   $friend,
        Repost                   $repost,
        Comments                 $comments,
        SavedPost                $savedPost,
        Interests                $interest,
        WhereToPost              $whereToPost,
        ReportPost               $reportPost,
        UserProfile              $userProfile,
        UserSerach               $userSerach,
        Notification             $notification,
        UserPostReview           $userPostReview,
        FriendStatus             $friendStatus,
        PreviousChat             $previousChat,
        FavouriteChat            $favouriteChat,
        NotificationSetting      $notificationSetting,
        UserMuteNotification     $userMuteNotification
        )
    {
        $this->user                  = $user;
        $this->likes                 = $likes;
        $this->share                 = $share;
        $this->posts                 = $posts;
        $this->points                = $points;
        $this->friend                = $friend;
        $this->repost                = $repost;
        $this->comments              = $comments;
        $this->savedPost             = $savedPost;
        $this->reportPost            = $reportPost;
        $this->interest              = $interest;
        $this->whereToPost           = $whereToPost;
        $this->userProfile           = $userProfile;
        $this->userSerach            = $userSerach;
        $this->friendStatus          = $friendStatus;
        $this->notification          = $notification;
        $this->previousChat          = $previousChat;
        $this->favouriteChat         = $favouriteChat;
        $this->userPostReview        = $userPostReview;
        $this->notificationSetting   = $notificationSetting;
        $this->userMuteNotification  = $userMuteNotification;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function intrest(Request $request)
    {
        try{

            $success['list']   = $this->interest->where('status',1)->get();

            return $this->sendResponse($success, 'Interest Get successfully.');
           
        }catch(\Exception $ex)
        {
            return $this->sendError('Validation Error.', 'Something Wrong'); 
        }
    }
    
    public function tag(Request $request)
    {
        try{
            $validate = Validator::make($request->all(), [               
                'name'         => 'required|unique:interests,name',           
            ]);
            if($validate->fails()){
                return $this->sendError('Validation Error.', $validate->messages());
            }
            $data = [
                'name'          => $request->name,
                'status'        => 1,
            ];
            $success['list'] = $this->interest->create($data);
            return $this->sendResponse($success, 'Tag Saved successfully.'); 
        }catch(\Exception $ex)
        {
            return $this->sendError('Validation Error.', 'Something Wrong'); 
        }
    }

    public function category(Request $request)
    {
        try{
            $category = ['survey', 'poll', 'review', 'seek'];
            $success['list']   = $category;
            return $this->sendResponse($success, 'Category Get successfully.');           
        }catch(\Exception $ex)
        {
            return $this->sendError('Validation Error.', 'Something Wrong'); 
        }
    }
    public function wherePost(Request $request)
    {
        try{
            $whereToPost = $this->whereToPost->where('status',1);
            if($request->type == 'home'){
                $whereToPost->whereNotIn('id', [7, 3]);
            }
            $success['list']   = $whereToPost->get();
            return $this->sendResponse($success, 'Where Post Get successfully.');           
        }catch(\Exception $ex)
        {
            return $this->sendError('Validation Error.', 'Something Wrong'); 
        }
    }
    public function getallUser(Request $request)
    {
        try{
            $users = $this->user->where('id','!=',Auth::id())->where('created_at', '<>', null);
            if (isset($request->search_name)) {
                $users->where('name', 'LIKE', '%' . $request->search_name . '%');
            }
            $relation = ['userProfile'];
            $success['list']   = $users->with($relation)->orderBy('id', 'DESC')->paginate(20);
            return $this->sendResponse($success, 'Users Get successfully.');           
        }catch(\Exception $ex)
        {
            return $this->sendError('Validation Error.', 'Something Wrong'); 
        }
    }
    
    public function location(Request $request)
    {
        try{
            $validate = Validator::make($request->all(), [               
                'lat'           => 'required',
                'long'          => 'required',
            ]);
            if($validate->fails()){
                return $this->sendError('Validation Error.', $validate->messages());
            }
            $check = $this->userProfile->where('user_id',Auth::id())->first();
            if (isset($check)) {
                $check->lat     = $request->lat;
                $check->long    = $request->long;
                $check->save();
            }else{
                return $this->sendError('Validation Error.', 'User Profile Not Created');
            }           
            return $this->sendResponse($check, 'Data save successfully.');           
        }catch(\Exception $ex)
        {
            return $this->sendError('Validation Error.', 'Something Wrong'); 
        }
    }
    public function chatNear(Request $request){
        $distance = 0.5;
        $relation = ['userProfile'];
        $currentUser = $this->user->with($relation)->where('id', Auth::id())->first();
        $currentLatitude = $currentUser->userProfile->lat ?? '';
        $currentLongitude = $currentUser->userProfile->long ?? '';
        $rel = ['user', 'userIntrests.interest', 'userFav' => function ($query) {
            $query->where('user_id', Auth::id());
        }];
        
        // Calculate the date for the 24-hour check
        $twentyFourHoursAgo = Carbon::now()->subHours(24);
        $userId = Auth::id();
        
        // Fetch recent chats with current user
        $success = $this->previousChat->where(function ($query) use ($twentyFourHoursAgo, $userId) {
            $query->where('created_at', '>', $twentyFourHoursAgo)->where('user_id', $userId);
        })->orWhere('chat_with', $userId)->orderBy('created_at', 'desc')->get();

        $userIds = $success->map(function ($chat) use ($userId) {
                        return $chat->user_id == $userId ? $chat->chat_with : $chat->user_id;
                    })->unique()->all();
        
        // User profiles query with conditional distance calculation
        $users = UserProfile::with($rel)
            ->whereHas('user', function ($q) use ($request) {
                $q->when(isset($request->name), function ($query) use ($request) {
                    $query->where('name', 'LIKE', '%' . $request->name . '%');
                });
            })
            ->where('user_id', '!=', $userId)
            ->select('*')
            ->addSelect(\DB::raw(
                '(6371 * acos(cos(radians(' . $currentLatitude . ')) * cos(radians(lat)) * cos(radians(`long`) - radians(' . $currentLongitude . ')) + sin(radians(' . $currentLatitude . ')) * sin(radians(lat)))) AS distance'
            ))
            ->where(function($query) use ($userIds, $currentLatitude, $currentLongitude) {
                // Apply distance condition to users not in $userIds
                $query->whereNotIn('user_id', $userIds)
                      ->whereRaw('(6371 * acos(cos(radians(' . $currentLatitude . ')) * cos(radians(lat)) * cos(radians(`long`) - radians(' . $currentLongitude . ')) + sin(radians(' . $currentLatitude . ')) * sin(radians(lat)))) < 0.5');

                // Include users from $userIds without any distance condition
                $query->orWhereIn('user_id', $userIds);
            })
            ->orderBy('distance')->paginate(20);    
            return response()->json(['users' => $users]);



    }
    public function getaddress(Request $request){
        $apiEndpoint = 'https://maps.googleapis.com/maps/api/geocode/json';
        $apiKey = 'AIzaSyBORBBJbdy4aAlYE9tDrpYCaVikcZ7LQhE'; // Replace with your actual API key
        $requestUrl = "{$apiEndpoint}?latlng={$request->lat},{$request->long}&key={$apiKey}";
        $response = file_get_contents($requestUrl);
        $data = json_decode($response);
        $formattedAddress = $data->results[0]->formatted_address;
        return $formattedAddress;

    }
    public function  comment(Request $request){
        // try{
            $validate = Validator::make($request->all(), [               
                'posts_id'              => 'required',
            ]);
            if($validate->fails()){
                return $this->sendError('Validation Error.', $validate->messages());
            }
            $unique= substr(str_shuffle("0123456789"),0,4);
            $data = [
                'posts_id'  => $request->posts_id,
                'user_id'   => Auth::id(),
                'comment'   => $request->comment,
                'file'      => isset($request->file) ? fileUploadProfile('admin/home/profile', $request->file, $unique) : ''
            ];
            $success = $this->comments->create($data);
            $post = $this->posts->where('id',$request->posts_id)->first();
            $user = $this->user->where('id',Auth::id())->first();
            $body = $user->name.' Commented On Your Post';

            $chaeckss = $this->userMuteNotification->where('mute_by',$post->user_id)->where('muted_to',Auth::id())->first();
            if (!isset($chaeckss) && Auth::id() != $post->user_id) {
                $communityId              = NULL;
                $postId                   = $request->posts_id;
                $notificationType         = 'comment';
                $subtype                  = ($post->post_master_id == 1) ? 'Survey' : (($post->post_master_id == 2) ? 'poll' : 'recommend');
                $this->notificationStore($post->user_id,Auth::id(),$communityId,Auth::id(),$postId,$body,$notificationType,$subtype);
            }
            if (!isset($chaeckss)) {
                $success['noti'] = $this->notification("Comment !",$body, $post->user_id,['type'=>'comment','id'=>$request->posts_id,'subType' => ($post->post_master_id == 1) ? 'products' : (($post->post_master_id == 2) ? 'poll' : 'recommend')]);
            }
            return $this->sendResponse($success, 'Data save successfully.');
        // }catch(\Exception $ex)
        // {
        //     return $this->sendError('Validation Error.', 'Something Wrong'); 
        // }
        
    }
    public function  like(Request $request){
        try {
            $validate = Validator::make($request->all(), [               
                'posts_id' => 'required',
            ]);
        
            if ($validate->fails()) {
                return $this->sendError('Validation Error.', $validate->messages());
            }
        
            $check = $this->likes->where('posts_id', $request->posts_id)->where('user_id', Auth::id())->get();        
            if ($check->isNotEmpty()) {
                foreach ($check as $value) {
                    $value->delete();
                }
                return $this->sendResponse('Message', 'Data saved successfully.');
            } else {
                $data = [
                    'posts_id' => $request->posts_id,
                    'user_id'  => Auth::id(),
                ];
        
                $success        = $this->likes->create($data);
                $post           = $this->posts->where('id',$request->posts_id)->first();
                $user           = $this->user->where('id',Auth::id())->first();
                $checknoti      = $this->notificationSetting->where('user_id',$post->user_id)->first();
                $body           = $user->name.' Liked Your Post';

                $chaeckss = $this->userMuteNotification->where('mute_by',$post->user_id)->where('muted_to',Auth::id())->first();
                if (!isset($chaeckss) && Auth::id() != $post->user_id) {
                    $communityId              = NULL;
                    $postId                   = $request->posts_id;
                    $notificationType         = 'Like';
                    $subtype                  = NULL;
                    $this->notificationStore($post->user_id,Auth::id(),$communityId,Auth::id(),$postId,$body,$notificationType,$subtype);
                }

                if ($checknoti->like_notification == 1 && Auth::id() != $post->user_id && !isset($chaeckss)) {
                    $success['noti'] = $this->notification("Like !",$body, $post->user_id);
                }                
                return $this->sendResponse($success, 'Data saved successfully.');
            }
        } catch (\Exception $ex) {
            return $this->sendError('Error', 'Something went wrong.');
        }
        
    }
    public function  share(Request $request){
        try{
            $validate = Validator::make($request->all(), [               
                'posts_id'           => 'required',
            ]);
            if($validate->fails()){
                return $this->sendError('Validation Error.', $validate->messages());
            }
            $data = [
                'posts_id'  => $request->posts_id,
                'user_id'   => Auth::id(),
            ];
            $success = $this->share->create($data);
            return $this->sendResponse($success, 'Data save successfully.');
        }catch(\Exception $ex)
        {
            return $this->sendError('Validation Error.', 'Something Wrong'); 
        }
    }
    public function points(Request $request){
        try {
            $validate = Validator::make($request->all(), [               
                'posts_id' => 'required',
            ]);
        
            if ($validate->fails()) {
                return $this->sendError('Validation Error.', $validate->messages());
            }
        
            $check = $this->points->where('posts_id', $request->posts_id)->where('user_id', Auth::id())->get();        
            if ($check->isNotEmpty()) {
                foreach ($check as $value) {
                    $value->delete();
                }
                return $this->sendResponse('Message', 'Data saved successfully.');
            } else {
                $data = [
                    'posts_id' => $request->posts_id,
                    'user_id' => Auth::id(),
                ];
        
                $success = $this->points->create($data);
                $post = $this->posts->where('id',$request->posts_id)->first();
                $user = $this->user->where('id',Auth::id())->first();
                $checknoti      = $this->notificationSetting->where('user_id',$post->user_id)->first();
                $body           = $user->name.' Give You Point On Your Post';

                $chaeckss = $this->userMuteNotification->where('mute_by',$post->user_id)->where('muted_to',Auth::id())->first();
                if (!isset($chaeckss) && Auth::id() != $post->user_id) {
                    $communityId              = NULL;
                    $postId                   = $request->posts_id;
                    $notificationType         = 'points';
                    $subtype                  = 'Review';
                    $this->notificationStore($post->user_id,Auth::id(),$communityId,Auth::id(),$postId,$body,$notificationType,$subtype);
                }
                if ($checknoti->like_notification == 1 && Auth::id() != $post->user_id && !isset($chaeckss)) {
                    $success['noti'] = $this->notification("Points !",$body, $post->user_id);
                }
                return $this->sendResponse($success, 'Data saved successfully.');
            }            
        } catch (\Exception $ex) {
            return $this->sendError('Error', 'Something went wrong.');
        }
        
    }
    public function userReview(Request $request){
        try {
            $validate = Validator::make($request->all(), [               
                'posts_id' => 'required',
            ]);
        
            if ($validate->fails()) {
                return $this->sendError('Validation Error.', $validate->messages());
            }
                $unique = substr(str_shuffle("0123456789"), 0, 4);
                $data = [
                    'posts_id'          => $request->posts_id,
                    'discription'       => $request->discription,
                    'star'              => $request->star,
                    'image'             => isset($request->image) ? fileUploadProfile('admin/home/userReviewImage', $request->image, $unique) : '',
                    'user_id'           => Auth::id(),
                ];
        
                $success = $this->userPostReview->create($data);

                $post = $this->posts->where('id',$request->posts_id)->first();
                $user = $this->user->where('id',Auth::id())->first();

                $body           = $user->name.' Give You Reviewed On Your Post';
                $chaeckss = $this->userMuteNotification->where('mute_by',$post->user_id)->where('muted_to',Auth::id())->first();
                if (!isset($chaeckss)) {
                    $communityId              = NULL;
                    $postId                   = $request->posts_id;
                    $notificationType         = 'Review';
                    $subtype                  = ($post->post_master_id == 1) ? 'Survey' : (($post->post_master_id == 2) ? 'poll' : 'recommend');
                    $this->notificationStore($post->user_id,Auth::id(),$communityId,Auth::id(),$postId,$body,$notificationType,$subtype);
                }

                $checknoti      = $this->notificationSetting->where('user_id',$post->user_id)->first();
                if ($checknoti->like_notification == 1 && !isset($chaeckss)) {
                    $success['noti'] = $this->notification("Review !",$body, $post->user_id,['type'=>'Review','id'=> $request->posts_id]);
                }
                return $this->sendResponse($success, 'Data saved successfully.');
               
        } catch (\Exception $ex) {
            return $this->sendError('Error', 'Something went wrong.');
        }
        
    }
    public function savepost(Request $request){
        try {
            $validate = Validator::make($request->all(), [               
                'posts_id' => 'required',
            ]);
        
            if ($validate->fails()) {
                return $this->sendError('Validation Error.', $validate->messages());
            }
        
            $check = $this->savedPost->where('posts_id', $request->posts_id)->where('user_id', Auth::id())->get();        
            if ($check->isNotEmpty()) {
                foreach ($check as $value) {
                    $value->delete();
                }
                return $this->sendResponse('Message', 'Data saved successfully.');
            } else {
                $data = [
                    'posts_id' => $request->posts_id,
                    'user_id' => Auth::id(),
                ];
        
                $success = $this->savedPost->create($data);
                return $this->sendResponse($success, 'Data saved successfully.');
            }
        } catch (\Exception $ex) {
            return $this->sendError('Error', 'Something went wrong.');
        }
        
    }
    public function friendRequest(Request $request){
        // try{
            $validate = Validator::make($request->all(), [
                'send_to'               => 'required',
            ]);
            if($validate->fails()){
                return $this->sendError('Validation Error.', $validate->messages());
            }
            $check = $this->friend->where('send_by', Auth::id())->where('send_to', $request->send_to)->where('friends_status',3)->first();
            if (isset($check)) {
                $check->forcedelete();
                return $this->sendResponse("Message", 'Unfriend successfully.');
            }else {
                DB::beginTransaction();
                $data = [
                    'send_by'           => Auth::id(),
                    'send_to'           => $request->send_to,
                    'friends_status'    => 3,
                ];
                $success = $this->friend->create($data);
                $users = $this->user->where('id',Auth::id())->first();
                $body  = $users->name.' Send A Friend Request';
                                
                $chaeckss = $this->userMuteNotification->where('mute_by',$request->send_to)->where('muted_to',Auth::id())->first();
                if (!isset($chaeckss)) {
                    $communityId              = NULL;
                    $postId                   = NULL;
                    $notificationType         = 'FriendRequest';
                    $subtype                  = NULL;
                    $this->notificationStore($request->send_to,Auth::id(),$communityId,Auth::id(),$postId,$body,$notificationType,$subtype);
                }
                $checknoti      = $this->notificationSetting->where('user_id',$request->send_to)->first();
                if ($checknoti->friend_request_notification == 1 && !isset($chaeckss)) {
                    $success['noti'] = $this->notification("Friend Request",$body, $request->send_to,['type' => 'FriendRequest', 'id' => $request->send_to]);
                }
                DB::commit();
                return $this->sendResponse($success, 'Data save successfully.');   
            }
        // }catch(\Exception $ex)
        // {
            DB::rollback();
        //     return $this->sendError('Validation Error.', 'Something Wrong'); 
        // }
    }
    public function repost(Request $request) {
        // try{
            $validate = Validator::make($request->all(), [               
                'posts_id'               => 'required',
                'where_to_post_id'       => 'required',
            ]);
            if($validate->fails()){
                return $this->sendError('Validation Error.', $validate->messages());
            }
            // $check = $this->repost->where('repost_id', $request->posts_id)->where('user_id', Auth::id())->first();
            // if (isset($check)) {
            //     return $this->sendResponse("Message", 'Sorry You Have Already Repost This Post');
            // }else {
                $check = $this->posts->where('id',$request->posts_id)->first();
                // return $check;
                $repost = 1;
                $oppose = 0;
                $address = isset($request->address) ? $request->address : $check->address;
                $postId = $this->postCreate($check->post_master_id,$request->where_to_post_id,isset($request->day_id) ? $request->day_id : $check->day_id,$repost,$oppose,$address,$request->lat,$request->long);

                $data = [
                    'posts_id'           => $request->posts_id,
                    'repost_id'          => $postId['createdPostId'],
                    'thoughts'           => $request->thoughts,
                    'lat'                => $request->lat,
                    'long'               => $request->long,
                    'user_id'            => $check->user_id,
                ];
                $success = $this->repost->create($data);
                return $this->sendResponse($success, 'Data save successfully.');   
            // }
        // }catch(\Exception $ex)
        // {
        //     return $this->sendError('Validation Error.', 'Something Wrong'); 
        // }
    }
    public function repostGet(Request $request) {
        try{
            $validate = Validator::make($request->all(), [               
                'posts_id'               => 'required',
            ]);
            if($validate->fails()){
                return $this->sendError('Validation Error.', $validate->messages());
            }
            
            $repost = $this->repost->where('posts_id',$request->posts_id)->pluck('repost_id');
            $relation = $this->relations();
            $repostrel = [
                'repost' => function($q) {
                    $relations = ['posts' => function($q) {
                        $relations = $this->relations();
                        $q->with($relations);
                    }];
                    $q->with($relations);
                },
            ];

            $relations = ['day'];
            $allRelations = array_merge($relation, $repostrel,$relations);
            $post = $this->posts->with($allRelations)->whereIn('id',$repost);
            $details['list'] = $post->orderBy('id', 'DESC')->paginate(20);
            return $this->sendResponse($details, 'Data Get successfully.');   
        }catch(\Exception $ex)
        {
            return $this->sendError('Validation Error.', 'Something Wrong'); 
        }
    }
    public function  requestStatusChange(Request $request) {
        try{
            $validate = Validator::make($request->all(), [               
                'friend_request_id'               => 'required',
                'type'                             => 'required',
            ]);
            if($validate->fails()){
                return $this->sendError('Validation Error.', $validate->messages());
            }
            $check = $this->friend->where('id', $request->friend_request_id)->first();
            if ($request->type == "Accept") {
                $check->friends_status = 1;
                $check->save(); 
            }
            if ($request->type == "Reject") {
                $check->forceDelete();
            }
                           
            return $this->sendResponse($check, 'Data save successfully.');   
            
        }catch(\Exception $ex)
        {
            return $this->sendError('Validation Error.', 'Something Wrong'); 
        }
    }
    public function  removeFriend(Request $request) {
        try{
            $validate = Validator::make($request->all(), [               
                'user_id'               => 'required',
            ]);
            if($validate->fails()){
                return $this->sendError('Validation Error.', $validate->messages());
            }
            $check = $this->friend->where(function ($query) use ($request) {
                    $query->where('send_by', $request->user_id)
                          ->where('send_to', Auth::id());
                })->orWhere(function ($query) use ($request) {
                    $query->where('send_to', $request->user_id)
                          ->where('send_by', Auth::id());
                })->first();
            
            if ($check) {
                $check->delete();
            }
            return $this->sendResponse('Message', 'Friend Remove successfully.');   
        }catch(\Exception $ex)
        {
            return $this->sendError('Validation Error.', 'Something Wrong'); 
        }
    }
   
    public function getserachKeyWord(Request $request) {
        try {
            if ($request->type == 'popular_search') {
                $minKeywordCount = 5;
                $success = $this->userSerach->groupBy('key_word')->havingRaw('COUNT(key_word) > ?', [$minKeywordCount])->pluck('key_word');
            }else {
                $success = $this->userSerach->select('id', 'key_word')->where('user_id', Auth::id())->groupBy(['key_word', 'id'])->get();
            }
            return $this->sendResponse($success, 'Data get successfully.');   
        }catch(\Exception $ex)
        {
            return $this->sendError('Validation Error.', 'Something Wrong'); 
        }
    }
    public function reportPosts(Request $request) {
        try {
            $validate = Validator::make($request->all(), [               
                'posts_id'               => 'required',
            ]);
            if($validate->fails()){
                return $this->sendError('Validation Error.', $validate->messages());
            }
            $check = $this->reportPost->where('user_id',Auth::id())->where('posts_id',$request->posts_id)->first();
            if ($check) {
                $check->forcedelete();
                return $this->sendResponse("Message", 'Post UnReport successfully.');
            }else{
                $data = [
                    'user_id'   => Auth::id(),
                    'posts_id'  => $request->posts_id
                ];
                $success = $this->reportPost->create($data);
                return $this->sendResponse($success, 'Post Report successfully.');
            }
               
        }catch(\Exception $ex)
        {
            return $this->sendError('Validation Error.', 'Something Wrong'); 
        }
    }
    public function discover(Request $request){
        // try {
            $validate = Validator::make($request->all(), [               
                'lat'               => 'required',
                'long'              => 'required',
            ]);
            if($validate->fails()){
                return $this->sendError('Validation Error.', $validate->messages());
            }
            
            $currentLatitude = $request->lat ?? 0;
            $currentLongitude = $request->long ?? 0;
            $distance = 50;
            $postData = $this->posts->select('*')->selectRaw('(
                    6371000 * acos(
                        cos(radians(?)) * cos(radians(lat)) *
                        cos(radians(`long`) - radians(?)) +
                        sin(radians(?)) * sin(radians(lat))
                    )
                ) AS distance', [$currentLatitude, $currentLongitude, $currentLatitude])
                ->having('distance', '<', $distance)->first();
            if (isset($postData)) {
                $relation = ['userProfile'];
                $details['list'] = $this->user->with($relation)->where('id',$postData->user_id)->first();
                $auth = $this->userProfile->where('user_id',Auth::id())->first();
            
                $lat1 = isset($postData->lat) ? $postData->lat :'';
                $lon1 = isset($postData->long) ? $postData->long :'';
                $lat2 = isset($auth->lat) ? $auth->lat :'';
                $lon2 = isset($auth->long) ? $auth->long :'';

                $distance = $this->disatanceCal($lat1,$lat2,$lon2,$lon1);
                $details['list']->distance = round($distance);
            }else {
                return $this->sendError('Validation Error.', 'Data Not Found');
            }
            
            return $this->sendResponse($details, 'Data save successfully.');
        // }catch(\Exception $ex)
        // {
        //     return $this->sendError('Validation Error.', $ex); 
        // }
    }
}
