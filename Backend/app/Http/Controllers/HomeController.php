<?php

namespace App\Http\Controllers;

# Models
use App\Models\User;
use App\Models\Posts;
use App\Models\Repost;
use App\Models\Community;
use App\Models\ReportPost;


# Other Classes
use DB;
use Validator;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{


    #Bind User model
    protected $user;


    /**
      * Defining the default constructor for controller
      *
      */
    public function __construct(
                                User $user,
                                Posts $posts,
                                Repost $repost,
                                Community $community,
                                ReportPost $reportPost
                                
                            )
    {
        $this->middleware('auth');
        $this->user  = $user;
        $this->posts  = $posts;
        $this->repost  = $repost;
        $this->community  = $community;
        $this->reportPost  = $reportPost;
    }


    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $details['customer']   = $this->user->where('type','customer')->count();
        $details['newCountweek']   = $this->user->where('type','customer')->where('created_at','>',Carbon::now()->subDays(7))->count();
        $details['newCountmonth']   = $this->user->where('type','customer')->where('created_at','>',Carbon::now()->subDays(30))->count();
        $details['technican']  = $this->user->where('type','technican')->count();
        $details['booking']    = 0;
        $details['revenue']    = 0;
        $applied                = 0;
        $c_year = date("Y"); 
        $c_m = date("m"); 
        for($i=1;$i<=(int)$c_m;$i++){
            $nmonth = date('M',strtotime("01-".$i."-".date("Y")));
             $leadadmissioncount =11;
            $admissiondata = array("label"=> $nmonth, "y"=> $leadadmissioncount);
            if($i==1){              
                $md_array["revenue"][] =  $admissiondata;
            }else{
                array_push($md_array["revenue"], $admissiondata);
            } 
        }
        $details['mrevenue']    = $md_array;

        for($i=1;$i<=(int)$c_m;$i++){
            $nmonth = date('M',strtotime("01-".$i."-".date("Y")));
             $leadadmissioncount = 11;
            $admissiondata = array("label"=> $nmonth, "y"=> $leadadmissioncount);
            if($i==1){
                $md_array["booking"][] =  $admissiondata;
            }else{
                array_push($md_array["booking"], $admissiondata);
            } 
        }
        $details['mbooking']    = $md_array;

        $users = $this->posts->select(DB::raw('count(*) as store_count'), DB::raw("MONTH(created_at) as month"))->groupBy('month')->get();
        $storeCountByMonth = [];            
        foreach ($users as $user) {
            $storeCountByMonth[$user->month] = $user->store_count;
        }
        $details['months'] = range(1, 12);            
        foreach ($details['months'] as $month) {
            if (!empty($storeCountByMonth[$month])) {
                $details['ordervaluestat'][$month] = $storeCountByMonth[$month];
            } else {
                $details['ordervaluestat'][$month] = 0;
            }
        }
        $details['total_users'] = $this->user->where('type','!=','admin')->count();
        $details['total_posts'] = $this->posts->count();
        $details['total_communitys'] = $this->community->count();
        $details['total_reportPosts'] = $this->reportPost->count();
        $details['totalrepost'] = $this->repost->count();
        // return$details['ordervaluestat'];
        return view('admin/dashboard/dashboard',$details);
    }
}
