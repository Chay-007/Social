<?php
    
namespace App\Http\Controllers;
    
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use Spatie\Permission\Models\Role;
use DB;
use Hash;
use Validator;
use Illuminate\Support\Arr;
    
class UserController extends Controller
{

    # Define Base view
    protected $view = 'admin.users.';

    #Bind User model
    protected $user;

    /**
      * Defining the default constructor for controller
      *
      */
    public function __construct(
                                User $user
                            )
    {
       
        
        $this->user            = $user;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {  
        try{
            $input = $request->all();
            #get all paymentUser resources
            $users = $this->user->with('roles')->where('type','=','admin')->where('id','<>',23);
 
            if(isset($input['search_name']) || isset($input['search_status']) || isset($input['search_email']) ){

                if(isset($input['search_name'])){

                 $users->where('name','LIKE','%'.$input['search_name'].'%');
                }
                 if(isset($input['search_email'])){

                 $users->where('email','LIKE','%'.$input['search_email'].'%');
                }
               
                if(isset($input['search_status'])){
                    $users->where('status',$input['search_status']);
                }
               
            }  
            $details['lists'] = $users->orderBy('id', 'DESC')->paginate(10);

            $details['roles'] = Role::pluck('name','name')->all();
           return view($this->view.'index',$details);
         }catch(\Exception $ex)
        {
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
        $details['roles'] = Role::where('created_at','!=',null)->pluck('name','name')->all();
        return view($this->view.'.create',$details);
    }

    
    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try
        {
            


        $validate = Validator::make($request->all(), [
                'name' => 'required',
                'mobile_number' => 'required|digits:10|unique:users,mobile_number,',
                'email' => 'required|email|unique:users,email',
                'password' => 'required|same:confirm-password',
                'roles' => 'required',
        ]);

            if($validate->fails()){

                 toastr()->error($validate->messages());
                return redirect()->back()->withInput()->with('error', $validate->messages())->withErrors($validate->messages());
            }
            $input = $request->all();
            $input['password']        = Hash::make($input['password']);
            $input['type']            = 'admin';
            $user = User::create($input);
            $user->assignRole($request->input('roles'));

             
             toastr()->success('Added Successfully');
            return redirect('/team/users');
        }catch(\Exception $ex)
        {
            toastr()->success($ex->getMessage());
            return back()->with('error', $ex->getMessage());
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
        $user = User::find($id);
        return view('users.show',compact('user'));
    }
    
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $user = User::find($id);
        $details['detail'] = $user;
        $details['roles'] = Role::where('created_at','!=',null)->pluck('name','name')->all();
        $details['userRole'] = $user->roles->pluck('name','name')->all();

        return view($this->view.'edit',$details);
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
        try
        {
        
            $this->validate($request, [
                'name' => 'required',
                'mobile_number' => 'required|digits:10|unique:users,mobile_number,'.$id,
                'email' => 'required|email|unique:users,email,'.$id,
                'password' => 'same:confirm-password',
            ]);
        
            $input = $request->all();
            if(!empty($input['password'])){ 
                $input['password'] = Hash::make($input['password']);
            }else{
                $input = Arr::except($input,array('password'));    
            }

            
            $user = User::find($id);
            $user->update($input);
        
           

               toastr()->success('Updated Successfully');
            return redirect('/team/users');
        }catch(\Exception $ex)
        {
            toastr()->success($ex->getMessage());
            return back()->with('error', $ex->getMessage());
        }
    }
    
     /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $caste = $this->user::find($id);
        $caste ->delete();
         toastr()->success('You are successfully Deleted');
       return redirect('team/users');
    }
     /**
     * change status of specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function changeStatus(Request $request,$id)
    {

        #get the detail of requested resources
        $users = $this->user->whereId($request->id)->first();

        if($users->status == 1){
             $status = '0';
           
        }else{
              $status = '1';
        }        
        #get the status in data variable
        $data = ['status' => $status];

        #update status
        $this->user->whereId($request->id)->update($data);
          $users = $this->user->whereId($request->id)->first();
          $message = $users->status ==0 ? 'InActive' : 'Active';
       toastr()->success('You are successfully '.$message);
       return redirect('team/users');
    }

    

}