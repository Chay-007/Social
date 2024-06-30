<?php

namespace App\Http\Controllers\API\Circle;

# Models
use App\Models\User;
use App\Models\Posts;
use App\Models\Friend;
use App\Models\Comments;
use App\Models\Appose;
use App\Models\Share;
use App\Models\Points;
use App\Models\SurveyAns;
use App\Models\BlockChat;
use App\Models\Community;
use App\Models\PreviousChat;
use App\Models\SaveMesssages;
use App\Models\Notification;
use App\Models\FavouriteChat;
use App\Models\CommunityMembers;
use App\Models\NotificationSetting;
use App\Models\UserMuteNotification;
use App\Models\SurveyQuestionsOptions;

# Other Classes
use DB;
use Validator;
use Carbon\Carbon;
use Illuminate\Support\Arr;
use App\Traits\QueryTraits;
use App\Traits\FirebaseTraits;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use App\Http\Controllers\API\BaseController as BaseController;

class CircleController extends BaseController
{
    use QueryTraits;
    use FirebaseTraits;
    #Bind Posts model
    protected $posts;

    public function __construct(
        User                        $user,
        Posts                       $posts,
        Friend                      $friend,
        Comments                    $comments,
        Appose                      $appose,
        Share                       $share,
        Points                       $point,
        BlockChat                   $blockChat,
        Community                   $community,
        SurveyAns                   $surveyAns,
        PreviousChat                $previousChat,
        SaveMesssages               $saveMesssages,
        Notification                $notification,
        FavouriteChat               $favouriteChat,
        SurveyQuestionsOptions      $surveyoptions,
        CommunityMembers            $communityMembers,
        UserMuteNotification        $userMuteNotification,
        NotificationSetting         $notificationSetting
        )
    {
        $this->user                             = $user;
        $this->posts                            = $posts;
        $this->friend                           = $friend;
        $this->comments                         = $comments;
        $this->appose                        = $appose;
        $this->share                    = $share;
        $this->point                    = $point;
        $this->surveyAns                        = $surveyAns;
        $this->blockChat                        = $blockChat;
        $this->community                        = $community;
        $this->previousChat                     = $previousChat;
        $this->saveMesssages                    = $saveMesssages;
        $this->notification                     = $notification;
        $this->favouriteChat                    = $favouriteChat;
        $this->surveyoptions                    = $surveyoptions;
        $this->communityMembers                 = $communityMembers;
        $this->userMuteNotification             = $userMuteNotification;
        $this->notificationSetting              = $notificationSetting;
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // try {
            $relation = $this->relations();
            $repostrel = [
                'repost' => function($q) {
                    $relations = ['posts' => function($q) {
                        $relations = $this->relations();
                        $q->with($relations);
                    }];
                    $q->with($relations);
                },
                'appose' => function ($qwe) {
                    $real = ['posts' => function ($qwerty) {
                        $relations = $this->relations();
                        $qwerty->with($relations);
                    }];
                    $qwe->with($real);
                }
            ];

            $allRelations = array_merge($relation, $repostrel);

            $seekpost = $this->posts->with($allRelations)->where('user_id',Auth::id())->where('post_master_id',4)->orderBy('id', 'DESC');
            $pollpost = $this->posts->with($allRelations)->where('user_id',Auth::id())->where('post_master_id',2)->orderBy('id', 'DESC');
            $surveypost = $this->posts->with($allRelations)->where('user_id',Auth::id())->where('post_master_id',1)->orderBy('id', 'DESC');
            $reviewpost = $this->posts->with($allRelations)->where('user_id',Auth::id())->where('post_master_id',3)->withCount(['share', 'points as points_count'])->orderBy('id', 'DESC');
            $details['total_friend_count'] = $this->friend->where(function ($query) {$query->where('send_to', Auth::id())->orWhere('send_by', Auth::id());})->where('friends_status', '=', 1)->count();
            
                $communityMembers = $this->communityMembers->where('user_id',Auth::id())->distinct('community_id')->pluck('community_id');
                $myFriends = $this->friend->where(function ($query) {$query->where('send_to', Auth::id())->orWhere('send_by', Auth::id());})->where('friends_status', 1)->get();
                $myFriendsArray = [];
                foreach ($myFriends as $key => $value) {
                    if ($value->send_to != Auth::id()) {
                        $myFriendsArray[] = $value->send_to;
                    }elseif ($value->send_by != Auth::id()) {
                        $myFriendsArray[] = $value->send_by;
                    }
                }   
                
                $communitys = $this->community->whereNotIn('id', $communityMembers)
                ->with(['communityMembers' => function ($query) use ($myFriendsArray) {
                    $query->with('user.userProfile');
                    $query->whereIn('user_id', $myFriendsArray); // Assuming 'id' is the correct column to filter on
                }]);
                
                $myFriendsfriend = $this->friend->where(function ($query) use($myFriendsArray) {$query->whereIn('send_to', $myFriendsArray)->orWhereIn('send_by',$myFriendsArray);})->where('friends_status', 1)->get();
                $myFriendsfriendArray = [];
                foreach ($myFriendsfriend as $key => $value) {
                    foreach ($myFriendsArray as $keys => $values) {
                        if ($value->send_to != $values && $value->send_to != Auth::id() && !in_array($value->send_to,$myFriendsArray) && !in_array($value->send_to,$myFriendsfriendArray)) {
                            $myFriendsfriendArray[] = $value->send_to;
                        }elseif ($value->send_by != $values && $value->send_by != Auth::id() && !in_array($value->send_by,$myFriendsArray) && !in_array($value->send_by,$myFriendsfriendArray)) {
                            $myFriendsfriendArray[] = $value->send_by;
                        }
                    }
                }
                $suggestionRelation = ['userProfile'=>function ($q)  {
                    $q->select('id','user_id','image');
                }];
                
                // Ensure you're fetching the friend suggestions by executing the query with `get()`
                
                
            if ($request->type == 'ViewMore') {
                $relationsuser = ['user.userProfile','friendStatus'];
                $details['friendRequest'] = $this->friend->with($relationsuser)->where('send_to', Auth::id())->where('friends_status', 3)->paginate(10);
            }else {
                if ($request->type == 'ViewAllSeek' || $request->type == 'ViewAllReview' || $request->type == 'ViewAllSurvey' || $request->type == 'ViewAllPoll' || $request->type == 'AllSuggestedFriends' || $request->type == 'SeeAll') {
                    if ($request->type == 'ViewAllSeek') {
                        $details['seek'] = $this->updatePostDetailsAndCounts($seekpost->paginate(10));
                    }
                    
                    if ($request->type == 'ViewAllReview') {
                        $details['review'] =  $this->updatePostDetailsAndCounts($reviewpost->paginate(10));
                    }
                    if ($request->type == 'ViewAllSurvey') {
                        $details['survey'] = $this->updatePostDetailsAndCounts($surveypost->paginate(10));
                        
                        foreach ($details['survey'] as $key2 => $sss) {
                            $survey_count = $this->surveyAns->where('posts_id', $sss->id)->select(DB::raw('COUNT(DISTINCT user_id) AS occur'))->first()->occur;
                            $sss->submitted_count = isset($survey_count) ? $survey_count : 0;
                        }
                    }
                    if ($request->type == 'ViewAllPoll') {
                        $details['poll'] = $this->updatePostDetailsAndCounts($pollpost->paginate(10));
                        
                    }
                    if ($request->type == 'SeeAll') {
                        $details['communoty_sug'] = $communitys->paginate(10);
                    }
                    if ($request->type == 'AllSuggestedFriends') {
                        //  = $friendsuggestion->paginate(10);
                        $details['suggestion'] = $this->user->whereIn('id', $myFriendsfriendArray)->with($suggestionRelation)->select('id', 'name')->paginate(10);
                
                        foreach ($details['suggestion'] as $suggestion) {
                            $mutualFriends = [];
                        
                            $checks = $this->friend->where(function ($query) use ($suggestion) {
                                $query->where('send_to', $suggestion->id)
                                      ->orWhere('send_by', $suggestion->id);
                            })->where('friends_status', 1)->get();
                        
                            foreach ($checks as $check) {
                                if ($suggestion->id != $check->send_by && in_array($check->send_by, $myFriendsArray)) {
                                    $check->load(['user.userProfile']);
                                    $mutualFriends[] = $check->user;
                                }
                                if ($suggestion->id != $check->send_to && in_array($check->send_to, $myFriendsArray)) {
                                    $check->load(['sendto.userProfile']); // Validate 'sendto' is correctly defined in your model
                                    $mutualFriends[] = $check->sendto;
                                }
                            }
                            $suggestion->mutualFriends = $mutualFriends;
                        }
                    }
                }else {
                    $details['suggestion'] = $this->user->whereIn('id', $myFriendsfriendArray)->with($suggestionRelation)->select('id', 'name')->take(3)->get();
                
                        foreach ($details['suggestion'] as $suggestion) {
                            $mutualFriends = [];
                        
                            $checks = $this->friend->where(function ($query) use ($suggestion) {
                                $query->where('send_to', $suggestion->id)
                                      ->orWhere('send_by', $suggestion->id);
                            })->where('friends_status', 1)->get();
                        
                            foreach ($checks as $check) {
                                if ($suggestion->id != $check->send_by && in_array($check->send_by, $myFriendsArray)) {
                                    $check->load(['user.userProfile']);
                                    $mutualFriends[] = $check->user;
                                }
                                if ($suggestion->id != $check->send_to && in_array($check->send_to, $myFriendsArray)) {
                                    $check->load(['sendto.userProfile']); // Validate 'sendto' is correctly defined in your model
                                    $mutualFriends[] = $check->sendto;
                                }
                            }
                            $suggestion->mutualFriends = $mutualFriends;
                        }
                    $relationsuser = ['user.userProfile','friendStatus'];
                    $details['friendRequest'] = $this->friend->with($relationsuser)->where('send_to', Auth::id())->where('friends_status', 3)->paginate(3);
                    
                    $details['communoty_sug'] = $communitys->take(3)->get();
                    
                    
                    $details['poll'] = $this->updatePostDetails($pollpost->first());
                    $details['review'] = $this->updatePostDetails($reviewpost->first());
                    $details['survey'] = $this->updatePostDetails($surveypost->first());
                    $details['seek'] = $this->updatePostDetails($seekpost->first());
                    
                    
                   
                    
                    if(isset($details['survey'])){
                        $survey_count = $this->surveyAns->where('posts_id', $details['survey']->id)->select(DB::raw('COUNT(DISTINCT user_id) AS occur'))->first()->occur;
                        $details['survey']->submitted_count = isset($survey_count) ? $survey_count : 0;
                    }
                    
                    
                }
            }
            
            return $this->sendResponse($details, 'Data save successfully.');            
        // }catch(\Exception $ex)
        // {
        //     return $this->sendError('Validation Error.', 'Something Wrong'); 
        // }
    }
    
