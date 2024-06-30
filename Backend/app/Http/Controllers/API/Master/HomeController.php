<?php

namespace App\Http\Controllers\API\Master;

# Models
use App\Models\User;
use App\Models\Posts;
use App\Models\Votes;
use App\Models\Friend;
use App\Models\Appose;
use App\Models\Share;
use App\Models\Points;
use App\Models\SavedPost;
use App\Models\Comments;
use App\Models\Community;
use App\Models\SurveyAns;
use App\Models\BlockChat;
use App\Models\UserSerach;
use App\Models\UserProfile;
use App\Models\CommentReply;
use App\Models\CommentStar;
use App\Models\Notification;
use App\Models\FavouriteChat;
use App\Models\UserInterests;
use App\Models\UserPostReview;
use App\Models\CommentBookMark;
use App\Models\CommunityMembers;
use App\Models\PostUserExperience;
use App\Models\SharePostComunnity;
use App\Models\UserMuteNotification;
use App\Models\SurveyQuestionsOptions;
use App\Models\PostUserSelectBelowOption;

# Other Classes
use DB;
use Validator;
use Carbon\Carbon;
use Illuminate\Support\Arr;
use Illuminate\Http\Request;
use App\Traits\QueryTraits;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\API\BaseController as BaseController;

class HomeController extends BaseController
{
    use QueryTraits;
    #Bind Posts model
    protected $posts;

