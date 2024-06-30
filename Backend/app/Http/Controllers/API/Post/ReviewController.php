<?php

namespace App\Http\Controllers\API\Post;

# Models
use App\Models\User;
use App\Models\Posts;
use App\Models\Friend;
use App\Models\Review;
use App\Models\ReviewTags;
use App\Models\ReviewsImage;
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

class ReviewController extends BaseController
{
    use FirebaseTraits;
    use QueryTraits;

    #Bind pots model
    protected $pots;

    #Bind Review model
    protected $review;
    
    #Bind ReviewTags model
    protected $reviewTags;
    
    #Bind ReviewsImage model
    protected $reviewsImage;


    public function __construct(
        Posts                           $pots,
        User                            $user,
        Review                          $review,
        Friend                          $friend,
        ReviewTags                      $reviewTags,
        ReviewsImage                    $reviewsImage,
        Notification                    $notification,
        CommunityTags                   $communityTags,
        NotificationSetting             $notificationSetting,
        UserMuteNotification            $userMuteNotification
        )
    {
        $this->pots                    = $pots;
        $this->user                    = $user;
        $this->review                  = $review;
        $this->friend                  = $friend;
        $this->reviewTags              = $reviewTags;
        $this->reviewsImage            = $reviewsImage;
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
        // try {
            // $validate = Validator::make($request->all(), [               
            //     'question'          => 'required',           
            //     'option'            => 'required',           
            // ]);
            // if($validate->fails()){
            //     return $this->sendError('Validation Error.', $validate->messages());
            // }
            $repost = 0;
            $oppose = 0;
            $postId = $this->postCreate(3,$request->where_to_post_id,$request->day_id,$repost,$oppose,$request->address,$request->lat,$request->long);
            $datas = [
              'user_id'                             => Auth::id(),
              'posts_id'                            => $postId['createdPostId'],
              'where_to_post_id'                    => $request->where_to_post_id,
              'review'                              => isset($request->review) ? $request->review : 0,
              'opinion'                             => isset($request->opinion) ? $request->opinion : 0,
              'product_service_que'                 => $request->product_service_que,
              'description'                         => $request->description,
              'hyper_link'                          => $request->hyper_link,
              'reating'                             => $request->reating,
              'online_product_service'              => isset($request->online_product_service) ? $request->online_product_service : 0,
              'recommend'                           => isset($request->recommend) ? $request->recommend : 0,
              'beware'                              => isset($request->beware) ? $request->beware : 0,
              'lat'                                 => $request->lat,
              'long'                                => $request->long,
            ];
            $reviews = $this->review->create($datas);
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
                        $path = 'admin/home/review';
                        $data = [
                            'posts_id'      => $postId['createdPostId'],
                            'image'        => isset($value) ? fileUploadProfile($path , $value, $unique) : '',
                        ];
                    } elseif (str_starts_with($mimeType, 'video/')) {
                        $path = 'public/admin/home/review';
                        $data = [
                            'posts_id'      => $postId['createdPostId'],
                            'image'        => isset($value) ? fileUploadVideo($path , $value, $unique,'admin/home/review') : '',
                        ];
                    } else {
                    }                    
                   
                    $this->reviewsImage->create($data);                    
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
                        $subtype                  = 'Review';
                        $this->notificationStore($value->send_by,Auth::id(),$communityId,Auth::id(),$postId,$body,$notificationType,$subtype);
                    }
                    $checknoti = $this->notificationSetting->where('user_id',$value->send_by)->first();
                    if ($checknoti->post_notification == 1 && !isset($chaeckss)) {
                        $this->notification("Post !", $body , $value->send_by,['type'=>isset($request->community_id) ?'CommunityPost':'Post','id'=>$postId,'subType'=>'Review','community_id' => isset($request->community_id) ? $request->community_id : null,]);
                    }
                } elseif ($value->send_to != Auth::id()) {
                    $chaeckss = $this->userMuteNotification->where('mute_by',$value->send_to)->where('muted_to',Auth::id())->first();
                    if (!isset($chaeckss)) {
                        $communityId              = isset($request->community_id) ? $request->community_id : null;
                        $postId                   = $postIds;
                        $notificationType         = isset($request->community_id) ?'CommunityPost':'Post';
                        $subtype                  = 'Review';
                        $this->notificationStore($value->send_to,Auth::id(),$communityId,Auth::id(),$postId,$body,$notificationType,$subtype);
                    }
                    $checknoti = $this->notificationSetting->where('user_id',$value->send_to)->first();
                    if ($checknoti->post_notification == 1 && !isset($chaeckss)) {
                        $this->notification("Post !", $body , $value->send_to,['type'=>isset($request->community_id) ?'CommunityPost':'Post','id'=>$postId,'subType'=>'Review','community_id' => isset($request->community_id) ? $request->community_id : null,]);
                    }
                }                
            }
            DB::commit();
            $success['post']        = 'craeted successfully' ;
            $success['post_uniq'] = !empty($postId['posts']);
            return $this->sendResponse($success, 'Review Register successfully.');
        // }catch(\Exception $ex)
        // {
            DB::rollback();
            return $this->sendError('Validation Error.', 'Something Wrong'); 
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
    public function appose(Request $request) {
        try {
            
            $check = $this->vote->where('user_id',Auth::id())->where('posts_id',$request->post_id)->where('option_id',$request->option_id)->first();
            if (isset($check)) {
                $check->delete();
                return $this->sendResponse("Message", 'delete successfully.');
            }else {
                $checkss = $this->vote->where('user_id',Auth::id())->where('posts_id',$request->post_id)->first();
                    $data = [
                        'user_id'       => Auth::id(),
                        'posts_id'       => $request->post_id,
                        'option_id'     => $request->option_id,
                    ]; 
                if (isset($checkss)) {
                    $checkss->update($data);
                    $success = $this->vote->where('user_id',Auth::id())->where('posts_id',$request->post_id)->first();
                }else {
                    $success = $this->vote->create($data);
                }
                return $this->sendResponse($success, 'Data save successfully.');
            }
            
        }catch(\Exception $ex)
        {
            return $this->sendError('Validation Error.', 'Something Wrong'); 
        }
    }
}