    public function updatePostDetails($post) {
        
    if (isset($post)) {
        $commentCount = $this->comments->where('posts_id', $post->id)->count();
        $shareCount = $this->share->where('posts_id', $post->id)->count();
        $pointCount = $this->point->where('posts_id', $post->id)->count();
        $apposeCount = $this->appose->where('posts_id', $post->id)->count();

        $post->comments_count = $commentCount;
        $post->share_count = $shareCount;
        $post->points_count = $pointCount;
        $post->oppose_count = $apposeCount;
        
        if(isset($post->repost)){
             $commentCount = $this->comments->where('posts_id', $post->repost->posts_id)->count();
        $shareCount = $this->share->where('posts_id', $post->repost->posts_id)->count();
        $pointCount = $this->point->where('posts_id', $post->repost->posts_id)->count();
        $apposeCount = $this->appose->where('posts_id', $post->repost->posts_id)->count();

        $post->repost->posts->comments_count = $commentCount;
        $post->repost->posts->share_count = $shareCount;
        $post->repost->posts->points_count = $pointCount;
        $post->repost->posts->oppose_count = $apposeCount;
        }
         if(isset($post->appose)){
             $commentCount = $this->comments->where('posts_id', $post->appose->posts_id)->count();
        $shareCount = $this->share->where('posts_id', $post->appose->posts_id)->count();
        $pointCount = $this->point->where('posts_id', $post->appose->posts_id)->count();
        $apposeCount = $this->appose->where('posts_id', $post->appose->posts_id)->count();

        $post->appose->posts->comments_count = $commentCount;
        $post->appose->posts->share_count = $shareCount;
        $post->appose->posts->points_count = $pointCount;
        $post->appose->posts->oppose_count = $apposeCount;
        }
    }
    
        return $post;
    }
    