    public function __construct(
        User                        $user,
        Posts                       $posts,
        Votes                       $votes,
        Friend                      $friend,
        Appose                      $appose,
        Share                       $share,
        Points                       $point,
        SavedPost                   $savedPost,
        Comments                    $comments,
        Community                   $community,
        BlockChat                   $blockChat,
        SurveyAns                   $surveyAns,
        UserSerach                  $userSerach,
        FavouriteChat               $favouriteChat,
        CommentReply                $commentReply,
        CommentStar                 $commentStar,
        Notification                $notification,
        CommentBookMark             $commentBookMark,
        UserPostReview              $userPostReview,
        UserInterests               $userInterests,
        CommunityMembers            $communityMembers,
        SharePostComunnity          $sharePostComunnity,
        PostUserExperience          $postUserExperience,
        UserMuteNotification        $userMuteNotification,
        PostUserSelectBelowOption   $postUserSelectBelowOption,
        SurveyQuestionsOptions      $surveyoptions
        )
    {
        $this->user                          = $user;
        $this->posts                         = $posts;
        $this->votes                         = $votes;
        $this->friend                        = $friend;
        $this->appose                        = $appose;
        $this->share                    = $share;
        $this->point                    = $point;
        $this->savedPost                     = $savedPost;
        $this->comments                      = $comments;
        $this->blockChat                     = $blockChat;
        $this->community                     = $community;
        $this->surveyAns                     = $surveyAns;
        $this->userSerach                    = $userSerach;
        $this->commentStar                   = $commentStar;
        $this->notification                  = $notification;
        $this->commentReply                  = $commentReply;
        $this->userInterests                 = $userInterests;
        $this->favouriteChat                 = $favouriteChat;
        $this->surveyoptions                 = $surveyoptions;
        $this->userPostReview                = $userPostReview;
        $this->commentBookMark               = $commentBookMark;
        $this->communityMembers              = $communityMembers;
        $this->postUserExperience            = $postUserExperience;
        $this->sharePostComunnity            = $sharePostComunnity;
        $this->userMuteNotification          = $userMuteNotification;
        $this->postUserSelectBelowOption     = $postUserSelectBelowOption;
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
          
            $relations = ['day'];
            $allRelations = array_merge($relation, $repostrel,$relations);
            $today = Carbon::now();
            $post = $this->posts->with($allRelations)
            ->where(function($query) use ($today) {
                $query->whereNull('end_date')
                      ->orWhere('end_date', '=', '');

                $query->orWhere(function($subQuery) use ($today) {
                    $subQuery->whereNotNull('end_date')
                             ->where('end_date', '!=', '')
                             ->whereDate('end_date', '>=', $today);
                });
            });

            
            if ($request->type == 'mypost') {
                $post->where('user_id',Auth::id());
            }
            if ($request->type == 'otherPost') {
                $post->where('user_id',$request->user_id);
            }
            if ($request->community_id) {
                $check = $this->sharePostComunnity->where('community_id',$request->community_id)->pluck('posts_id');
                $post->whereIn('id',$check);
            }
            $userInterestTags = $this->userInterests->where('user_id', Auth::id())->pluck('interest_id');
            $myFriends = $this->friend->where(function ($query) {$query->where('send_to', Auth::id())->orWhere('send_by', Auth::id());})->where('friends_status', 1)->get();
                $myFriendsId = [];
                $myFriendsArray = [];

                foreach ($myFriends as $value) {
                    if(isset($value->sendto->userProfile) && isset($value->user->userProfile)){
                        $friendId = null;
                        $friendAddress = null;
                
                        if ($value->send_to != Auth::id()) {
                            $friendId = $value->send_to;
                            $friendAddress = $this->address($value->sendto->userProfile->lat, $value->sendto->userProfile->long);
                        } elseif ($value->send_by != Auth::id()) {
                            $friendId = $value->send_by;
                            $friendAddress = $this->address($value->user->userProfile->lat, $value->user->userProfile->long);
                        }
                        if ($friendId !== null) {
                            $myFriendsId[] = $friendId;
                            $myFriendsArray[] = $friendAddress['city'];
                        }
                    }
                    
                   
                }
            if ($request->homeFilter && !isset($request->key_word)) {
                $relation = ['userProfile'];
                $user = $this->user->with($relation)->where('id', Auth::id())->first();
                $userAddress = $this->address($user->userProfile->lat,$user->userProfile->long);
                  
                $currentLatitude = $user->userProfile->lat;
                $currentLongitude = $user->userProfile->long;
                $distance = 0.5; // 500 meters expressed in kilometers
                $postsdata = $this->posts->select('*')
                    ->selectRaw(
                        '(6371 * acos(cos(radians(?)) * cos(radians(lat)) * cos(radians(`long`) - radians(?)) + sin(radians(?)) * sin(radians(lat)))) AS distance',
                        [$currentLatitude, $currentLongitude, $currentLatitude]
                    )->having('distance', '<', $distance)
                    ->orderBy('distance')
                    ->pluck('id');

                        
                
                
                $userId = Auth::id();
                if ($request->homeFilter == 4) {
                //   $post->where('where_to_post_id', 4)
                //              ->where(function ($query) use ($userAddress, $userInterestTags) {
                //                  $query->where(function ($subQuery) use ($userAddress, $userInterestTags) {
                //                             $subQuery->whereNull('city')
                //                                       ->whereHas('postTags.tags', function ($q) use ($userInterestTags) {
                //                                           $q->whereIn('id', $userInterestTags);
                //                                       });
                //                         })
                //                         ->orWhere(function ($subQuery) use ($userAddress, $userInterestTags) {
                //                             $subQuery->where('city', $userAddress['city']);
                //                             // $subQuery->when($subQuery->getModel()->city === $userAddress['city'], function ($q) use ($userInterestTags) {
                //                             //     $q->orWhereHas('postTags.tags', function ($q) use ($userInterestTags) {
                //                             //         $q->whereIn('id', $userInterestTags);
                //                             //     });
                //                             // });
                //                         });
                //              });
                
                // $post->where('where_to_post_id', 4)
                //  ->where(function ($query) use ($userAddress) {
                //      $query->whereNotNull('city')
                //         ->where('city', '!=', '')
                //           ->where('city', 'LIKE', '%' . $userAddress['city'] . '%')
                //           ->orWhere(function ($querys) {
                //                   $querys->whereNull('city')
                //                         ->orWhere('city', '=', '')
                //                         ->where('where_to_post_id', 4);
                //               });
                //  });
               $post->where('where_to_post_id', 4)
                     ->where(function ($query) use ($userAddress) {
                         // Directly retrieve the posts if the user_id is the current authenticated user's ID
                         $query->where('user_id', Auth::id())
                               // If the user_id is not the current user, apply the city and address conditions
                               ->orWhere(function ($query) use ($userAddress) {
                                   $query->where('user_id', '!=', Auth::id())
                                            ->where(function ($subquery) use ($userAddress) {
                                               $subquery->whereNotNull('city')
                                                        ->where('city', '!=', '')
                                                        ->where('city', 'LIKE', '%' . $userAddress['city'] . '%')
                                                        ->orWhere(function ($subquery) use ($userAddress) {
                                                            $subquery->whereNotNull('address')
                                                                     ->where('address', '!=', '')
                                                                     ->where('address', 'LIKE', '%' . $userAddress['city'] . '%');
                                                        });
                                           })
                                             // Handle posts where the city is not specified but the address matches the user's city
                                             ->orWhere(function ($subquery) {
                       $subquery->whereNull('city')
                                ->orWhere('city', '=', '')
                                ->where(function ($innerQuery) {
                                    $innerQuery->whereNull('address')
                                               ->orWhere('address', '=', '');
                                });
                   });
                               });
                     });
// $post->where('where_to_post_id', 4)
//      ->where(function ($query) use ($userAddress) {
//          // Directly retrieve the posts if the user_id is the current authenticated user's ID
//          $query->where('user_id', Auth::id())
//               // If the user_id is not the current user, apply additional filtering
//               ->orWhere(function ($query) use ($userAddress) {
//                   // Check for non-empty city or address before applying conditions
//                   $query->where(function ($subquery) use ($userAddress) {
//                       $subquery->whereNotNull('city')
//                                 ->where('city', '!=', '')
//                                 ->where('city', 'LIKE', '%' . $userAddress['city'] . '%')
//                                 ->orWhere(function ($subquery) use ($userAddress) {
//                                     $subquery->whereNotNull('address')
//                                              ->where('address', '!=', '')
//                                              ->where('address', 'LIKE', '%' . $userAddress['city'] . '%');
//                                 });
//                   })
//                   // If city and address are both null or empty, don't apply any user-based conditions
//                   ->orWhere(function ($subquery) {
//                       $subquery->whereNull('city')
//                                 ->orWhere('city', '=', '')
//                                 ->where(function ($innerQuery) {
//                                     $innerQuery->whereNull('address')
//                                               ->orWhere('address', '=', '');
//                                 });
//                   });
//               });
//      });




     

                // $post->where('where_to_post_id', 4)
                //  ->where(function ($query) use ($userAddress, $userInterestTags) {
                //      $query->where(function ($subQuery) use ($userAddress, $userInterestTags) {
                //                 // Posts without a city, but matching interest tags
                //                 $subQuery->whereNull('city')
                //                           ->whereHas('postTags.tags', function ($q) use ($userInterestTags) {
                //                               $q->whereIn('id', $userInterestTags);
                //                           });
                //             })
                //             ->orWhere(function ($subQuery) use ($userAddress, $userInterestTags) {
                //                 // Posts with a matching city
                //                 $subQuery->where('city', $userAddress['city']);
                //                         //  ->whereHas('postTags.tags', function ($q) use ($userInterestTags) {
                //                              // Optionally, you could enforce that posts from the matching city
                //                              // also match the user's interest tags. If you don't need this restriction,
                //                              // just remove this whereHas condition.
                //                             //  $q->whereIn('id', $userInterestTags);
                //                         //  });
                //             });
                //  });

                }
                
                if ($request->homeFilter == 1) {
                    // Public search
                    // $post->where('where_to_post_id', 1)->where('city','LIKE','%'.$userAddress['city'].'%')
                    //         ->whereHas('postTags.tags', function ($q) use ($userInterestTags) {
                    //             $q->whereIn('id', $userInterestTags);
                    //         });
                    // $post->where('where_to_post_id', 1)->where(function ($query) use ($userAddress, $userInterestTags) {
                    //     $query->whereNotNull('city')
                    //           ->where('city', '!=', '')
                    //           ->where('city', 'LIKE', '%' . $userAddress['city'] . '%')
                    //           ->whereHas('postTags.tags', function ($q) use ($userInterestTags) {
                    //               $q->whereIn('id', $userInterestTags);
                    //           })
                    //           ->orWhere(function ($query) use ($userInterestTags) {
                    //               // Apply conditions for posts without a city.
                    //               $query->whereNull('city')
                    //                     ->orWhere('city', '=', '')
                    //                     ->whereHas('postTags.tags', function ($q) use ($userInterestTags) {
                    //                         $q->whereIn('id', $userInterestTags);
                    //                     });
                    //           });
                    // });
                    $post->where('where_to_post_id', 1)
                         ->where(function ($query) use ($userAddress, $userInterestTags) {
                             $query->where(function ($subquery) use ($userAddress, $userInterestTags) {
                                 $subquery->whereNotNull('city')
                                          ->where('city', '!=', '')
                                          ->where('city', 'LIKE', '%' . $userAddress['city'] . '%')
                                          ->whereHas('postTags.tags', function ($q) use ($userInterestTags) {
                                              $q->whereIn('id', $userInterestTags);
                                          });
                             })
                             ->orWhere(function ($subquery) use ($userInterestTags) {
                                 $subquery->where(function ($orSubQuery) {
                                     $orSubQuery->whereNull('city')
                                                ->orWhere('city', '=', '');
                                 })
                                 ->whereHas('postTags.tags', function ($q) use ($userInterestTags) {
                                     $q->whereIn('id', $userInterestTags);
                                 });
                             });
                         });
                }
                if($request->homeFilter == 2){
                    //  $post->where('where_to_post_id', 2)
                    //          ->where(function ($query) use ($myFriendsId) {
                    //                      $query->whereIn('user_id',$myFriendsId);
                    //                  })->whereHas('postTags.tags', function ($q) use ($userInterestTags) {
                    //             $q->whereIn('id', $userInterestTags);
                    //         });
                     $post->where('where_to_post_id', 2)
                             ->where(function ($query) use ($myFriendsId) {
                                         $query->whereIn('user_id',$myFriendsId);
                                     });
                        
                }
                if($request->homeFilter == 3){
                    $comminity = $this->communityMembers->where('user_id',Auth::id())->pluck('community_id');
                    if(isset($comminity) && $comminity->isNotEmpty()){
                        $post->where('where_to_post_id', 3)
                        ->where(function ($query) use ($userAddress, $comminity) {
                             $query->where(function ($subQuery) use ($userAddress, $comminity) {
                                 
                                        $subQuery->whereNull('city')
                                                  ->whereHas('sharePostComunnity', function ($q) use ($comminity) {
                                                      $q->whereIn('community_id', $comminity);
                                                  });
                                    })->orWhere(function ($subQuery) use ($userAddress, $comminity) {
                                        $subQuery->where('city', $userAddress['city']);
                                            $subQuery->when($subQuery->getModel()->city === $userAddress['city'], function ($q) use ($comminity) {
                                            $q->orWhereHas('sharePostComunnity', function ($q) use ($comminity) {
                                                $q->whereIn('community_id', $comminity);
                                            });
                                        });
                                    });
                             });
                    }else{
                         $post->whereHas('sharePostComunnity', function ($q) use ($comminity) {
                              $q->whereIn('community_id', $comminity);
                         });
                    }
                           
                    
                }
                if($request->homeFilter == 7){
                    $post->where('where_to_post_id', 7)->whereIn('id',$postsdata);
                }
                
            }
            
                    
            if ($request->key_word) {
                
                $validate = Validator::make($request->all(), [
                    'key_word'              => 'required',
                ]);
                if($validate->fails()){
                    return $this->sendError('Validation Error.', $validate->messages());
                }
                $check = $this->userSerach->where('user_id',Auth::id())->where('key_word','LIKE', '%' . $request->key_word . '%')->first();
                if (!isset($check)) {
                    $data = [
                        'user_id'   => Auth::id(),
                        'key_word'  => $request->key_word,
                    ];
                    $this->userSerach->create($data);
                }
                
                $searchTerm = $request->key_word;
                $post->where('where_to_post_id', $request->homeFilter);
                if ($request->homeFilter == 4) {
                         $post->where(function ($query) use ($searchTerm) {
                             $query->where(function ($subQuery) use ($searchTerm) {
                               $subQuery->where('city', 'LIKE', "%{$searchTerm}%")
                                        ->orWhere('address', 'LIKE', "%{$searchTerm}%");
                            })->orWhereHas('postTags.tags', function ($subQuery) use ($searchTerm) {
                               $subQuery->where('name', 'LIKE', "%{$searchTerm}%");
                            })->orWhereHas('postmaster', function ($query) use ($searchTerm) {
                                $query->where('name', 'LIKE', "%{$searchTerm}%");
                            })->orWhereHas('user', function ($query) use ($searchTerm) {
                                $query->where('name', 'LIKE', "%{$searchTerm}%");
                            })->orWhereHas('poll', function ($query) use ($searchTerm) {
                                $query->where('description', 'LIKE', "%{$searchTerm}%");
                            })->orWhereHas('poll', function ($query) use ($searchTerm) {
                                $query->where('question', 'LIKE', "%{$searchTerm}%");
                            })->orWhereHas('survey', function ($query) use ($searchTerm) {
                                $query->where('description', 'LIKE', "%{$searchTerm}%");
                            })->orWhereHas('survey.surveyQuestions', function ($query) use ($searchTerm) {
                                $query->where('question', 'LIKE', "%{$searchTerm}%");
                            })->orWhereHas('review', function ($query) use ($searchTerm) {
                                $query->where('description', 'LIKE', "%{$searchTerm}%");
                            })->orWhereHas('seek', function ($query) use ($searchTerm) {
                                $query->where('description', 'LIKE', "%{$searchTerm}%");
                            });
                        });
                }
                if($request->homeFilter == 1){
                    //Public Filter search
                   $post->whereHas('postTags.tags', function ($q) use ($userInterestTags) {
                                $q->whereIn('id', $userInterestTags);
                            })
                            ->where(function ($query) use ($searchTerm) {
                                $query->where(function ($subQuery) use ($searchTerm) {
                                   $subQuery->where('city', 'LIKE', "%{$searchTerm}%")->orWhere('address', 'LIKE', "%{$searchTerm}%");
                            })->orWhereHas('postTags.tags', function ($subQuery) use ($searchTerm) {
                               $subQuery->where('name', 'LIKE', "%{$searchTerm}%");
                            })->orWhereHas('postmaster', function ($query) use ($searchTerm) {
                                $query->where('name', 'LIKE', "%{$searchTerm}%");
                            })->orWhereHas('user', function ($query) use ($searchTerm) {
                                $query->where('name', 'LIKE', "%{$searchTerm}%");
                            })->orWhereHas('poll', function ($query) use ($searchTerm) {
                                $query->where('description', 'LIKE', "%{$searchTerm}%");
                            })->orWhereHas('poll', function ($query) use ($searchTerm) {
                                $query->where('question', 'LIKE', "%{$searchTerm}%");
                            })->orWhereHas('survey', function ($query) use ($searchTerm) {
                                $query->where('description', 'LIKE', "%{$searchTerm}%");
                            })->orWhereHas('survey.surveyQuestions', function ($query) use ($searchTerm) {
                                $query->where('question', 'LIKE', "%{$searchTerm}%");
                            })->orWhereHas('review', function ($query) use ($searchTerm) {
                                $query->where('description', 'LIKE', "%{$searchTerm}%");
                            })->orWhereHas('seek', function ($query) use ($searchTerm) {
                                $query->where('description', 'LIKE', "%{$searchTerm}%");
                            });
                    });
                }
                if($request->homeFilter == 2){
                    //my circle Filter search
                    $post->where(function ($query) use ($myFriendsId) {
                                 $query->whereIn('user_id',$myFriendsId);
                             })->where(function ($query) use ($searchTerm) {
                                $query->where(function ($subQuery) use ($searchTerm) {
                                   $subQuery->where('city', 'LIKE', "%{$searchTerm}%")->orWhere('address', 'LIKE', "%{$searchTerm}%");
                            })->orWhereHas('postTags.tags', function ($subQuery) use ($searchTerm) {
                               $subQuery->where('name', 'LIKE', "%{$searchTerm}%");
                            })->orWhereHas('postmaster', function ($query) use ($searchTerm) {
                                $query->where('name', 'LIKE', "%{$searchTerm}%");
                            })->orWhereHas('user', function ($query) use ($searchTerm) {
                                $query->where('name', 'LIKE', "%{$searchTerm}%");
                            })->orWhereHas('poll', function ($query) use ($searchTerm) {
                                $query->where('description', 'LIKE', "%{$searchTerm}%");
                            })->orWhereHas('poll', function ($query) use ($searchTerm) {
                                $query->where('question', 'LIKE', "%{$searchTerm}%");
                            })->orWhereHas('survey', function ($query) use ($searchTerm) {
                                $query->where('description', 'LIKE', "%{$searchTerm}%");
                            })->orWhereHas('survey.surveyQuestions', function ($query) use ($searchTerm) {
                                $query->where('question', 'LIKE', "%{$searchTerm}%");
                            })->orWhereHas('review', function ($query) use ($searchTerm) {
                                $query->where('description', 'LIKE', "%{$searchTerm}%");
                            })->orWhereHas('seek', function ($query) use ($searchTerm) {
                                $query->where('description', 'LIKE', "%{$searchTerm}%");
                            });
                        });
                }
                
                
            }
            if ($request->prefred_post) {
                $post->orderByRaw("id = $request->prefred_post DESC");
            }
            
            $today = Carbon::now();
            $details['list'] = $post->withCount('share')->orderBy('id', 'DESC')->paginate(20);
            foreach ($details['list'] as $key2 => $sss) {
                
                    $commentCount = $this->comments->where('posts_id',$sss->id)->count();
                    $shareCount = $this->share->where('posts_id',$sss->id)->count();
                    $pointCount = $this->point->where('posts_id',$sss->id)->count();
                    $apposeCount = $this->appose->where('posts_id',$sss->id)->count();
                    
                $details['list'][$key2]->comments_count = $commentCount;
                $details['list'][$key2]->share_count = $shareCount;
                $details['list'][$key2]->points_count = $pointCount;
                $details['list'][$key2]->oppose_count = $apposeCount;
                
                 if(isset($sss->repost)){
             $commentCount = $this->comments->where('posts_id', $sss->repost->posts_id)->count();
                $shareCount = $this->share->where('posts_id', $sss->repost->posts_id)->count();
                $pointCount = $this->point->where('posts_id', $sss->repost->posts_id)->count();
                $apposeCount = $this->appose->where('posts_id', $sss->repost->posts_id)->count();
        
                $sss->repost->posts->comments_count = $commentCount;
                $sss->repost->posts->share_count = $shareCount;
                $sss->repost->posts->points_count = $pointCount;
                $sss->repost->posts->oppose_count = $apposeCount;
                }
                 if(isset($sss->appose)){
                     $commentCount = $this->comments->where('posts_id', $sss->appose->posts_id)->count();
                $shareCount = $this->share->where('posts_id', $sss->appose->posts_id)->count();
                $pointCount = $this->point->where('posts_id', $sss->appose->posts_id)->count();
                $apposeCount = $this->appose->where('posts_id', $sss->appose->posts_id)->count();
        
                $sss->appose->posts->comments_count = $commentCount;
                $sss->appose->posts->share_count = $shareCount;
                $sss->appose->posts->points_count = $pointCount;
                $sss->appose->posts->oppose_count = $apposeCount;
                }
                
                $survey_count = $this->surveyAns->where('posts_id', $sss->id)->select(DB::raw('COUNT(DISTINCT user_id) AS occur'))->first()->occur;
                $sss->submitted_count = isset($survey_count) ? $survey_count : 0;
            }
            $friend = [];
            $checksss = $this->friend->where('friends_status', 1)->where(function($query) {$query->where('send_by', Auth::id())->orWhere('send_to', Auth::id());})->get();

            foreach ($checksss as $key => $value) {
                foreach ($details['list'] as $key2 => $sss) {
                    
                    if ($value->send_by != Auth::id()) {
                        if ($value->send_by == $sss->user->id) {
                            $sss['is_friend'] = ($value->friends_status == 1) ? 'Friend' : 'Requested' ;
                        }
                    } 
                    if($value->send_to != Auth::id()){
                        if ($value->send_to == $sss->user->id) {
                            $sss['is_friend'] = ($value->friends_status == 1) ? 'Friend' :  'Requested' ;
                        }
                    }
                }
                
            }

            return $this->sendResponse($details, 'Data save successfully.');            
        // }catch(\Exception $ex)
        // {
        //     return $this->sendError('Validation Error.', 'Something Wrong'); 
        // }
    }

