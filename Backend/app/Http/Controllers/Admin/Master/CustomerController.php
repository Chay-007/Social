<?php

namespace App\Http\Controllers\Admin\Master;

# Models
use App\Models\User;
use App\Models\UserProfile;
use App\Models\UserInterests;

# Other Classes
use DB;
use Validator;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class CustomerController extends Controller
{
    # Define Base view
    protected $view = 'admin.master.user.';

    #Bind User model
    protected $user;

    #Bind UserProfile model
    protected $userProfile;

    #Bind UserInterests model
    protected $userInterest;

    /**
     * Defining the default constructor for controller
     *
     */

    public function __construct(
        User                $user,
        UserProfile         $userProfile,
        UserInterests       $userInterest
    ) {
        $this->user                   = $user;
        $this->userProfile            = $userProfile;
        $this->userInterest           = $userInterest;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try {

            $input = $request->all();

            #get all paymentUser resources
            $users = $this->user->where('created_at', '<>', null);

            if (isset($input['search_name']) || isset($input['search_email']) || isset($input['search_number'])) {

                if (isset($input['search_name'])) {
                    $users->where('name', 'LIKE', '%' . $input['search_name'] . '%');
                }
                if (isset($input['search_email'])) {
                    $users->where('email', 'LIKE', '%' . $input['search_email'] . '%');
                }
                if (isset($input['search_number'])) {
                    $users->where('mobile_number', 'LIKE', '%' . $input['search_number'] . '%');
                }
            }
            $details['lists'] = $users->where('type', 'customer')->orderBy('id', 'DESC')->paginate(20);

            #render view
            return view($this->view . 'index', $details);
        } catch (\Exception $ex) {
            toastr()->success($ex->getMessage());
            return back()->with('error', $ex->getMessage());
        }
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
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        try {
            # Fetch records
            $relation = ['userProfile','interest.interest'];
            $details['detail'] = $this->user->with($relation)->where('id', $id)->first();

            #return to view
            return view($this->view . 'edit', $details);
        } catch (\Exception $ex) {
            toastr()->success($ex->getMessage());
            return back()->with('error', $ex->getMessage());
        }
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
    /**
     * change status of specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
}
