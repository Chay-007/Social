<?php

namespace App\Http\Controllers\API\Post;

# Models
use App\Models\Days;
use App\Models\User;
use App\Models\Tags;
use App\Models\Votes;
use App\Models\Posts;
use App\Models\Poll;
use App\Models\Friend;
use App\Models\Survey;
use App\Models\PollTags;
use App\Models\Category;
use App\Models\PollImages;
use App\Models\PollOptions;
use App\Models\Notification;
use App\Models\CommunityTags;
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

class PollController extends BaseController
{
    use QueryTraits;

    use FirebaseTraits;

    #Bind days model
    protected $days;
    
    #Bind tags model
    protected $tags;
    
    #Bind pots model
    protected $pots;
    
    #Bind Friend model
    protected $friend;
    
    #Bind Poll model
    protected $poll;
    
    #Bind PollTags model
    protected $pollTags;
    
    #Bind PollImages model
    protected $pollImages;
    
    #Bind Category model
    protected $category;
    
    #Bind PollOptions model
    protected $pollOptions;

    /**
      * Defining the default constructor for controller
      *
      */
    public function __construct(
        Days                            $days,
        User                            $user,
        Tags                            $tags,
        Votes                           $vote,
        Posts                           $pots,
        Poll                            $poll,
        Survey                          $survey,
        Friend                          $friend,
        Category                        $category,
        PollTags                        $pollTags,
        pollImages                      $pollImages,
        pollOptions                     $pollOptions,
        Notification                    $notification,
        CommunityTags                   $communityTags,
        NotificationSetting             $notificationSetting,
        UserMuteNotification            $userMuteNotification
        )
    {
        $this->days                    = $days;
        $this->user                    = $user;
        $this->tags                    = $tags;
        $this->vote                    = $vote;
        $this->pots                    = $pots;
        $this->poll                    = $poll;
        $this->survey                  = $survey;
        $this->friend                  = $friend;
        $this->category                = $category;
        $this->pollTags                = $pollTags;
        $this->pollImages              = $pollImages;
        $this->pollOptions             = $pollOptions;
        $this->notification            = $notification;
        $this->communityTags           = $communityTags;
        $this->notificationSetting     = $notificationSetting;
        $this->userMuteNotification    = $userMuteNotification;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
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
        // try {
            $repost = 0;
            $oppose = 0;
            $postId = $this->postCreate(2,$request->where_to_post_id,$request->day_id,$repost,$oppose,$request->address,$request->lat,$request->long);

            $datas = [
              'user_id'                 => Auth::id(),
              'posts_id'                => $postId['createdPostId'],
              'day_id'                  => isset($request->day_id) ? $request->day_id : 1,
              'anonymous_survey'        => isset($request->anonymous_survey) ? $request->anonymous_survey : 0,
              'multi_option_select'     => isset($request->multi_option_select) ? $request->multi_option_select : 0,
              'below_option'            => isset($request->below_option) ? 1 : 0,
              'description'             => $request->description,
              'question'                => $request->question,
              'hyperlink'               => $request->hyperlink,
              'lat'                     => $request->lat,
              'long'                    => $request->long,
              'where_to_post_id'        => $request->where_to_post_id,
            ];
            $polls = $this->poll->create($datas);
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
            if (isset($request->share_user_id)) {
                foreach ($request->share_user_id as $key => $value) {
                    $this->pollUser($value,$postId['createdPostId']);                    
                }                
            }
        
            if ($request->hasFile("questionImages")) {
                foreach ($request->questionImages as $key1 => $values) {
                    $unique = substr(str_shuffle("0123456789"), 0, 4);
                    $mimeType = $values->getClientMimeType();
                    if (str_starts_with($mimeType, 'image/')) {
                        $path = 'admin/home/pollQuestion';
                        $queImages = [
                            'poll_id'               => $polls->id,
                            'image'                 => isset($values) ? fileUploadProfile($path , $values, $unique) : '',
                        ];                        

                    } elseif (str_starts_with($mimeType, 'video/')) {
                        $path = 'public/admin/home/pollQuestion';
                        $queImages = [
                            'poll_id'               => $polls->id,
                            'image'                 => isset($values) ? fileUploadVideo($path , $values, $unique,'admin/home/pollQuestion') : '',
                        ];
                        

                    } else {

                    }                   
                    $this->pollImages->create($queImages);
                }
            }
            
            foreach ($request->options as $key2 => $valuess) {
               $options = [
                    'poll_id' => $polls->id,
                    'options' => $valuess,
                ];
            
                if ($request->hasFile("optionImages.$key2") && $request->file("optionImages.$key2")->isValid()) {
                    $file = $request->file("optionImages.$key2");
                    $unique = substr(str_shuffle("0123456789"), 0, 4);
                    $mimeType = $file->getClientMimeType();
            
                    if (str_starts_with($mimeType, 'image/')) {
                        $path = 'admin/home/pollOption';
                        $uploadedFilePath = fileUploadProfile($path, $file, $unique);
                    } elseif (str_starts_with($mimeType, 'video/')) {
                        $path = 'public/admin/home/pollOption';
                        $uploadedFilePath = fileUploadVideo($path, $file, $unique, 'admin/home/surveyOption');
                    } else {
                        $uploadedFilePath = '';
                    }
                    $options['image'] = $uploadedFilePath;
                }
            
                $this->pollOptions->create($options);
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
                        $subtype                  = 'Poll';
                        $this->notificationStore($value->send_by,Auth::id(),$communityId,Auth::id(),$postId,$body,$notificationType,$subtype);
                    }

                    $checknoti = $this->notificationSetting->where('user_id',$value->send_by)->first();
                    if ($checknoti->post_notification == 1 && !isset($chaeckss)) {
                        $this->notification("Post !", $body, $value->send_by,['type'=> isset($request->community_id) ?'CommunityPost':'Post','id'=>$postId,'subType'=>'Poll','community_id' => isset($request->community_id) ? $request->community_id : null,]);
                    }
                } elseif ($value->send_to != Auth::id()) {

                    $chaeckss = $this->userMuteNotification->where('mute_by',$value->send_to)->where('muted_to',Auth::id())->first();
                    if (!isset($chaeckss)) {
                        $communityId              = isset($request->community_id) ? $request->community_id : null;
                        $postId                   = $postIds;
                        $notificationType         = isset($request->community_id) ?'CommunityPost':'Post';
                        $subtype                  = 'Poll';
                        $this->notificationStore($value->send_to,Auth::id(),$communityId,Auth::id(),$postId,$body,$notificationType,$subtype);
                    }
                    $checknoti = $this->notificationSetting->where('user_id',$value->send_to)->first();
                    if ($checknoti->post_notification == 1 && !isset($chaeckss)) {
                        $this->notification("Post !",$body , $value->send_to,['type'=> isset($request->community_id) ?'CommunityPost':'Post','id'=>$postId,'subType'=>'Poll','community_id' => isset($request->community_id) ? $request->community_id : null,]);
                    }
                }                
            }            
            DB::commit();
            $success['post']        = 'craeted successfully' ;
            $success['post_uniq'] = !empty($postId['posts']);
            return $this->sendResponse($success, 'Poll Register successfully.');
        // }catch(\Exception $ex)
        // {
            DB::rollback();
            return $this->sendError('Validation Error.', $ex); 
        // }
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
    public function vote(Request $request) {
        // try {
            $validate = Validator::make($request->all(), [               
                'post_id'               => 'required',
                'option_id'             => 'required',
            ]);
            if($validate->fails()){
                return $this->sendError('Validation Error.', $validate->messages());
            }
            $check = $this->vote->where('user_id',Auth::id())->where('posts_id',$request->post_id)->where('option_id',$request->option_id)->first();
            if (isset($check)) {
                $check->delete();
                return $this->sendResponse("Message", 'delete successfully.');
            }else {
                    $chackChoices = $this->poll->where('posts_id',$request->post_id)->first();
                    if ($chackChoices->multi_option_select != 1) {
                        $checkss = $this->vote->where('user_id',Auth::id())->where('posts_id',$request->post_id)->forcedelete();
                    }
                        $data = [
                            'user_id'       => Auth::id(),
                            'posts_id'       => $request->post_id,
                            'option_id'     => $request->option_id,
                        ]; 
                        $success = $this->vote->create($data);
             
                return $this->sendResponse($success, 'Data save successfully.');
            }
            
        // }catch(\Exception $ex)
        // {
        //     return $this->sendError('Validation Error.', 'Something Wrong'); 
        // }
    }
    public function getvote(Request $request){
        // try {
            $validate = Validator::make($request->all(), [               
                'post_id'               => 'required',
            ]);
            if($validate->fails()){
                return $this->sendError('Validation Error.', $validate->messages());
            }
            $rel = ['user'=>function ($q) {
                $re = ['userProfile'=>function ($q) {
                    $q->select('id','user_id','image');
                }];
                $q->with($re);
                $q->select('id','name');
            },];
            $success = $this->vote->with($rel)->selectRaw('user_id, MAX(created_at) as created_at')->where('posts_id', $request->post_id)->groupBy('user_id')->distinct()->orderBy('created_at', 'desc')->paginate(10);

        return $this->sendResponse($success, 'Data saved successfully.');            
        // }catch(\Exception $ex)
        // {
        //     return $this->sendError('Validation Error.', 'Something Wrong'); 
        // }
    }
}
