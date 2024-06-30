<?php

namespace App\Http\Controllers\API\Post;

# Models
use App\Models\Days;
use App\Models\User;
use App\Models\Tags;
use App\Models\Posts;
use App\Models\Seek;
use App\Models\Friend;
use App\Models\SeekTags;
use App\Models\Category;
use App\Models\SeeksImages;
use App\Models\StartReviews;
use App\Models\Notification;
use App\Models\CommunityTags;
use App\Models\UserPostReview;
use App\Models\NotificationSetting;
use App\Models\UserMuteNotification;

# Other Classes
use DB;
use Validator;
use App\Traits\QueryTraits;
use Illuminate\Support\Arr;
use Illuminate\Http\Request;
use App\Traits\FirebaseTraits;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\API\BaseController as BaseController;

class SeekController extends BaseController
{
    use FirebaseTraits;
    use QueryTraits;

    #Bind days model
    protected $days;
    
    #Bind tags model
    protected $tags;
    
    #Bind pots model
    protected $pots;

    #Bind Seek model
    protected $seek;
    
    #Bind SeekTags model
    protected $seekTags;
    
    #Bind Category model
    protected $category;
    
    #Bind SeeksImages model
    protected $seeksImages;


    public function __construct(
        Days                            $days,
        User                            $user,
        Tags                            $tags,
        Posts                           $pots,
        Seek                            $seek,
        Friend                          $friend,
        Category                        $category,
        SeekTags                        $seekTags,
        SeeksImages                     $seeksImages,
        StartReviews                    $startReviews,
        Notification                    $notification,
        CommunityTags                   $communityTags,
        UserPostReview                  $userPostReview,
        NotificationSetting             $notificationSetting,
        UserMuteNotification            $userMuteNotification
        )
    {
        $this->days                    = $days;
        $this->user                    = $user;
        $this->tags                    = $tags;
        $this->pots                    = $pots;
        $this->seek                    = $seek;
        $this->friend                  = $friend;
        $this->category                = $category;
        $this->seekTags                = $seekTags;
        $this->seeksImages             = $seeksImages;
        $this->startReviews            = $startReviews;
        $this->notification            = $notification;
        $this->communityTags           = $communityTags;
        $this->userPostReview          = $userPostReview;
        $this->notificationSetting     = $notificationSetting;
        $this->userMuteNotification    = $userMuteNotification;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
            // $validate = Validator::make($request->all(), [               
            //     'question'          => 'required',           
            //     'option'            => 'required',           
            // ]);
            // if($validate->fails()){
            //     return $this->sendError('Validation Error.', $validate->messages());
            // }
            $repost = 0;
            $oppose = 0;
            $postId = $this->postCreate(4,$request->where_to_post_id,$request->day_id,$repost,$oppose,$request->address,$request->lat,$request->long);
            $datas = [
              'user_id'                 => Auth::id(),
              'posts_id'                => $postId['createdPostId'],
              'where_to_post_id'        => $request->where_to_post_id,
              'review'                  => isset($request->review) ? $request->review : 0,
              'suggestion'              => isset($request->suggestion) ? $request->suggestion : 0,
              'day_id'                  => isset($request->day_id) ? $request->day_id : 1,
              'description'             => $request->description,
              'descriptionSecond'       => $request->descriptionSecond,
              'hyperLink'               => $request->hyperLink,
              'lat'                     => $request->lat,
              'long'                    => $request->long,
            ];
            $seeks = $this->seek->create($datas);
            if (isset($request->community_id)) {
                if (isset($request->tags)) {
                    $allowedTags = $this->communityTags->where('community_id', $request->community_id)->pluck('tag_id')->toArray();
                    $allPresent = true;
                    foreach ($request->tags as $tag) {
                        if (!in_array($tag, $allowedTags)) {
                            $allPresent = false;
                            break;
                        }
                    }
            
                    if ($allPresent) {
                        $this->sharePostComunnity($request->community_id, $postId['createdPostId']);
                    } else {
                        return $this->sendError('Post Tag And Community Tag Not Match', 'Validation Error.');
                    }
                } else {
                    $this->sharePostComunnity($request->community_id, $postId['createdPostId']);
                }
            }
            if (isset($request->tags)) {
                foreach ($request->tags as $key => $value) {
                    $this->tags($value,$postId['createdPostId']);                    
                }                
            }
            if (isset($request->images)) {
                foreach ($request->images as $key => $value) {
                    $mimeType = $value->getClientMimeType();
                    $unique = substr(str_shuffle("0123456789"), 0, 4);
                    if (str_starts_with($mimeType, 'image/')) {
                        $path = 'admin/home/seek';
                        $data = [
                            'posts_id'      => $postId['createdPostId'],
                            'image'        => isset($value) ? fileUploadProfile($path , $value, $unique) : '',
                        ];
                    } elseif (str_starts_with($mimeType, 'video/')) {
                        $path = 'public/admin/home/seek';
                        $data = [
                            'posts_id'      => $postId['createdPostId'],
                            'image'        => isset($value) ? fileUploadVideo($path , $value, $unique,'admin/home/seek') : '',
                        ];
                    } else {
                       
                    }                   
                    
                    $this->seeksImages->create($data);                    
                }                
            }

            $user = $this->friend->where(function ($query) {$query->where('send_to', Auth::id())->orWhere('send_by', Auth::id());})->where('friends_status', '=', 1)->get();
            $auth = $this->user->where('id',Auth::id())->first();
            $body           = $auth->name .' Posted Smothing';
            $postIds = $postId['createdPostId'];
            foreach ($user as $key => $value) {
                if ($value->send_by != Auth::id()) {
                    $chaeckss = $this->userMuteNotification->where('mute_by',$value->send_by)->where('muted_to',Auth::id())->first();
                    if (!isset($chaeckss)) {
                        $communityId              = isset($request->community_id) ? $request->community_id : null;
                        $postId                   = $postIds;
                        $notificationType         = isset($request->community_id) ?'CommunityPost':'Post';
                        $subtype                  = 'Seek';
                        $this->notificationStore($value->send_by,Auth::id(),$communityId,Auth::id(),$postId,$body,$notificationType,$subtype);
                    }

                    $checknoti = $this->notificationSetting->where('user_id',$value->send_by)->first();
                    if ($checknoti->post_notification == 1 && !isset($chaeckss)) {
                        $seeks['noti'] = $this->notification("Post !",$body, $value->send_by,['type'=>isset($request->community_id) ? 'CommunityPost':'Post','id'=>$postId,'subType'=>'Seek','community_id' => isset($request->community_id) ? $request->community_id : null,]);
                    }
                } elseif ($value->send_to != Auth::id()) {
                    $chaeckss = $this->userMuteNotification->where('mute_by',$value->send_to)->where('muted_to',Auth::id())->first();
                    if (!isset($chaeckss)) {
                        $communityId              = isset($request->community_id) ? $request->community_id : null;
                        $postId                   = $postIds;
                        $notificationType         = isset($request->community_id) ?'CommunityPost':'Post';
                        $subtype                  = 'Seek';
                        $this->notificationStore($value->send_to,Auth::id(),$communityId,Auth::id(),$postId,$body,$notificationType,$subtype);
                    }

                    $checknoti = $this->notificationSetting->where('user_id',$value->send_to)->first();
                    if ($checknoti->post_notification == 1 && !isset($chaeckss)) {
                        $seeks['noti'] = $this->notification("Post !",$body , $value->send_to,['type'=>isset($request->community_id) ? 'CommunityPost':'Post','id'=>$postId,'subType'=>'Seek','community_id' => isset($request->community_id) ? $request->community_id : null,]);
                    }
                }                
            }
            DB::commit();
            $success['post']        = 'craeted successfully' ;
            $success['post_uniq'] = !empty($postId['posts']);
            return $this->sendResponse($success, 'Seek Register successfully.');
        }catch(\Exception $ex)
        {
            DB::rollback();
            return $this->sendError('Validation Error.', 'Something Wrong'); 
        }
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

