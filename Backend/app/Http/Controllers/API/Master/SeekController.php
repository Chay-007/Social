<?php

namespace App\Http\Controllers\API\Master;

# Models
use App\Models\Seek;

# Other Classes
use DB;
use Validator;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Arr;
use App\Http\Controllers\API\BaseController as BaseController;

class SeekController extends BaseController
{
    #Bind Seek model
    protected $seek;

    /**
      * Defining the default constructor for controller
      *
      */
    public function __construct(
        Seek       $seek
        )
    {
        $this->seek     = $seek;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function intrest(Request $request)
    {
        try{
            $validate = Validator::make($request->all(), [               
                'name'          => 'required',               
                'remark'        => 'required',               
                'description'   => 'required',               
                'interest_id'   => 'required',               
            ]);
            if($validate->fails()){
                return $this->sendError('Validation Error.', $validate->messages());
            }
            $data = [
                'name'          => $request->name,
                'remark'        => $request->remark,
                'description'   => $request->description,
                'interest_id'   => $request->interest_id,
                'status'        => 1,
            ];
            $success['list'] = $this->seek->create($data);
            return $this->sendResponse($success, 'Seek Get successfully.');           
        }catch(\Exception $ex)
        {
            return $this->sendError('Validation Error.', 'Something Wrong'); 
        }
    }
}