    public function updatePostDetailsAndCounts($posts) {
    foreach ($posts as $key => $value) {
        $commentCount = $this->comments->where('posts_id', $value->id)->count();
        $shareCount = $this->share->where('posts_id', $value->id)->count();
        $pointCount = $this->point->where('posts_id', $value->id)->count();
        $apposeCount = $this->appose->where('posts_id', $value->id)->count();

        $posts[$key]->comments_count = $commentCount;
        $posts[$key]->share_count = $shareCount;
        $posts[$key]->points_count = $pointCount;
        $posts[$key]->oppose_count = $apposeCount;
        
        if(isset($value->repost)){
             $commentCount = $this->comments->where('posts_id', $value->repost->posts_id)->count();
        $shareCount = $this->share->where('posts_id', $value->repost->posts_id)->count();
        $pointCount = $this->point->where('posts_id', $value->repost->posts_id)->count();
        $apposeCount = $this->appose->where('posts_id', $value->repost->posts_id)->count();

        $value->repost->posts->comments_count = $commentCount;
        $value->repost->posts->share_count = $shareCount;
        $value->repost->posts->points_count = $pointCount;
        $value->repost->posts->oppose_count = $apposeCount;
        }
         if(isset($value->appose)){
             $commentCount = $this->comments->where('posts_id', $value->appose->posts_id)->count();
        $shareCount = $this->share->where('posts_id', $value->appose->posts_id)->count();
        $pointCount = $this->point->where('posts_id', $value->appose->posts_id)->count();
        $apposeCount = $this->appose->where('posts_id', $value->appose->posts_id)->count();

        $value->appose->posts->comments_count = $commentCount;
        $value->appose->posts->share_count = $shareCount;
        $value->appose->posts->points_count = $pointCount;
        $value->appose->posts->oppose_count = $apposeCount;
        }
    }

    return $posts;
}

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
    public function favouriteChat(Request $request) {
        try {
            $validate = Validator::make($request->all(), [               
                'user_id'          => 'required',
            ]);
            if($validate->fails()){
                return $this->sendError('Validation Error.', $validate->messages());
            }
            $check = $this->favouriteChat->where('chat_with',$request->user_id)->first();
            if (isset($check)) {
                $check->delete();
                return $this->sendResponse("Message", 'Chat UnFavourite successfully.');
            }else {
                $data = [
                    'user_id'   => Auth::id(),
                    'chat_with' => $request->user_id,
                ];
                $success = $this->favouriteChat->create($data);
                return $this->sendResponse($success, 'Chat Favourite successfully.');
            }

        }catch(\Exception $ex)
        {
            return $this->sendError('Validation Error.', 'Something Wrong'); 
        }
    }
    public function getfavouriteChat(Request $request) {
        try {
            $relation = ['chatWith', 'chatWith.userProfile'];
            $success = $this->favouriteChat->with($relation)->where('user_id', Auth::id())->paginate(20);
            foreach ($success as $chat) {
                // Assuming your User and Chat models have latitude and longitude attributes
                $lat1 = $chat->user->userProfile->lat;
                $lat2 = $chat->chatWith->userProfile->lat;
                $lon2 = $chat->chatWith->userProfile->long;
                $lon1 = $chat->user->userProfile->long;

                $distance = $this->disatanceCal($lat1,$lat2,$lon2,$lon1);

                // Now you have the distance, you can do whatever you want with it
                $chat->distance = $distance;
            }

            return $this->sendResponse($success, 'Community Register successfully.');
        }catch(\Exception $ex)
        {
            return $this->sendError('Validation Error.', 'Something Wrong'); 
        }
    }
    public function blockChat(Request $request) {
        try {
            $validate = Validator::make($request->all(), [               
                'user_id'          => 'required',
            ]);
            if($validate->fails()){
                return $this->sendError('Validation Error.', $validate->messages());
            }
            $check = $this->blockChat->where('chat_with',$request->user_id)->first();
            if (isset($check)) {
                $check->delete();
                return $this->sendResponse("Message", 'Chat UnBlock successfully.');
            }else {
                $data = [
                    'user_id'   => Auth::id(),
                    'chat_with' => $request->user_id,
                ];
                $success = $this->blockChat->create($data);
                return $this->sendResponse($success, 'Chat Block successfully.');
            }

        }catch(\Exception $ex)
        {
            return $this->sendError('Validation Error.', 'Something Wrong'); 
        }
    }
    public function getBlockChat(Request $request) {
        try {
            $relation = ['chatWith','chatWith.userProfile'];
            $success = $this->blockChat->with($relation)->where('user_id',Auth::id())->paginate(20);
            return $this->sendResponse($success, 'Block Chat Get successfully.');
        }catch(\Exception $ex)
        {
            return $this->sendError('Validation Error.', 'Something Wrong'); 
        }
    }
    public function chatStart(Request $request) {
        // try {
            DB::beginTransaction();
            $validate = Validator::make($request->all(), [               
                'user_id'          => 'required',
            ]);
            if($validate->fails()){
                return $this->sendError('Validation Error.', $validate->messages());
            }
            $this->previousChat->where('user_id',Auth::id())->where('chat_with',$request->user_id)->forceDelete();
            $this->previousChat->where('chat_with',Auth::id())->where('user_id',$request->user_id)->forceDelete();
            $data = [
                'user_id'   => Auth::id(),
                'chat_with' => $request->user_id,
            ];

            $success = $this->previousChat->create($data);
            
            $auth = $this->user->where('id',Auth::id())->first();
            $checknoti = $this->notificationSetting->where('user_id',$request->user_id)->first();

            $body = $auth->name .' Send A Message On Personal';
            $communityId              = null;
            $postId                   = null;
            $notificationType         = 'PersonalChat';
            $subtype                  = null;
            $chaeckss = $this->userMuteNotification->where('mute_by',$request->user_id)->where('muted_to',Auth::id())->first();
            // if (!isset($chaeckss)) {
            //     $this->notificationStore($request->user_id,Auth::id(),$communityId,Auth::id(),$postId,$body,$notificationType,$subtype);
            // }
            if ($checknoti->post_notification == 1 && !isset($chaeckss)) {
                $this->notification("Message !",$body, $request->user_id,['type'=> 'PersonalChat','id'=>Auth::id(),'MyID'=>$request->user_id]);
            }
            DB::commit();
            return $this->sendResponse($success, 'Chat Start Get successfully.');
        // }catch(\Exception $ex)
        // {
            DB::rollback();
        //     return $this->sendError('Validation Error.', 'Something Wrong'); 
        // }
    }
    public function perviousChat(Request $request) {
        // try {
            $twentyFourHoursAgo = Carbon::now()->subHours(24);
            $userId = Auth::id();
            
            $success = $this->previousChat
                        ->where(function ($query) use ($twentyFourHoursAgo, $userId) {
                            $query->where('created_at', '>', $twentyFourHoursAgo)
                                  ->where('user_id', $userId);
                        })
                        ->orWhere('chat_with', $userId)
                        ->orderBy('created_at', 'desc')
                        ->paginate(20);
            
            $check = $this->favouriteChat
                        ->where('user_id', $userId)
                        ->pluck('chat_with')
                        ->toArray();
                        
              foreach ($success as $key => $value) {
                  
                  $value->isFav = in_array(($value->user_id === $userId) ? $value->chat_with : $value->user_id, $check);
                  
                    if ($value->user_id != Auth::id() ) {
                        
                        $relation = ['user.userProfile',];
                        $value->load($relation);
                        
                    }elseif($value->chat_with != Auth::id()){
                        
                        $relation = ['chatWith.userProfile'];
                        $value->load($relation);
                    }
                    
                
              }
        
            return $this->sendResponse($success, 'Chat Start Get successfully.');
        // } catch (\Exception $ex) {
        //     return $this->sendError('Validation Error.', 'Something Wrong');
        // }
    }
    
