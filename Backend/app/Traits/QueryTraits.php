<?php

namespace App\Traits;

# Models
use Carbon\Carbon;
use App\Models\Days;
use App\Models\Posts;
use App\Models\PostTags;
use App\Models\PollUsers;
use App\Models\Notification;
use App\Models\SharePostComunnity;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;

trait QueryTraits {

	function sharePostComunnity($community,$postId){
            $data = [
                'community_id'  => $community,
                'posts_id'      => $postId
            ];
            SharePostComunnity::create($data);
        	
    }
	function postCreate($postMasterId,$whereToPostId,$day,$repost,$oppose,$address,$lat,$long){
	    $checkDate = Days::where('id', $day)->first();
	    if($checkDate){
	        $daysToAdd = (int) $checkDate->name;
            $endDate = Carbon::now()->addDays($daysToAdd);
	    }else{
	        $endDate = '';
	    }
        if (isset($lat) && isset($long)) {
            $postAddress = $this->address($lat,$long);
        }else {
            $postAddress['city'] = '';
        }
        $postss = [
            'post_master_id'             => $postMasterId,
            'user_id'                    => Auth::id(),
            'where_to_post_id'           => $whereToPostId,
            'day_id'                     => $day,
            'repost_status'              => $repost,
            'oppose'                     => $oppose,
            'address'                    => $address,
            'lat'                        => $lat,
            'long'                       => $long,
            'city'                       => $postAddress['city'],
            'end_date'                   => $endDate,
        ];
        $postId = Posts::create($postss);

        $currentLatitude = $lat ?? 0;
        $currentLongitude = $long ?? 0; 
        $distance = 50;
        $postData = Posts::select('*')
            ->selectRaw('(
                6371000 * acos(
                    cos(radians(?)) * cos(radians(lat)) *
                    cos(radians(`long`) - radians(?)) +
                    sin(radians(?)) * sin(radians(lat))
                )
            ) AS distance', [$currentLatitude, $currentLongitude, $currentLatitude])
            ->having('distance', '<', $distance)
            ->orderBy('distance')
            ->get();

        $data = [
            'posts' => $postData,
            'createdPostId' => $postId->id, // Assuming $postId is the instance of the newly created post
        ];
        return $data;
        	
    }
	function relations(){
            $relation = [
                'user'=>function ($q) {
                    $re = ['userProfile'];
                    $q->with($re);
                    $q->select('id','name');
                },
                'postTags.tags',
                'experience',
                'seek'=>function ($q) {
                    $relations = [
                    'seekImages' =>function ($img){
                        $img->select('id','posts_id','image');
                    },
                    'saves'=>function ($saves){
                        $saves->where('user_id',Auth::id());                        
                    },
                    'review',
                    'day',
                    ];
                    $countrela = ['repost','share','reviews'];
                    $q->select('id','posts_id','day_id','review','suggestion','descriptionSecond','hyperLink','description','lat','long','created_at');
                    $q->with($relations);
                    $q->withCount($countrela);
                },
                'poll'=>function ($q){
                    $rel=['selectOption','pollImages'=>function ($qimage) {
                        $qimage->select('poll_id','image');
                    },
                    'pollOptions'=>function ($qoption){
                        $rel=['vote'];
                        $rela=['userVote'];
                        $qoption->with($rela)->select('id','poll_id','image','options');
                        $qoption->withCount($rel);
                    },
                    'saves'=>function ($save){
                        $save->where('user_id',Auth::id());                        
                    },
                    'day',
                    'vote',
                    'submitedCount' => function ($query) {
                        $query->selectRaw('count(*) as total, posts_id')
                              ->groupBy('posts_id');
                    },
                    ];
                    $countrela = ['comments'=> function ($query) {
                        $query->selectRaw('count(*) as total, posts_id')
                              ->groupBy('posts_id');
                    },'repost','share','votes'];
                    $q->select('id','posts_id','day_id','description','hyperlink','question','anonymous_survey','multi_option_select','below_option','lat','long','created_at');
                    $q->with($rel);
                    $q->withCount($countrela);
                },
                'survey'=>function ($q) {
                    $rel = ['surveyQuestions'=>function ($q) {
                        $count = ['surveyQuestionsAns'=>function ($q){
                            $q->select(\DB::raw('COUNT(question_id) as survey_questions_ans_count '));
                        },];
                        $q->select('id','survey_id','question','multi_option_select','below_option');
                        $q->withCount($count);
                    },
                    'surveyQuestions.surveyQuestionsImages'=> function ($qimage) {
                        $qimage->select('survey_question_id', 'image');
                    },
                    'surveyQuestions.surveyQuestionsOption'=>function ($q){
                        $real = ['ans'=>function ($anss){
                            $anss->where('user_id',Auth::id());
                        }];
                        $count = ['ansers'];
                        $q->select('id','survey_question_id','image','options');   
                        $q->with($real);   
                        $q->withCount($count);   
                    },
                    'surveyQuestions.selectOption',
                    'saves'=>function ($save){
                        $save->where('user_id',Auth::id());                        
                    },
                    'surveyAns'=>function ($save){
                        $save->where('user_id',Auth::id());
                    },
                    'day',
                    ];
                    $countrela = ['comments','repost','share','vote'=>function ($q){
                        $q->select(\DB::raw('COUNT(DISTINCT posts_id) as vote_count'));
                    },'submitedCount' => function ($query) {
                        $query->selectRaw('count(*) as total, posts_id')
                              ->groupBy('posts_id');
                    }];
                    $q->select('id','posts_id','hyperlink','day_id','lat','description','long','anonymous_survey','experience_option','created_at');
                    $q->with($rel);
                    $q->withCount($countrela);
                },
                'review'=>function($q){
                    $relation = [
                        'reviewImages'=>function ($img) {
                            $img->select('id','posts_id','image');
                        },
                        'points'=>function ($qss){
                            $qss->where('user_id',Auth::id());                            
                        },
                        'saves'=>function ($save){
                            $save->where('user_id',Auth::id());                        
                        },
                    ];
                    $q->select('id','posts_id','review','opinion','product_service_que','description','reating','hyper_link','online_product_service','recommend','beware','lat','long','created_at');
                    $q->with($relation);
                },
                'friend',
                'sharePostComunnity'
            ];
        	return $relation;
    }
	
