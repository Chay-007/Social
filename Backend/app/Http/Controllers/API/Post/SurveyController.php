<?php

namespace App\Http\Controllers\API\Post;

# Models
use App\Models\Days;
use App\Models\User;
use App\Models\Tags;
use App\Models\Posts;
use App\Models\Survey;
use App\Models\Friend;
use App\Models\Category;
use App\Models\SurveyAns;
use App\Models\SurveyTags;
use App\Models\Notification;
use App\Models\CommunityTags;
use App\Models\SurveyQuestions;
use App\Models\NotificationSetting;
use App\Models\UserMuteNotification;
use App\Models\SurveyQuestionsImages;
use App\Models\SurveyQuestionsOptions;

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

class SurveyController extends BaseController
{
    use FirebaseTraits;
    use QueryTraits;

    #Bind days model
    protected $days;
    
    #Bind tags model
    protected $tags;
    
    #Bind Pots model
    protected $pots;
    
    #Bind Category model
    protected $category;
    
    #Bind Survey model
    protected $survey;
    
    #Bind SurveyTags model
    protected $surveyTags;
    
    #Bind SurveyQuestions model
    protected $surveyQuestions;
    
    #Bind surveyQuestionsImages model
    protected $surveyQuestionsImages;
    
    #Bind surveyQuestionsOptions model
    protected $surveyQuestionsOptions;

    /**
      * Defining the default constructor for controller
      *
      */
    public function __construct(
        Days                            $days,
        User                            $user,
        Tags                            $tags,
        Posts                           $pots,
        Survey                          $survey,
        Friend                          $friend,
        Category                        $category,
        SurveyAns                       $surveyAns,
        SurveyTags                      $surveyTags,
        Notification                    $notification,
        CommunityTags                   $communityTags,
        SurveyQuestions                 $surveyQuestions,
        NotificationSetting             $notificationSetting,
        UserMuteNotification            $userMuteNotification,
        SurveyQuestionsImages           $surveyQuestionsImages,
        SurveyQuestionsOptions          $surveyQuestionsOptions
        )
    {
        $this->tags                             = $tags;
        $this->user                             = $user;
        $this->days                             = $days;
        $this->pots                             = $pots;
        $this->survey                           = $survey;
        $this->friend                           = $friend;
        $this->category                         = $category;
        $this->surveyAns                        = $surveyAns;
        $this->surveyTags                       = $surveyTags;
        $this->notification                     = $notification;
        $this->communityTags                    = $communityTags;
        $this->surveyQuestions                  = $surveyQuestions;
        $this->notificationSetting              = $notificationSetting;
        $this->userMuteNotification             = $userMuteNotification;
        $this->surveyQuestionsImages            = $surveyQuestionsImages;
        $this->surveyQuestionsOptions           = $surveyQuestionsOptions;
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
            // $validate = Validator::make($request->all(), [               
            //     'question'          => 'required',           
            //     'option'            => 'required',           
            // ]);
            // if($validate->fails()){
            //     return $this->sendError('Validation Error.', $validate->messages());
            // }
            $repost = 0;
            $oppose = 0;
            $postId = $this->postCreate(1,$request->where_to_post_id,$request->day_id,$repost,$oppose,$request->address,$request->lat,$request->long);
            $data = [
              'user_id'                 => Auth::id(),
              'posts_id'                => $postId['createdPostId'],
              'day_id'                  => isset($request->day_id) ? $request->day_id : 1,
              'anonymous_survey'        => isset($request->anonymous_survey) ? $request->anonymous_survey : 0,
              'description'             => $request->description,
              'experience_option'       => isset($request->experience_option) ? $request->experience_option : 0,
              'hyperlink'               => $request->hyperlink,
              'lat'                     => $request->lat,
              'long'                    => $request->long,
              'where_to_post_id'        => $request->where_to_post_id,
            ];
            $surveys = $this->survey->create($data);
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
            foreach ($request->question as $key => $value) {
                $surveyQuestion = [
                    'survey_id'             => $surveys->id,
                    'question'              => $value,
                    'multi_option_select'   => isset($request->multi_option_select[$key]) ? $request->multi_option_select[$key] : 0,
                    'below_option'          => isset($request->below_option[$key]) ? 1 : 0,
                ];
            
                $surveyquecheck = $this->surveyQuestions->create($surveyQuestion);
                    if ($request->hasFile("questionImages.$key")) {
                        $files = $request->file("questionImages.$key");
                        foreach ($files as $key1 => $values) {
                            $unique = substr(str_shuffle("0123456789"), 0, 4);
                            $mimeType = $values->getClientMimeType();
                            $path = 'admin/home/surveyQuestion';
                            $queImages = [
                                'survey_question_id' => $surveyquecheck->id,
                                'image' => '',
                            ];
                
                            if (str_starts_with($mimeType, 'image/')) {
                                $queImages['image'] = isset($values) ? fileUploadProfile($path, $values, $unique) : '';
                            } elseif (str_starts_with($mimeType, 'video/')) {
                                $path = 'public/admin/home/surveyQuestion';
                                $queImages['image'] = isset($values) ? fileUploadVideo($path, $values, $unique, 'admin/home/surveyQuestion') : '';
                            }
                
                            $this->surveyQuestionsImages->create($queImages);
                        }
                    }
                    
                    foreach ($request->options[$key] as $key2 => $valuess) {
                       $options = [
                            'survey_question_id' => $surveyquecheck->id,
                            'options' => $valuess,
                        ];
                    
                        if ($request->hasFile("optionImages.$key.$key2") && $request->file("optionImages.$key.$key2")->isValid()) {
                            $file = $request->file("optionImages.$key.$key2");
                            $unique = substr(str_shuffle("0123456789"), 0, 4);
                            $mimeType = $file->getClientMimeType();
                    
                            if (str_starts_with($mimeType, 'image/')) {
                                $path = 'admin/home/surveyOption';
                                $uploadedFilePath = fileUploadProfile($path, $file, $unique);
                            } elseif (str_starts_with($mimeType, 'video/')) {
                                $path = 'public/admin/home/surveyOption';
                                $uploadedFilePath = fileUploadVideo($path, $file, $unique, 'admin/home/surveyOption');
                            } else {
                                $uploadedFilePath = '';
                            }
                            $options['image'] = $uploadedFilePath;
                        }
                    
                        $this->surveyQuestionsOptions->create($options);
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
                        $subtype                  = 'Survey';
                        $this->notificationStore($value->send_by,Auth::id(),$communityId,Auth::id(),$postId,$body,$notificationType,$subtype);
                    }

                    $checknoti = $this->notificationSetting->where('user_id',$value->send_by)->first();
                    if ($checknoti->post_notification == 1 && !isset($chaeckss)) {
                        $surveys['noti'] = $this->notification("Post !", $body, $value->send_by,['type'=>isset($request->community_id) ? 'CommunityPost' : 'Post','id'=>$postId,'subType'=>'Survey','community_id' => isset($request->community_id) ? $request->community_id : null,]);
                    }
                }elseif ($value->send_to != Auth::id()) {

                    $chaeckss = $this->userMuteNotification->where('mute_by',$value->send_to)->where('muted_to',Auth::id())->first();
                    if (!isset($chaeckss)) {
                        $communityId              = isset($request->community_id) ? $request->community_id : null;
                        $postId                   = $postIds;
                        $notificationType         = isset($request->community_id) ?'CommunityPost':'Post';
                        $subtype                  = 'Survey';
                        $this->notificationStore($value->send_to,Auth::id(),$communityId,Auth::id(),$postId,$body,$notificationType,$subtype);
                    }
                    $checknoti = $this->notificationSetting->where('user_id',$value->send_to)->first();
                    if ($checknoti->post_notification == 1 && !isset($chaeckss)) {
                        $surveys['noti'] = $this->notification("Post !", $body, $value->send_to,['type'=>isset($request->community_id) ? 'CommunityPost' : 'Post','id'=>$postId,'subType'=>'Survey','community_id' => isset($request->community_id) ? $request->community_id : null,]);
                    }
                }                
            }
            DB::commit();
            $success['post']        = 'craeted successfully' ;
            $success['post_uniq'] = !empty($postId['posts']);
            return $this->sendResponse($success, 'Survey Register successfully.');
        /*}catch(\Exception $ex)
        {*/
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
    public function getDay(Request $request){
        try {
            $success['list']   = $this->days->where('status',1)->get();
            return $this->sendResponse($success, 'Day Get successfully.');
        }catch(\Exception $ex)
        {
            return $this->sendError('Validation Error.', 'Something Wrong'); 
        }
    }
    public function getTags(Request $request){
        try {
            $success['list'] = $this->tags->where('status', 1)->where(function ($query) {
                $query->where('user_id', Auth::id())
                        ->orWhere('user_id', 1);
                })->paginate(10);
            return $this->sendResponse($success, 'Day Get successfully.');
        }catch(\Exception $ex)
        {
            return $this->sendError('Validation Error.', 'Something Wrong'); 
        }
    }