    public function searchCircle(Request $request) {
        // try {
            $validate = Validator::make($request->all(), [               
                'name'          => 'required',
            ]);
            if($validate->fails()){
                return $this->sendError('Validation Error.', $validate->messages());
            }
            $search = $this->user->with('userProfile')->where('id', '!=', Auth::id())->where('name', 'like', '%' . $request->name . '%')->where('type', '!=', 'admin')->get();
            $userId = $search->pluck('id');
            $searchcommunity = $this->community->with('communityMembers')->where('name', 'like', '%' . $request->name . '%')->get()->map(function ($community) {
                $communityJoined = $community->communityMembers->contains('user_id', Auth::id());
                $community->communityJoined = $communityJoined;
                return $community;
            });

            
            $myFriends = $this->friend->where(function ($query) {$query->where('send_to', Auth::id())->orWhere('send_by', Auth::id());})->where('friends_status', 1)->paginate(20);
            
            $myFriendsArray = [];
            foreach ($myFriends as $key => $value) {
                if ($value->send_to != Auth::id()) {
                    $value->load(['sendto.userProfile']);
                    $myFriendsArray[] = $value->sendto;
                } elseif ($value->send_by != Auth::id()) {
                    $value->load(['user.userProfile']);
                    $myFriendsArray[] = $value->user;
                }
            }
            // return $userId->toArray();
            
            $data = [
                'users' => [],
                'community' => [],
            ];
            $temp = [];
            foreach ($search as $user) {
                $checkFriend = $this->friend->where(function ($query) use ($user) {$query->where(function ($subQuery) use ($user) {$subQuery->where('send_to', $user->id)->where('send_by', Auth::id());})->orWhere(function ($subQuery) use ($user) {$subQuery->where('send_to', Auth::id())->where('send_by', $user->id);});})->first();
                $mutualFriends = [];
                foreach ($myFriendsArray as $friend) {
                    $myFriendsfriend = $this->friend->where(function ($query) use ($friend) {$query->where('send_to', $friend->id)->orWhere('send_by', $friend->id);})->where('friends_status', 1)->get();
                    $temp = [];
                    foreach ($myFriendsfriend as $key => $value) {
                        $value->load(['sendto.userProfile', 'user.userProfile']);
                        
                        if ((in_array($value->sendto->id, $userId->toArray()) && $value->sendto->id != $friend->id && $value->sendto->id != Auth::id()) ||
                            (in_array($value->user->id, $userId->toArray()) && $value->user->id != $friend->id && $value->user->id != Auth::id())) {
                            $temp[] = ($value->sendto->id == $friend->id) ? $value->user : $value->sendto;
                        }
                    }
                    $mutualFriends[] = [
                        'mutual_friends' => $temp,
                        'mutual_friends_count' => count($temp),
                    ];
                }
                $data['users'][] = [
                    'user' => $user,
                    'isFriend' => isset($checkFriend) ? ($checkFriend->friends_status == '1' ? 'Friend' : ($checkFriend->friends_status == '3' ? 'Requested' : '')) : '',
                    'mutual_friends_data' => $temp,
                ];
            }
            $data['community'] = $searchcommunity;
            return $this->sendResponse($data, 'User Get successfully.');
        // }catch(\Exception $ex)
        // {
        //     return $this->sendError('Validation Error.', 'Something Wrong'); 
        // }
    }

