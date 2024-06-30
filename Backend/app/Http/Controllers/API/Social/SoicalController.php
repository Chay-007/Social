<?php

namespace App\Http\Controllers\API\Social;

# Models
use App\Models\User;
use App\Models\Posts;
use App\Models\Comments;
use App\Models\Share;
use App\Models\Points;
use App\Models\Appose;
use App\Models\SurveyAns;
use App\Models\UserSerach;
use App\Models\UserProfile;
use App\Models\SurveyQuestionsOptions;

#Other Class
use DB;
use Validator;
use Carbon\Carbon;
use Illuminate\Support\Arr;
use Illuminate\Http\Request;
use App\Traits\QueryTraits;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;
use App\Http\Controllers\API\BaseController as BaseController;

class SoicalController extends BaseController
{

    use QueryTraits;

    #Bind Posts model
    protected $posts;

    public function __construct(
        User                        $user,
        Posts                       $posts,
        Share                       $share,
        Points                       $point,
        Appose                       $appose,
        Comments                    $comments,
        SurveyAns                   $surveyAns,
        UserProfile                 $userProfile,
        UserSerach                  $userSerach,
        SurveyQuestionsOptions      $surveyoptions
        )
    {
        $this->user                     = $user;
        $this->posts                    = $posts;
        $this->comments                 = $comments;
        $this->share                    = $share;
        $this->appose                    = $appose;
        $this->point                    = $point;
        $this->surveyAns                = $surveyAns;
        $this->userSerach               = $userSerach;
        $this->userProfile              = $userProfile;
        $this->surveyoptions            = $surveyoptions;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $relation = ['userProfile'];
        $check = $this->user->with($relation)->where('id', Auth::id())->first();
        $currentLatitude = $request->lat ?? $check->userProfile->lat;
        $currentLongitude = $request->long ?? $check->userProfile->long;
        $distance = 0.5; 
        
        $users = UserProfile::select('user_id')
            ->selectRaw('(6371 * acos(cos(radians(?)) * cos(radians(lat)) * cos(radians(`long`) - radians(?)) + sin(radians(?)) * sin(radians(lat)))) AS distance',
            [$currentLatitude, $currentLongitude, $currentLatitude])
            ->having('distance', '<', $distance)
            ->orderBy('distance')
            ->pluck('user_id');
        
        
        if(!isset($request->search_location)){
            $userPosts = $this->posts->whereIn('user_id', $users)->where('where_to_post_id', 7)->pluck('id');
            $postsData = $this->posts->select('*')->selectRaw('(6371 * acos(cos(radians(?)) * cos(radians(lat)) * cos(radians(`long`) - radians(?)) + sin(radians(?)) * sin(radians(lat)))) AS distance',
            [$currentLatitude, $currentLongitude, $currentLatitude])
            ->having('distance', '<', $distance)
            ->where('where_to_post_id', 7)
            ->orderBy('distance')
            ->pluck('id');
        }
        

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
            
            $countRelation = ['points' => function ($q) { 
                $q->select('posts_id',DB::raw("COUNT(posts_id) as points_count"))->groupBy('posts_id');
            }];

            
            if($request->search_location){
                $searchlocation = $request->search_location;
                $allRelations = array_merge($relation, $repostrel,$countRelation);
                $posts = $this->posts->with($allRelations)->where(function ($query) use ($searchlocation) {
                    $query->where('city', 'LIKE', '%'.$searchlocation.'%')
                          ->orWhere('address', 'LIKE', '%'.$searchlocation.'%');
                });
            }else{
                
                $allRelations = array_merge($relation, $repostrel,$countRelation);
                $posts = $this->posts->with($allRelations)->where('where_to_post_id', 7)->where(function($query) use ($userPosts, $postsData) {
                $query->whereIn('id', $userPosts->merge($postsData));
            });
            }
            if ($request->name) {
                
                $validate = Validator::make($request->all(), [
                    'name'              => 'required',
                ]);
                if($validate->fails()){
                    return $this->sendError('Validation Error.', $validate->messages());
                }
                $check = $this->userSerach->where('user_id',Auth::id())->where('key_word','LIKE', '%' . $request->name . '%')->first();
                if (!isset($check)) {
                    $data = [
                        'user_id'   => Auth::id(),
                        'key_word'  => $request->name,
                    ];
                    $this->userSerach->create($data);
                }
                $searchTerm = $request->name;
                $posts->where(function ($query) use ($searchTerm) {
                    $query->where('city', 'LIKE', '%'.$searchTerm.'%')
                          ->orWhere('address', 'LIKE', '%'.$searchTerm.'%')
                          ->orWhereHas('postTags.tags', function ($q) use ($searchTerm) {
                              $q->where('name', 'LIKE', '%'.$searchTerm.'%');
                          })
                          ->orWhereHas('postmaster', function ($q) use ($searchTerm) {
                              $q->where('name', 'LIKE', '%'.$searchTerm.'%');
                          })
                          ->orWhereHas('user', function ($q) use ($searchTerm) {
                              $q->where('name', 'LIKE', '%'.$searchTerm.'%');
                          })
                          ->orWhereHas('poll', function ($query) use ($searchTerm) {
                                $query->where('description', 'LIKE', '%'.$searchTerm.'%');
                          })
                          ->orWhereHas('survey', function ($query) use ($searchTerm) {
                            $query->where('description', 'LIKE','%'.$searchTerm.'%');
                          })
                          ->orWhereHas('review', function ($query) use ($searchTerm) {
                            $query->where('description', 'LIKE', '%'.$searchTerm.'%');
                          })
                          ->orWhereHas('seek', function ($query) use ($searchTerm) {
                            $query->where('description', 'LIKE', '%'.$searchTerm.'%');
                        });
                });
                            
            }
            $today = Carbon::now();
            $details['list'] = $posts->where(function($query) use ($today) {
                $query->whereNull('end_date')
                      ->orWhere('end_date', '=', '');
                
                $query->orWhere(function($subQuery) use ($today) {
                    $subQuery->whereNotNull('end_date')
                             ->where('end_date', '!=', '')
                             ->whereDate('end_date', '>=', $today);
                });
            })->orderBy('id', 'DESC')->paginate(20);
        
        $auth = $this->userProfile->where('user_id',Auth::id())->first();
        foreach ($details['list'] as $key => $value) {
           
            $commentCount = $this->comments->where('posts_id',$value->id)->count();
            $shareCount = $this->share->where('posts_id',$value->id)->count();
            $pointCount = $this->point->where('posts_id',$value->id)->count();
            $apposeCount = $this->appose->where('posts_id',$value->id)->count();
             
            $lat1 = isset($value->lat) ? deg2rad($value->lat) : 0;
            $lon1 = isset($value->long) ? deg2rad($value->long) : 0;
            $lat2 = isset($auth->lat) ? deg2rad($auth->lat) : 0;
            $lon2 = isset($auth->long) ? deg2rad($auth->long) : 0;
            
            // Calculate the great-circle distance in kilometers
            $distance = acos(sin($lat1) * sin($lat2) + cos($lat1) * cos($lat2) * cos($lon2 - $lon1)) * 6371;
            
            // Convert distance to meters
            $distanceInMeters = $distance * 1000;
            
            $details['list'][$key]->distance = round($distanceInMeters);
            $details['list'][$key]->comments_count = $commentCount;
            $details['list'][$key]->share_count = $shareCount;
            $details['list'][$key]->points_count = $pointCount;
            $details['list'][$key]->oppose_count = $apposeCount;
        }
        return $this->sendResponse($details, 'Data save successfully.');
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
    public function nearchat() {
        try {

            
        }catch(\Exception $ex)
        {
            return $this->sendError('Validation Error.', 'Something Wrong'); 
        }
    }
}