    public function bookmarkGet(Request $request)
    {
        try {
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
                },
                'comments' => function($query) {
                    $relation = ['user.userProfile','commentStar'];
                    $query->with($relation);
                    $query->withCount(['commentStarCount']);
                    $query->whereHas('commentBook', function ($subQuery) {
                        $subQuery->where('user_id', Auth::id());
                    });
                    
                },
                'reviews' => function($query) {
                    $relation = ['user.userProfile','stars'];
                    $query->with($relation);
                    $query->whereHas('bookMark', function ($subQuery) {
                        $subQuery->where('user_id', Auth::id());
                    });
                    
                },
                
            ];

            $allRelations = array_merge($relation, $repostrel);

            $postId = $this->savedPost->where('user_id', Auth::id())->pluck('posts_id');
            $checkCommentBook = $this->comments->whereHas('commentBook',function ($qwe) {$qwe->where('user_id',Auth::id());})->pluck('posts_id');
            $checkuserPostReview = $this->userPostReview->whereHas('bookMark',function ($qwe) {$qwe->where('user_id',Auth::id());})->pluck('posts_id');
            // Convert collections to arrays and merge
            $mergedArray = array_merge($postId->toArray(), $checkCommentBook->toArray(), $checkuserPostReview->toArray());
            
            // Remove duplicate values to ensure unique post IDs
            $uniqueArray = array_unique($mergedArray);
            
