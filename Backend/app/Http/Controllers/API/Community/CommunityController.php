<?php

namespace App\Http\Controllers\API\Community;

# Models
use App\Models\User;
use App\Models\Posts;
use App\Models\Friend;
use App\Models\Community;
use App\Models\ChatImages;
use App\Models\Notification;
use App\Models\CommunityTags;
use App\Models\CommunityMembers;
use App\Models\NotificationSetting;
use App\Models\UserMuteNotification;

# Other Classes
use DB;
use Validator;
use Illuminate\Support\Arr;
use Illuminate\Http\Request;
use App\Traits\QueryTraits;
use App\Traits\FirebaseTraits;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\API\BaseController as BaseController;

class CommunityController extends BaseController
{
    use QueryTraits;

    use FirebaseTraits;

    #Bind Community model
    protected $community;

    #Bind CommunityTags model
    protected $communityTags;

    #Bind CommunityMembers model
    protected $communityMembers;
    
    /**
      * Defining the default constructor for controller
      *
      */
    public function __construct(
        Posts                                $posts,
        User                                 $user,
        Friend                               $friend,
        Community                            $community,
        ChatImages                           $chatImages,
        Notification                         $notification,
        CommunityTags                        $communityTags,
        CommunityMembers                     $communityMembers,
        NotificationSetting                  $notificationSetting,
        UserMuteNotification                 $userMuteNotification
        )
    {
        $this->user                         = $user;
        $this->posts                        = $posts;
        $this->friend                       = $friend;
        $this->community                    = $community;
        $this->chatImages                   = $chatImages;
        $this->notification                 = $notification;
        $this->communityTags                = $communityTags;
        $this->communityMembers             = $communityMembers;
        $this->notificationSetting          = $notificationSetting;
        $this->userMuteNotification         = $userMuteNotification;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $check = $this->communityMembers->where('user_id',Auth::id())->pluck('community_id');
        $relation = ['communityMembers'];
        $details['lists'] = $this->community->withCount($relation)->whereIn('id',$check)->paginate(20);
        return $this->sendResponse($details, 'Community Get successfully.');
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
        DB::beginTransaction();
        try {
            $validate = Validator::make($request->all(), [               
                'name'          => 'required',
            ]);
            if($validate->fails()){
                return $this->sendError('Validation Error.', $validate->messages());
            }
            $check = $this->community->where('id',$request->community_id)->first();
            $image = $request->file('image');
            $uniqueId = mt_rand(10000, 99999);
            $datas = [
              'user_id'                         => Auth::id(),
              'community_no'                    => isset($check) ? $check->community_no : $uniqueId,
              'name'                            => $request->name,
              'logo'                            => isset($image) ? fileUploadProfile('admin/home/community', $image, $uniqueId) : (isset($check->logo) ? $check->logo : 'public/img/groupdefault.png'),
              'description'                     => $request->description,
              'community_visibility'            => $request->community_visibility,
            ];            
            if (isset($check)) {
                $communitys = $check->update($datas);
            }else {
                $communitys = $this->community->create($datas);
            }
            $this->communityTags->where('community_id',$request->community_id)->forceDelete();
            if (isset($request->tags)) {
                foreach ($request->tags as $key => $value) {
                    $data = [
                        'community_id'      => isset($communitys->id) ? $communitys->id : $request->community_id,
                        'tag_id'            => $value,
                    ];
                    $this->communityTags->create($data);                    
                }                
            }
            if (isset($request->members)) {
                $this->communityMembers->where('community_id',$request->community_id)->forceDelete();
                foreach ($request->members as $key2 => $members) {
                    $data = [
                        'community_id'          => isset($communitys->id) ? $communitys->id : $request->community_id,
                        'user_id'               => $members,
                        'member_status'         => $members == Auth::id() ? 'admin':'member',
                    ];
                    $this->communityMembers->create($data);                    
                }                
            }
            if ($request->user_add) {
                foreach ($request->user_add as $key3 => $members) {                
                    $data = [
                        'community_id'          => $request->community_id,
                        'user_id'               => $members,
                        'member_status'         => 'member',
                    ];
                    $this->communityMembers->create($data);
                }
            }
            if ($request->user_delete) {
                foreach ($request->user_delete as $key2 => $members) {                
                    $this->communityMembers->where('community_id',$request->community_id)->where('user_id',$members)->forceDelete();
                }
            }
            DB::commit();
            return $this->sendResponse($communitys, 'Community Register successfully.');
        }catch(\Exception $ex)
        {
            DB::rollback();
            return $this->sendError('Validation Error.', 'Something Wrong'); 
        }
    }

