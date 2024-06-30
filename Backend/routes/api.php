<?php

#Other Classes
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

#Start Inialize Controller for 
use App\Http\Controllers\API\Master\HomeController;
use App\Http\Controllers\API\Master\MasterController;
use App\Http\Controllers\API\Home\SocialLoginController;
use App\Http\Controllers\API\Home\FrontendUserController;
use App\Http\Controllers\API\Post\SurveyController;
use App\Http\Controllers\API\Post\PollController;
use App\Http\Controllers\API\Post\SeekController;
use App\Http\Controllers\API\Post\ReviewController;
use App\Http\Controllers\API\Community\CommunityController;
use App\Http\Controllers\API\Circle\CircleController;
use App\Http\Controllers\API\Social\SoicalController;

/*

|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/ 

 #Auth Api
        Route::get('intrest', [MasterController::class, 'intrest']);
        Route::get('category', [MasterController::class, 'category']);
        Route::get('gender', [SocialLoginController::class, 'gender']);
        Route::post('chatimage', [SocialLoginController::class, 'chatimage']);
        Route::post('login', [FrontendUserController::class, 'login']);
        Route::post('signup', [FrontendUserController::class, 'register']);
        Route::get('bloodGroup', [SocialLoginController::class, 'bloodGroup']);
        Route::get('checkLogin', [FrontendUserController::class, 'checkLogin']);
        Route::post('socialLogin', [SocialLoginController::class, 'socialLogin']);
        Route::post('verifyGoogleToken', [SocialLoginController::class, 'verifyGoogleToken']);
        Route::post('verifyFacebookToken', [SocialLoginController::class, 'verifyFacebookToken']);
        Route::post('sendOtpEmail', [FrontendUserController::class, 'sendOtpEmail']);
        Route::post('forgetPassword', [FrontendUserController::class, 'forgetPassword']);

        Route::group(['middleware'   => ['auth:api']], function(){

                #Home controller API
                Route::get('userFriends', [SocialLoginController::class, 'userFriends']);
                Route::get('otherFriend', [SocialLoginController::class, 'otherFriend']);
                Route::post('userChatImages', [SocialLoginController::class, 'userChatImages']);

                #Home controller API
                Route::post('userProfile', [FrontendUserController::class, 'userProfile']);
                Route::post('notiSetting', [FrontendUserController::class, 'notiSetting']);
                Route::get('notiSetting', [FrontendUserController::class, 'getnotiSetting']);
                Route::post('editProfile', [FrontendUserController::class, 'editProfile']);
                Route::get('getProfile', [FrontendUserController::class, 'getProfile']);
                Route::get('getuser', [FrontendUserController::class, 'getusers']);
                Route::post('logout', [FrontendUserController::class, 'logout']);

                #Home controller API
                Route::post('tag', [MasterController::class, 'tag']);
                Route::post('friendRequest', [MasterController::class, 'friendRequest']);
                Route::post('removeFriend', [MasterController::class, 'removeFriend']);
                Route::get('wherePost', [MasterController::class, 'wherePost']);
                Route::get('getallUser', [MasterController::class, 'getallUser']);
                Route::Post('location', [MasterController::class, 'location']);
                Route::get('chatNear', [MasterController::class, 'chatNear']);
                Route::get('getaddress', [MasterController::class, 'getaddress']);
                Route::Post('comment', [MasterController::class, 'comment']);
                Route::Post('like', [MasterController::class, 'like']);
                Route::get('getserachKeyWord', [MasterController::class, 'getserachKeyWord']);
                Route::Post('share', [MasterController::class, 'share']);
                Route::Post('reportPosts', [MasterController::class, 'reportPosts']);
                Route::Post('points', [MasterController::class, 'points']);
                Route::Post('savepost', [MasterController::class, 'savepost']);
                Route::Post('requestStatusChange', [MasterController::class, 'requestStatusChange']);
                Route::Post('repost', [MasterController::class, 'repost']);
                Route::get('repostGet', [MasterController::class, 'repostGet']);
                Route::Post('userReview', [MasterController::class, 'userReview']);
                Route::get('discover', [MasterController::class, 'discover']);



                #Home controller API
                Route::get('getcomment', [HomeController::class, 'getcomment']);
                Route::post('commentStar', [HomeController::class, 'commentStar']);
                Route::post('commentReply', [HomeController::class, 'commentReply']);
                Route::post('commentBookMark', [HomeController::class, 'commentBookMark']);
                Route::post('recentSearchDelete', [HomeController::class, 'recentSearchDelete']);                
                Route::get('othersProfile', [HomeController::class, 'othersProfile']);
                Route::post('surveyAns', [HomeController::class, 'surveyAns']);
                Route::resource('home',HomeController::class);
                Route::get('getperPost',[HomeController::class,'perPost']);
                Route::get('notiget',[HomeController::class,'notiget']);
                Route::post('deletenoti',[HomeController::class,'deletenoti']);
                Route::post('changestatusnoti',[HomeController::class,'changestatusnoti']);
                Route::post('muteUserNoti',[HomeController::class,'muteUserNoti']);
                Route::post('oppose', [HomeController::class,'oppose']);
                Route::post('deletePost', [HomeController::class,'deletePost']);
                Route::post('pollSelectBelow', [HomeController::class,'pollSelectBelow']);
                Route::post('delaccount', [HomeController::class,'delaccount']);
                Route::get('bookmarkGet', [HomeController::class,'bookmarkGet']);
                Route::get('postDetails', [HomeController::class,'postDetails']);

                #Home controller API
                Route::get('getCommunityProfile', [CommunityController::class, 'getCommunityProfile']);
                Route::post('communityChatnoti', [CommunityController::class, 'communityChatnoti']);
                Route::get('communityDetail', [CommunityController::class, 'communityDetail']);                
                Route::resource('community', CommunityController::class);
                Route::Get('getnotInComunnityusers', [CommunityController::class, 'getnotInComunnityusers']);
                Route::Post('leaveCommunity', [CommunityController::class, 'leaveCommunity']);
                Route::Post('joinCommunity', [CommunityController::class, 'joinCommunity']);
                Route::Post('changeMemberStatus', [CommunityController::class, 'changeMemberStatus']);
                Route::get('checkData', [CommunityController::class, 'checkData']);
                
                 #Home controller API
                Route::resource('poll', PollController::class);
                Route::post('vote', [PollController::class,'vote']);
                Route::get('getvote', [PollController::class,'getvote']);

                #Home controller API
                Route::resource('seek', SeekController::class);
                Route::get('getPostReview', [SeekController::class, 'getReview']);
                Route::Post('starORbook', [SeekController::class, 'starORbook']);

                 #Home controller API
                Route::resource('review', ReviewController::class);
                Route::Post('appose', [ReviewController::class,'appose']);
                
                 #Home controller API
                Route::get('getDay', [SurveyController::class,'getDay']);
                Route::get('getTags', [SurveyController::class,'getTags']);
                Route::get('getComunityTags', [SurveyController::class,'getComunityTags']);
                Route::post('addtags', [SurveyController::class,'addtags']);
                Route::get('category', [SurveyController::class,'category']);
                Route::get('getSurveyAns', [SurveyController::class,'getSurveyAns']);
                Route::resource('survey', SurveyController::class);
                

                #Home controller API
                Route::resource('circle',CircleController::class);
                Route::Post('favouriteChat',[CircleController::class,'favouriteChat']);
                Route::Post('chatStart',[CircleController::class,'chatStart']);
                Route::Get('perviousChat',[CircleController::class,'perviousChat']);
                Route::Get('getfavouriteChat',[CircleController::class,'getfavouriteChat']);
                Route::Post('blockChat',[CircleController::class,'blockChat']);
                Route::Get('getBlockChat',[CircleController::class,'getBlockChat']);
                Route::post('msgCount',[CircleController::class,'msgCount']);
                Route::get('getMsgCount',[CircleController::class,'getMsgCount']);
                Route::Get('searchCircle',[CircleController::class,'searchCircle']);


                #Home controller API
                Route::resource('social', SoicalController::class);
        });
        
 #end Auth Api
 