            $post = $this->posts->with($allRelations)->whereIn('id',$uniqueArray)->select('id', 'post_master_id', 'user_id');
            $details['list'] = $post->orderBy('id', 'DESC')->paginate(20);
            
            $friend = [];
            $checksss = $this->friend->where('friends_status', 1)->where(function($query) {$query->where('send_by', Auth::id())->orWhere('send_to', Auth::id());})->get();
            foreach ($details['list'] as $key2 => $sss) {
                $survey_count = $this->surveyAns->where('posts_id', $sss->id)->select(DB::raw('COUNT(DISTINCT user_id) AS occur'))->first()->occur;
                $sss->submitted_count = isset($survey_count) ? $survey_count : 0;
            }
            foreach ($checksss as $key => $value) {
                foreach ($details['list'] as $key2 => $sss) {
                    if ($value->send_by != Auth::id()) {
                        if ($value->send_by == $sss->user->id) {
                            $sss['is_friend'] = ($value->friends_status == 1) ? 'Friend' : 'Requested' ;
                        }
                    } 
                    if($value->send_to != Auth::id()){
                        if ($value->send_to == $sss->user->id) {
                            $sss['is_friend'] = ($value->friends_status == 1) ? 'Friend' :  'Requested' ;
                        }
                    }
                }
                
            }

