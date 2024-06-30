<?php

namespace App\Http\Controllers\Admin\Master;


# Models
use App\Models\Interests;

# Other Classes
use DB;
use Validator;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class InterestsController extends Controller
{
    # Define Base view
    protected $view = 'admin.master.interest.';

    #Bind interest model
    protected $interest;

    /**
     * Defining the default constructor for controller
     *
     */

    public function __construct(
        Interests  $interest
    ) {

        $this->interest  = $interest;
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
            $interests = $this->interest->where('created_at', '<>', null);

            if (isset($input['search_name']) || isset($input['search_status'])) {

                if (isset($input['search_name'])) {
                    $interests->where('name', 'LIKE', '%' . $input['search_name'] . '%');
                }
                if (isset($input['search_status'])) {
                    $interests->where('status', $input['search_status']);
                }
            }
            $details['lists'] = $interests->orderBy('id', 'DESC')->paginate(20);

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
        try {
            #render view
            return view($this->view . 'create');
        } catch (\Exception $ex) {
            toastr()->success($ex->getMessage());
            return back()->with('error', $ex->getMessage());
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            #validate the request

            $validate = Validator::make($request->all(), [
                'name'          => 'required|string|unique:interests,name,NULL,id,deleted_at,NULL'
            ]);

            if ($validate->fails()) {

                toastr()->error($validate->messages());
                return redirect()->back()->withInput()->with('error', $validate->messages())->withErrors($validate->messages());
            }
            $data = [
                'name'              => $request->name,
                'status'            => '1',
            ];
            #store the newly creted resoures
            $this->interest->create($data);
            // foreach ($request->name as $key => $value) {
            // }           
            #return redirect back to view
            toastr()->success('Added Successfully');
            return redirect('master/interest')->with('success','Interest Added Successfully');
        } catch (\Exception $ex) {
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
        try {
            # Fetch records
            $details['detail'] = $this->interest->where('id', $id)->first();

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
        try {
            #validate the request
            $validate = Validator::make($request->all(), [
                'name'          => 'required|unique:interests,name,' . $id,
            ]);
            if ($validate->fails()) {

                toastr()->error($validate->messages());
                return redirect()->back()->withInput()->with('error', $validate->messages())->withErrors($validate->messages());
            }
            #get the requested data in Data variable
            $data = [
                'name'          => $request->name,
            ];

            #update the newly added resoures
            $this->interest->whereId($id)->update($data);
            #return redirect back to view
            toastr()->success('Updated Successfully');
            return redirect('master/interest')->with('message', 'Interest Updated Successfully!');
        } catch (\Exception $ex) {
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
        $caste = $this->interest::find($id);
        $caste->delete();
        toastr()->success('You are successfully Deleted');
        return redirect('master/interest')->with('message', 'Interest Deleted Successfully!');
    }
    public function changeStatus(Request $request, $id)
    {

        #get the detail of requested resources
        $interests = $this->interest->whereId($request->id)->first();

        if ($interests->status == 1) {
            $status = '0';
        } else {
            $status = '1';
        }
        #get the status in data variable
        $data = ['status' => $status];

        #update status
        $this->interest->whereId($request->id)->update($data);
        $interests = $this->interest->whereId($request->id)->first();
        $message = $interests->status == 0 ? 'InActive' : 'Active';
        toastr()->success('You are successfully ' . $message);
        return redirect('master/interest')->with('message', 'Interest Status Changed Successfully!');
    }
    public function addInterst(Request $request) {
        $details['count']       = $request->count;
        return view($this->view . 'option', $details);        
    }
}