    function notificationStore($userId,$sendBy,$communityId,$myId,$postId,$body,$notificationType,$subtype){
            $data = [
                'user_id'                   => $userId,
                'send_by'                   => $sendBy,
                'community_id'              => $communityId,
                'my_id'                     => $myId,
                'post_id'                   => $postId,
                'body'                      => $body,
                'notification_type'         => $notificationType,
                'subtype'                   => $subtype,
                'status'                    => 0
            ];
            Notification::create($data);
        	
    }

	function tags($tagsId,$postId){
            $data = [
                'tags_id'       => $tagsId,
                'post_id'       => $postId
            ];
            PostTags::create($data);
        	
    }
	function pollUser($userId,$postId){
            $data = [
                'user_id'       => $userId,
                'post_id'       => $postId
            ];
            PollUsers::create($data);
        	
    }
    function disatanceCal($lat1, $lon1, $lat2, $lon2) {
        if (!isset($lat1, $lon1, $lat2, $lon2)) {
            return 'One or more coordinates are not set';
        }
    
        $lat1 = deg2rad($lat1);
        $lon1 = deg2rad($lon1);
        $lat2 = deg2rad($lat2);
        $lon2 = deg2rad($lon2);
    
        $dlat = $lat2 - $lat1;
        $dlon = $lon2 - $lon1;
    
        $a = sin($dlat / 2) ** 2 + cos($lat1) * cos($lat2) * sin($dlon / 2) ** 2;
        $c = 2 * atan2(sqrt($a), sqrt(1 - $a));
    
        $radius = 6371.0; // Radius of Earth in kilometers
    
        $distance = $radius * $c;
        return $distance;
    }

	function address($lat,$long){
	    
	    $apiEndpoint = 'https://maps.googleapis.com/maps/api/geocode/json';
        $apiKey = 'AIzaSyBDH4cr0QOUxyinBRPLRl60dGEhiIVfu_c'; // Replace with your actual API key
        $requestUrl = "{$apiEndpoint}?latlng={$lat},{$long}&key={$apiKey}";
        $response = file_get_contents($requestUrl);
        $data = json_decode($response);
        
        // Initialize variables for country, state, and city
        $country = $state = $city = null;
        
        if (!empty($data->results)) {
            foreach ($data->results[0]->address_components as $component) {
                if (in_array('country', $component->types)) {
                    $country = $component->long_name;
                }
                if (in_array('administrative_area_level_1', $component->types)) {
                    $state = $component->long_name;
                }
                if (in_array('locality', $component->types)) {
                    $city = $component->long_name;
                }
            }
        }
        
        // Return an associative array with country, state, and city
        return [
            'country' => $country,
            'state' => $state,
            'city' => $city,
        ];

	}

}