            return $this->sendResponse($details, 'Data save successfully.');            
        }catch(\Exception $ex)
        {
            return $this->sendError('Validation Error.', 'Something Wrong'); 
        }
    }


    public function getcomment(Request $request) {
        try{
            $validate = Validator::make($request->all(), [               
                'posts_id'              => 'required',
            ]);
            if($validate->fails()){
                return $this->sendError('Validation Error.', $validate->messages());
            }
            $rel = ['user','user.userProfile','commentStar'=>function ($qwe) {
                $qwe->where('user_id',Auth::id());
            },'commentBook'=>function ($qwe) {
                $qwe->where('user_id',Auth::id());
            },'commentReply.user.userProfile'];
            $success = $this->comments->with($rel)->withCount('commentStarCount')->where('posts_id',$request->posts_id)->paginate(10);
            return $this->sendResponse($success, 'Data Get successfully.');
        }catch(\Exception $ex)
        {
            return $this->sendError('Validation Error.', 'Something Wrong'); 
        }
    }
    public function surveyAns(Request $request) {
        // try {
            DB::beginTransaction();
            $validator = Validator::make($request->all(), [               
                'posts_id'      => 'required',
                'option_id'     => 'required', // Use * to validate each element in the array
            ]);
        
            if ($validator->fails()) {
                return $this->sendError('Validation Error.', $validator->messages());
            }
            $checkOptions = $this->surveyAns->where('user_id',Auth::id())->where('posts_id',$request->posts_id)->get();

            $checkSelectBelowOption = $this->postUserSelectBelowOption->where('user_id',Auth::id())->where('post_id',$request->posts_id)->get();

            $checkExperience = $this->postUserExperience->where('user_id',Auth::id())->where('post_id',$request->posts_id)->first();

            if ($checkOptions->isEmpty() && $checkSelectBelowOption->isEmpty() && !isset($checkExperience)) {
                $successData = [];
                foreach ($request->option_id as $key1 => $optionId) {
                    $check = $this->surveyoptions->where('id',$optionId)->first();
                    $data = [
                        'posts_id'    => $request->posts_id,
                        'question_id' => $check->survey_question_id,
                        'user_id'     => Auth::id(),
                        'option_id'   => $optionId,
                    ];
                    $successData[] = $this->surveyAns->create($data);

                    $datass = [
                        'post_id'        => $request->posts_id,
                        'que_id'         => $check->survey_question_id,
                        'user_id'        => Auth::id(),
                        'below_option'   => $request->below_option[$key1] ?? null,
                    ];
                    $this->postUserSelectBelowOption->create($datass);
                }        
                $datasssss = [
                    'post_id'        => $request->posts_id,
                    'user_id'        => Auth::id(),
                    'experience'     => $result = isset($request->experience) ? ($request->experience == 1 ? 1 : ($request->experience == 2 ? 2 : '')) : '',
                ];
                $this->postUserExperience->create($datasssss);
                DB::commit();
                return $this->sendResponse($successData, 'Data saved successfully.');
            }else {
                return $this->sendError('Massage', 'You alreday Ans This Survey');
            }
            
        // } catch (\Exception $ex) {
                DB::rollback();
        //     return $this->sendError('Internal Server Error.', 'Something went wrong');
        // }
    }    
    public function pollSelectBelow(Request $request){
        try {
            $checkSelectBelowOption = $this->postUserSelectBelowOption->where('user_id',Auth::id())->where('post_id',$request->posts_id)->get();
            if ($checkSelectBelowOption->isEmpty()) {
                $datass = [
                    'post_id'        => $request->posts_id,
                    'user_id'        => Auth::id(),
                    'below_option'   => $request->below_option,
                ];
                $this->postUserSelectBelowOption->create($datass);
            }else {
                return $this->sendError('Massage', 'You alreday Option This Survey');
            }
            
        } catch (\Exception $ex) {
            return $this->sendError('Internal Server Error.', $ex);
        }
    }
    public function perPost (Request $request) {
        try {
            $validator = Validator::make($request->all(), [               
                'posts_id'      => 'required',
            ]);
            if ($validator->fails()) {
                return $this->sendError('Validation Error.', $validator->messages());
            }
            $checkpost = $this->posts->where('id',$request->posts_id)->first();
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

            $success = $this->posts->with($allRelations)->withCount(['someOneExperience','myExperience','share'])->where('id',$request->posts_id)->first();
            
            
             $commentCount = $this->comments->where('posts_id',$success->id)->count();
                    $shareCount = $this->share->where('posts_id',$success->id)->count();
                    $pointCount = $this->point->where('posts_id',$success->id)->count();
                    $apposeCount = $this->appose->where('posts_id',$success->id)->count();
                    
                $success->comments_count = $commentCount;
                $success->share_count = $shareCount;
                $success->points_count = $pointCount;
                $success->oppose_count = $apposeCount;
                
                 if(isset($success->repost)){
             $commentCount = $this->comments->where('posts_id', $success->repost->posts_id)->count();
                $shareCount = $this->share->where('posts_id', $success->repost->posts_id)->count();
                $pointCount = $this->point->where('posts_id', $success->repost->posts_id)->count();
                $apposeCount = $this->appose->where('posts_id', $success->repost->posts_id)->count();
        
                $success->repost->posts->comments_count = $commentCount;
                $success->repost->posts->share_count = $shareCount;
                $success->repost->posts->points_count = $pointCount;
                $success->repost->posts->oppose_count = $apposeCount;
                }
                 if(isset($success->appose)){
                     $commentCount = $this->comments->where('posts_id', $success->appose->posts_id)->count();
                $shareCount = $this->share->where('posts_id', $success->appose->posts_id)->count();
                $pointCount = $this->point->where('posts_id', $success->appose->posts_id)->count();
                $apposeCount = $this->appose->where('posts_id', $success->appose->posts_id)->count();
        
                $success->appose->posts->comments_count = $commentCount;
                $success->appose->posts->share_count = $shareCount;
                $success->appose->posts->points_count = $pointCount;
                $success->appose->posts->oppose_count = $apposeCount;
                }
                
            
            $survey_count = $this->surveyAns->where('posts_id', $success->id)->select(DB::raw('COUNT(DISTINCT user_id) AS occur'))->first()->occur;
            $success->submitted_count = isset($survey_count) ? $survey_count : 0;
            return $this->sendResponse($success, 'Data fetch successfully.');
        } catch (\Exception $ex) {
            return $this->sendError('Internal Server Error.', 'Something went wrong');
        }
    }
    
    
    public function  othersProfile(Request $request){
        // try {
            $validator = Validator::make($request->all(), [
                'user_id' => 'required',
            ]);
            
            if ($validator->fails()) {
                return $this->sendError('Validation Error.', $validator->messages());
            }
            
            $userId = $request->user_id;
            $relations = ['userProfile'];
            $checkAuth = $this->user->with($relations)->where('id',Auth::id())->first();

            // Check if the user is a friend (sent by or sent to the authenticated user)
            $isFriend = $this->friend->where(function ($query) use ($userId) {
                $query->where('send_to', Auth::id())->where('send_by', $userId);
            })->orWhere(function ($query) use ($userId) {
                $query->where('send_by', Auth::id())->where('send_to', $userId);
            })->where(function ($query) {
                $query->where('friends_status', 1)->orWhere('friends_status', 3);
            })->first();

            $isFav          = $this->favouriteChat->where('user_id',Auth::id())->where('chat_with',$request->user_id)->exists();
            $isBlock        = $this->blockChat->where('user_id',Auth::id())->where('chat_with',$request->user_id)->exists();

            $relation = ['userProfile', 'interest.interest'];
            $success = $this->user->with($relation)
                ->withCount(['sendby'=>function ($q) {
                    $q->where('friends_status', 1);
                },'sendto'=>function ($q) {
                    $q->where('friends_status', 1);
                }])->where('id', $userId)->first();

            $success['total_friend_count'] = $success->sendby_count + $success->sendto_count;

            $lat1 = isset($checkAuth->userProfile->lat) ? $checkAuth->userProfile->lat :'';
            $lon1 = isset($checkAuth->userProfile->long) ? $checkAuth->userProfile->long :'';
            $lat2 = isset($success->userProfile->lat) ? $success->userProfile->lat :'';
            $lon2 = isset($success->userProfile->long) ? $success->userProfile->long :'';

            $distance = $this->disatanceCal($lat1,$lat2,$lon2,$lon1);
            $success['distance'] = round($distance);

            $authUserId = Auth::id();
            $requestUserId = $request->user_id;
            $com = [];
            $authArry = [];
            $req = $this->friend->where('send_to',$request->user_id)->orWhere('send_by',$request->user_id)->where('friends_status', 1)->get();
            $auth = $this->friend->where('send_to',Auth::id())->orWhere('send_by',Auth::id())->where('friends_status', 1)->get();
            foreach ($req as $friend) {
                if ($friend->send_to == $request->user_id) {
                    $com[] = $friend->send_by;
                    $whereExecuted = 'send_to';
                } elseif ($friend->send_by == $request->user_id) {
                    $com[] = $friend->send_to;
                    $whereExecuted = 'send_by';
                } else {
                    // Handle the case where neither 'send_to' nor 'send_by' match
                    $whereExecuted = 'unknown';
                }
            
                // Add $whereExecuted to the friend object or use it as needed
                $friend->whereExecuted = $whereExecuted;
            }
            foreach ($auth as $friend) {
                if ($friend->send_to == $authUserId) {
                    $authArry[] = $friend->send_by;
                    $whereExecuted = 'send_to';
                } elseif ($friend->send_by == $authUserId) {
                    $authArry[] = $friend->send_to;
                    $whereExecuted = 'send_by';
                } else {
                    // Handle the case where neither 'send_to' nor 'send_by' match
                    $whereExecuted = 'unknown';
                }
                // Add $whereExecuted to the friend object or use it as needed
                $friend->whereExecuted = $whereExecuted;
            }
            $commonElements = collect($com)->intersect($authArry);
            $real = ['userProfile'];
            $communeFriend = $this->user->with($real)->whereIn('id', $commonElements)->get();
            $relations = ['points', 'reviews'];
            $checkposts = $this->posts->withCount($relations)->where('user_id', $requestUserId)->get();
            $totalPointsCount = 0;
            $totalReviewsCount = 0;

            foreach ($checkposts as $post) {
                $totalPointsCount += $post->points_count;
                $totalReviewsCount += $post->reviews_count;
            }

            $totalCount = $totalPointsCount + $totalReviewsCount;
            
            $chekcBlock = $this->blockChat->where('user_id',$request->user_id)->where('chat_with',Auth::id())->exists();
            $response = [
                'is_friend'         => isset($isFriend->friends_status) ? ($isFriend->friends_status == '1' ? 'Friend' : ($isFriend->friends_status == '3' ? 'Requested' : '')): '',
                'is_Fav'            => $isFav,
                'is_Block'          => $isBlock,
                'is_me_Block'       => $chekcBlock,
                'data'              => $success,
                'communeFriend'     => $communeFriend,
                'points'            => $totalCount,
            ];

            
            return $this->sendResponse($response, 'Data Fetch successfully.');
            
        // } catch (\Exception $ex) {
        //     return $this->sendError('Internal Server Error.', 'Something went wrong');
        // }  
    }
    public function commentBookMark(Request $request) {
        $validator = Validator::make($request->all(), [
            'comment_id' => 'required',
        ]);
        
        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->messages());
        }
        $check = $this->commentBookMark->where('user_id',Auth::id())->where('comment_id', $request->comment_id)->first();
        if (isset($check)) {
            $check->forceDelete();
            return $this->sendResponse("Message", 'Comment Remove Book Mark successfully');
        }else {
            $data = [
                'user_id'       => Auth::id(),
                'comment_id'    => $request->comment_id,
            ];
            $response = $this->commentBookMark->create($data);
            return $this->sendResponse($response, 'Comment Book Mark successfully.');
        }        
    }
    public function commentStar(Request $request) {
        $validator = Validator::make($request->all(), [
            'comment_id' => 'required',
        ]);
        
        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->messages());
        }
        $check = $this->commentStar->where('user_id',Auth::id())->where('comment_id', $request->comment_id)->first();
        if (isset($check)) {
            $check->forceDelete();
            return $this->sendResponse("Message", 'Comment Remove Star successfully');
        }else {
            $data = [
                'user_id'       => Auth::id(),
                'comment_id'    => $request->comment_id,
            ];
            $response = $this->commentStar->create($data);
            return $this->sendResponse($response, 'Comment Star successfully.');
        }
    }
    public function commentReply(Request $request) {
        $validator = Validator::make($request->all(), [
            'comment_id' => 'required',
            'reply'      => 'required',
        ]);
        
        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->messages());
        }
        $data = [
            'user_id'       => Auth::id(),
            'reply'         => $request->reply,
            'comment_id'    => $request->comment_id,
        ];
        $response = $this->commentReply->create($data);
        return $this->sendResponse($response, 'Data Fetch successfully.');
    }
    public function recentSearchDelete(Request $request) {
        try{
           
            
            $user_id = Auth::user()->id;
            
            if(isset($request->search_id)){
                $success = $this->userSerach->where('id',$request->search_id)->forceDelete();
            }else{
                $success = $this->userSerach->where('user_id',$user_id)->forceDelete();
            }
            
            
            
            
            return $this->sendResponse("Meassage", 'Delete successfully.');
        }catch(\Exception $ex)
        {
            return $this->sendError('Validation Error.', 'Something Wrong'); 
        }
    }
    public function  notiget(Request $request){
        // try {
            $relation = ['sendBy.userProfile'=>function ($q) {
                $q->select('id','user_id','image');
            },'community',];
            $success = $this->notification->with($relation)->where('user_id',Auth::id())->orderBy('id', 'DESC')->paginate(25);
            foreach ($success as $key => $value) {
               $isMuted = $this->userMuteNotification->where('mute_by', Auth::id())->where('muted_to', $value->send_by)->exists();
                $value->mute_status = $isMuted ? 1 : 0;
                if ($value->notification_type == 'Post' || $value->notification_type == 'comment' || $value->notification_type == 'Like' || $value->notification_type == 'points' || $value->notification_type == 'Review') {
                    $relas = ['postmaster'];
                    $checkPost = $this->posts->with($relas)->where('id',$value->post_id)->first();
                    if ($value->subtype == 'Survey' || isset($checkPost->postmaster->name) && $checkPost->postmaster->name === 'Survey') {
                        $rel = ['survey.surveyQuestions'=>function ($q) {
                            $real=['surveyQuestionsImg'];
                            $q->with($real);
                        }];
                        $success->load($rel);
                    }elseif ($value->subtype == 'Poll'||isset($checkPost->postmaster->name) && $checkPost->postmaster->name === 'Poll') {
                        $rel = ['poll.pollimg'];
                        $success->load($rel);
                    }elseif($value->subtype == 'Review'||isset($checkPost->postmaster->name) && $checkPost->postmaster->name === 'Review'){
                        $rel = ['review.reviewImg'];
                        $success->load($rel);
                    }elseif ($value->subtype == 'Seek'||isset($checkPost->postmaster->name) && $checkPost->postmaster->name === 'Seek') {
                        $rel = ['seek.seekImg'];
                        $success->load($rel);
                    }
                }
            }
            return $this->sendResponse($success, 'Data Get successfully.');
        // } catch (\Throwable $th) {
        //     //throw $th;
        // }
    }
    public function changestatusnoti(Request $request) {
        try {
            $validator = Validator::make($request->all(), [
                'noti_id' => 'required',
            ]);
            
            if ($validator->fails()) {
                return $this->sendError('Validation Error.', $validator->messages());
            }
            $details =  $this->notification->where('id',$request->noti_id)->first();
            $details->status = 1 ;
            $details->save();
            return $this->sendResponse("message", 'Data Save successfully.');
        } catch (\Throwable $th) {
            //throw $th;
        }
    }
    public function muteUserNoti(Request $request) {
        try {
            $validator = Validator::make($request->all(), [
                'user_id' => 'required',
            ]);
            
            if ($validator->fails()) {
                return $this->sendError('Validation Error.', $validator->messages());
            }
            $check = $this->userMuteNotification->where('mute_by',Auth::id())->where('muted_to',$request->user_id)->first();
            if (isset($check)) {
                $check->forceDelete();
                return $this->sendResponse("message", 'User Unmute successfully.');
            }else {
                $data = [
                    'mute_by'   => Auth::id(),
                    'muted_to'  => $request->user_id
                ];
                $success = $this->userMuteNotification->create($data);
            }
            
            
            return $this->sendResponse($success, 'Data Deleted successfully.');
        } catch (\Throwable $th) {
            //throw $th;
        }
    }
    public function deletenoti(Request $request) {
        try {
            $validator = Validator::make($request->all(), [
                'noti_id' => 'required',
            ]);
            
            if ($validator->fails()) {
                return $this->sendError('Validation Error.', $validator->messages());
            }
            $this->notification->where('id',$request->noti_id)->delete();
            return $this->sendResponse("message", 'Data Deleted successfully.');
        } catch (\Throwable $th) {
            //throw $th;
        }
    }
    public function oppose(Request $request) {
        DB::beginTransaction();
        // try {
            $validate = Validator::make($request->all(), [               
            'posts_id'               => 'required',
            'where_to_post_id'       => 'required',
            'star'                   => 'required',
        ]);
        if($validate->fails()){
            return $this->sendError('Validation Error.', $validate->messages());
        }
        
        $check = $this->posts->where('id',$request->posts_id)->first();
        
        $repost = 0;
        $oppose = 1;
        $address = isset($request->address) ? $request->address : $check->address;
        $postId = $this->postCreate($check->post_master_id,$request->where_to_post_id,$request->day_id,$repost,$oppose,$address,$request->lat,$request->long);
        // return $check;
        
        $unique = substr(str_shuffle("0123456789"), 0, 4);
        $data = [
            'posts_id'                  => $request->posts_id,
            'appose_post_id'            => $postId['createdPostId'],
            'star'                      => $request->star,
            'reason'                    => $request->reason,
            'image'                     => isset($request->image) ? fileUploadProfile('admin/home/appose',$request->image, $unique) : '',
            'lat'                       => $request->lat,
            'long'                      => $request->long,
            'user_id'                   => $check->user_id,
        ];
        $success = $this->appose->create($data);
        DB::commit();
        return $this->sendResponse($success, 'Data save successfully.');
        // } catch (\Exception $ex) {
            DB::rollback();
            return $this->sendError('Validation Error.', $ex);
        // }
    }
    public function deletePost(Request $request) {
        try {
            $validate = Validator::make($request->all(), [               
            'posts_id'               => 'required',
        ]);
        if($validate->fails()){
            return $this->sendError('Validation Error.', $validate->messages());
        }
        $success = $this->posts->where('id',$request->posts_id)->delete();
        return $this->sendResponse($success, 'Post Delete Successfully.');
        } catch (\Throwable $th) {
            //throw $th;
        }
    }
    public function  postDetails(Request $request){
        try{
            $validate = Validator::make($request->all(), [               
                'post_id'              => 'required',
            ]);
            if($validate->fails()){
                return $this->sendError('Validation Error.', $validate->messages());
            }
            $post = $this->posts->where('id',$request->post_id);
            if ($request->post_id && $request->question_id) {
                $relation = [
                    'survey' => function ($q) use ($request) {
                        $q->select('id', 'posts_id', 'hyperlink', 'day_id', 'lat', 'long', 'description', 'anonymous_survey', 'experience_option', 'created_at');
                        $q->with([
                            'surveyQuestion' => function ($q) use ($request) {
                                $q->where('id', $request->question_id);
                                $q->with(['surveyQuestionsImages:survey_question_id,image','selectBelow'=>function ($qwe){
                                    $rel =['user.userProfile'];
                                    $qwe->with($rel);
                                    $qwe->where('below_option','!=','');
                                }]);
                            }
                        ]);
                    },
                ];

                $post->with($relation);

            }elseif($request->post_id){
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
                    },
                    'selectBelow.user.userProfile',
                ];
                $allRelations = array_merge($relation, $repostrel);

                $post->with($allRelations);
            }
            $success = $post->first();
            return $this->sendResponse( $success, 'Data Fetch successfully.');
        }catch(\Exception $ex)
        {
            return $this->sendError($ex, 'Something Wrong'); 
        }        
    }
    public function delaccount(Request $reuqest){
        try{
            $this->user->where('id',Auth::id())->forceDelete();
            return $this->sendResponse( "User Delete Successfully", 'Message');
        }catch(\Exception $ex)
        {
            return $this->sendError($ex, 'Something Wrong'); 
        }
        
    }
    
}