    public function msgCount(Request $request) {
        try {
            $validator = Validator::make($request->all(), [               
                'user_id'         => 'required',
                'count'           => 'required',
            ]);        
            if ($validator->fails()) {
                return $this->sendError('Validation Error.', $validator->messages());
            }
            $check = $this->saveMesssages->where('friend_id',$request->user_id)->where('user_id',Auth::id())->first();
            $data = [
                'user_id'           => Auth::id(),
                'friend_id'         => $request->user_id,
                'count'             => $request->count,
            ];

            if($check){
                $check->update($data);
                $success = $this->saveMesssages->where('friend_id',$request->user_id)->where('user_id',Auth::id())->first();
            }else{
                $success = $this->saveMesssages->create($data);
            }
            return $this->sendResponse($success, 'Messages Count Save Successfully.');
        } catch (\Exception $ex) {
            return $this->sendError('Internal Server Error.', 'Something went wrong');
        }
    }

    public function getMsgCount(Request $request) {
        try {
            $relation = ['friend.userProfile'];
            $success = $this->saveMesssages->with($relation)->where('count','>',0)->where('user_id', Auth::id())->paginate(20);
            foreach ($success as $chat) {
                $lat1 = $chat->user->userProfile->lat;
                $lat2 = $chat->friend->userProfile->lat;
                $lon2 = $chat->friend->userProfile->long;
                $lon1 = $chat->user->userProfile->long;

                $distance = $this->disatanceCal($lat1,$lat2,$lon2,$lon1);
                $chat->distance = $distance;
            }

            return $this->sendResponse($success, 'Messages Count Get Successfully.');
        } catch (\Exception $ex) {
            return $this->sendError('Internal Server Error.', 'Something went wrong');
        }
    }
}