    public function getComunityTags(Request $request){
        try {
            $relation = ['tag'];
            $success['list'] = $this->category->with($relation)->where('status', 1)->get();
            return $this->sendResponse($success, 'Tag Get successfully.');
        }catch(\Exception $ex)
        {
            return $this->sendError('Validation Error.', 'Something Wrong'); 
        }
    }
    public function addtags(Request $request) {
        try {
            $validate = Validator::make($request->all(), [
                'tags'            => 'required',
                'category_id'     => 'required',
            ]);

            if ($validate->fails()) {
                return $this->sendError('Validation Error.', $validate->messages());
            }
            foreach ($request->tags as $key => $value) {
                $data = [
                    'category_id'               => $request->category_id,
                    'user_id'                   => Auth::id(),
                    'name'                      => $value,
                    'status'                    => '1',
                ];
                #store the newly creted resoures
                $success =  $this->tags->create($data);
            }
           
            return $this->sendResponse($success, 'Day Get successfully.');
        }catch(\Exception $ex)
        {
            return $this->sendError('Validation Error.', 'Something Wrong'); 
        }
        
    }
    public function category(Request $request) {
        try {
            $success = $this->category->where('status',1)->get();
            return $this->sendResponse($success, 'category Get successfully.');
        }catch(\Exception $ex)
        {
            return $this->sendError('Validation Error.', 'Something Wrong'); 
        }
        
    }
    public function  getSurveyAns(Request $request) {
        try {
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
            $success = $this->surveyAns->with($rel)->selectRaw('user_id, MAX(created_at) as created_at')->where('posts_id', $request->post_id)->groupBy('user_id')->distinct()->orderBy('created_at', 'desc')->paginate(10);

            return $this->sendResponse($success, 'Data saved successfully.');
        } catch (\Exception $ex) {
            return $this->sendError('Internal Server Error.', 'Something went wrong');
        }
    }
}