    public function  changeMemberStatus(Request $request) {
        try {
            $validator = Validator::make($request->all(), [               
                'community_id'      => 'required',
                'user_id'           => 'required',
                'member_status'     => 'required',
            ]);        
            if ($validator->fails()) {
                return $this->sendError('Validation Error.', $validator->messages());
            }
            $check = $this->communityMembers->where('community_id',$request->community_id)->where('user_id',$request->user_id)->first();
            if(isset($check)){
                $data = [
                    'member_status'         => $request->member_status,
                ];
                $check->update($data);
                $success = $this->communityMembers->where('community_id',$request->community_id)->where('user_id',$request->user_id)->first();
            }
            return $this->sendResponse($success, 'Status Change successfully.');
        } catch (\Exception $ex) {
            return $this->sendError('Internal Server Error.', 'Something went wrong');
        }
    }

    public function  getCommunityProfile(Request $request) {
        try {
            $validator = Validator::make($request->all(), [               
                'community_id'      => 'required',
            ]);
        
            if ($validator->fails()) {
                return $this->sendError('Validation Error.', $validator->messages());
            }
            $relation = ['communityMembers'=>function ($q){
                $rel=['user','user.userProfile'];
                $q->with($rel);
            },'communityTags','communityTags.tag'];
            $success = $this->community->with($relation)->where('id',$request->community_id)->first();
            return $this->sendResponse($success, 'Data Fetch successfully.');
        } catch (\Exception $ex) {
            return $this->sendError('Internal Server Error.', 'Something went wrong');
        }
    }
    public function communityDetail(Request $request) {
        try {
            $validator = Validator::make($request->all(), [               
                'community_id'      => 'required',
                'type'              => 'required',
            ]);
            if ($validator->fails()) {
                return $this->sendError('Validation Error.', $validator->messages());
            }
            $members = $this->communityMembers->where('community_id',$request->community_id)->where('user_id','!=',Auth::id())->pluck('user_id');
            // return$members;
            $communitys = $this->community->where('id',$request->community_id);
            if ($request->type == 'About') {
                $relation = ['communityTags', 'communityTags.tag'];
                $count = ['communityMembers'];
                $communitys->with($relation)->withCount($count);

            }
            if($request->type == 'Members'){
                $rel=['user','user.userProfile'];
                $success = $this->communityMembers->with($rel)->where('community_id',$request->community_id)->paginate(20);
                return $this->sendResponse($success, 'Data Fetch successfully.');
            }

            if ($request->type == 'Post') {
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
                $success = $this->posts->with($relation)->whereIn('user_id',$members)->select('id','post_master_id','user_id')->orderBy('id', 'DESC')->paginate(20);
                return $this->sendResponse($success, 'Data Fetch successfully.');
            }
            if ($request->type == 'Media') {
                $success = $this->chatImages->where('community_id',$request->community_id)->paginate(20);
                return $this->sendResponse($success, 'Data Fetch successfully.');
            }

            $success = $communitys->first();
            $com = [];
            $auth = $this->friend->where('send_to',Auth::id())->orWhere('send_by',Auth::id())->where('friends_status', 1)->get();
            foreach ($auth as $friend) {
                if ($friend->send_to == Auth::id()) {
                    $com[] = $friend->send_by;
                    $whereExecuted = 'send_to';
                } elseif ($friend->send_by == Auth::id()) {
                    $com[] = $friend->send_to;
                    $whereExecuted = 'send_by';
                } else {
                    // Handle the case where neither 'send_to' nor 'send_by' match
                    $whereExecuted = 'unknown';
                }
            
                // Add $whereExecuted to the friend object or use it as needed
                $friend->whereExecuted = $whereExecuted;
            }

            $commonElements = collect($com)->intersect($members);
            $real = ['userProfile'];
            $success['threeMembers'] = $this->user->with($real)->whereIn('id', $commonElements)->take(2)->get();
            $success['memberStatus']= $this->communityMembers->where('user_id', Auth::id())->where('community_id',$request->community_id)->first();
            return $this->sendResponse($success, 'Data Fetch successfully.');
        } catch (\Exception $ex) {
            return $this->sendError('Internal Server Error.', 'Something went wrong');
        }
    }
    public function getnotInComunnityusers (Request $request){
        try {

            $validator = Validator::make($request->all(), [               
                'community_id'      => 'required',
            ]);
            if ($validator->fails()) {
                return $this->sendError('Validation Error.', $validator->messages());
            }
            $check = $this->communityMembers->where('community_id', $request->community_id)->pluck('user_id')->toArray();
            $relation = ['userProfile'];
            $success = $this->user->with($relation)->where('id','!=',Auth::id())->whereNotIn('id', $check)->paginate(20);
            return $this->sendResponse($success, 'Data Fetch successfully.');
        } catch (\Exception $ex) {
            return $this->sendError('Internal Server Error.', 'Something went wrong');
        }


    }
    public function leaveCommunity(Request $request){
        try {
            $validator = Validator::make($request->all(), [               
                'community_id'      => 'required',
                'type'              => 'required',
            ]);
            if ($validator->fails()) {
                return $this->sendError('Validation Error.', $validator->messages());
            }
            if ($request->type == 'notifaction') {
                $success = $this->community->where('id',$request->community_id)->first();
                if ($success->mute_notification == 1) {
                    $notification = '0';
                } else {
                    $notification = '1';
                }
                $success->mute_notification = $notification;
                $success->save();
                $statusText = $notification == 1 ? 'Off' : 'On';
                return $this->sendResponse($success, 'NotitFication turned '. $statusText .' successfully.');
            }else {
                $check = $this->communityMembers->where('community_id',$request->community_id)->where('user_id',Auth::id())->forceDelete();
                return $this->sendResponse("Message", 'Leave successfully.');
            }            
        } catch (\Throwable $th) {
            //throw $th;
        }
        
    }
    public function communityChatnoti(Request $request) {
        // try {

            $validator = Validator::make($request->all(), [               
                'community_id'      => 'required',
            ]);
            if ($validator->fails()) {
                return $this->sendError('Validation Error.', $validator->messages());
            }
            $user = $this->user->where('id',Auth::id())->first();
            $check = $this->communityMembers->where('community_id',$request->community_id)->where('user_id','!=',Auth::id())->get();
            $communitys = $this->community->where('id',$request->community_id)->first();

            foreach ($check as $key => $value) {
                $body = $user->name.' Send A Message In '.' '.$communitys->name;

                $chaeckss = $this->userMuteNotification->where('mute_by',$value->user_id)->where('muted_to',Auth::id())->first();
                // if (!isset($chaeckss)) {
                //     $communityId              = $request->community_id;
                //     $postId                   = NULL;
                //     $notificationType         = 'CommunityChat';
                //     $subtype                  = NULL;
                //     $this->notificationStore($value->user_id,Auth::id(),$communityId,Auth::id(),$postId,$body,$notificationType,$subtype);
                // }
                $checknoti      = $this->notificationSetting->where('user_id',$value->user_id)->first();
                if ($checknoti->like_notification == 1 && !isset($chaeckss)) {
                    $success['noti'] = $this->notification("Community Chat !", $body , $value->user_id,['type'=>'CommunityChat','id'=> $request->community_id]);
                }
            }
            return $this->sendResponse($success, 'Notification Send successfully.');
        
    }
    public function joinCommunity(Request $request){
        try {
            $validator = Validator::make($request->all(), [               
                'community_id'      => 'required',
            ]);
            if ($validator->fails()) {
                return $this->sendError('Validation Error.', $validator->messages());
            }
            $check = $this->communityMembers->where('community_id',$request->community_id)->where('user_id',Auth::id())->first();
            if (isset($check)) {
                $check->forceDelete();
                return $this->sendResponse("Message", 'Community UnJoined successfully.');
            }else {   
                $data = [
                    'community_id' => $request->community_id,
                    'user_id'      => Auth::id(),
                ];
                $success = $this->communityMembers->create($data);
            }            
            return $this->sendResponse($success, 'Community Join successfully.');
        } catch (\Throwable $th) {
            return $this->sendError('Internal Server Error.', 'Something went wrong');
        }
    }
    public function checkData(Request $request){
        try {
            $validator = Validator::make($request->all(), [               
                'community_id'      => 'required',
            ]);
            if ($validator->fails()) {
                return $this->sendError('Validation Error.', $validator->messages());
            }
            $check = $this->communityMembers->where('community_id',$request->community_id)->where('user_id',Auth::id())->first();
            if (isset($check)) {
                $success = true;
            }else {
                $success = false;
            }            
            return $this->sendResponse($success, 'Community Join successfully.');
        } catch (\Throwable $th) {
            return $this->sendError('Internal Server Error.', 'Something went wrong');
        }
    }
}
