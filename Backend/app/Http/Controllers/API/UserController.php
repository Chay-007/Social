<?php


namespace App\Http\Controllers\API;

#Model
use App\Models\User;

#Other Class
use Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Arr;
use App\Http\Controllers\API\BaseController as BaseController;


class UserController extends BaseController
{



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
         
        $this->user                   = $user;
    }
    
   

    public function register(Request $request){

      
        try{

            $validator = Validator::make($request->all(), [
                'mobile_number' => 'required',
                'email'         => 'required',
                'name'          => 'required',
            ]);

            if($validator->fails()){
                return $this->sendError('Validation Error.', 'Please Fill Mandatory field');     
            }

            $data = [
                    'type'          => 'customer',
                    'name'          => $request->name,
                    'mobile_number' => $request->mobile_number,
                    'email'         => $request->email,
                    'password'      => Hash::make(123456),
                    ];
            $user = User::create($data);
            $success['user_id'] =  $user->id;
            $success['token']   =  $user->createToken('MyApp')->accessToken;

            return $this->sendResponse($success, 'Register successfully.');
           
        }catch(\Exception $ex)
        {
            return $this->sendError('Validation Error.', $ex->getMessage()); 
        } 

    }
    #Customer login
    public function login(Request $request){
        try{

            $validator = Validator::make($request->all(), [
                'mobile_number' => 'required',
            ]);

            if($validator->fails()){
                return $this->sendError('Validation Error.', 'Please Fill Mandatory field');     
            }

             if(Auth::attempt(['mobile_number' => request('mobile_number'), 'password' =>'123456'])){
                $user = Auth::user();
                $success['user_id'] =  $user->id;
                $success['token']   =  $user->createToken('MyApp')->accessToken;
                return $this->sendResponse($success, 'Login successfully.');
             }
        }catch(\Exception $ex)
        {
            return $this->sendError('Validation Error.', $ex->getMessage()); 
        } 

    }


    
}