    public function  getReview(Request $request) {
        try {
            $validator = Validator::make($request->all(), [               
                'posts_id'      => 'required',
            ]);
        
            if ($validator->fails()) {
                return $this->sendError('Validation Error.', $validator->messages());
            }
            
            $relation = [
                'userProfile' => function ($q) {
                    $q->select('id', 'user_id', 'image');
                },
                'user' => function ($qa) {
                    $qa->select('id', 'name');
                },
                'stars',
                'bookMark',
            ];
            
            $success = $this->userPostReview
                ->with($relation)
                ->where('posts_id', $request->posts_id)
                ->paginate(10);
            
            $title = $this->seek
                ->where('posts_id', $request->posts_id)
                ->select('id', 'posts_id', 'review', 'description', 'lat', 'long', 'created_at')
                ->first();
            
            $response = [
                'success' => $success,
                'title'   => $title,
            ];
            
            return $this->sendResponse($response, 'Data Fetch successfully.');
        } catch (\Exception $ex) {
            return $this->sendError('Internal Server Error.', 'Something went wrong');
        }
    }
    public function starORbook(Request $request) {
        try {
            $validate = Validator::make($request->all(), [               
                'posts_id'          => 'required',
                'type'          => 'required',
            ]);
            if($validate->fails()){
                return $this->sendError('Validation Error.', $validate->messages());
            }
            $check = $this->startReviews->where('user_id',Auth::id())->where('posts_id',$request->posts_id)->where('type',$request->type)->first();
            if (isset($check)) {
                $check->forceDelete();
                return $this->sendResponse("Message", 'successfully.');
            }
            $data = [
                'user_id'   => Auth::id(),
                'posts_id'  => $request->posts_id,
                'type'      => $request->type
            ];
            $success = $this->startReviews->create($data);
            return $this->sendResponse($success, 'Seek Register successfully.');
        }catch(\Exception $ex)
        {
            DB::rollback();
            return $this->sendError('Validation Error.', 'Something Wrong'); 
        }
    }
}
