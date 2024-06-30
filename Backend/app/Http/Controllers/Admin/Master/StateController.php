<?php

namespace App\Http\Controllers\Admin\Master;

# Models
use App\Models\State;
use App\Models\Country;

# Other Classes
use DB;
use Validator;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class StateController extends Controller
{
    # Define Base view
    protected $view = 'admin.master.state.';

    #Bind Country model
    protected $country;

    #Bind State model
    protected $state;

    /**
     * Defining the default constructor for controller
     *
     */

    public function __construct(
        State $state,
        Country $country
    ) {

        $this->state    = $state;
        $this->country  = $country;
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
            $statessss =  $this->state->where('created_at', '<>', null);

            if (isset($input['search_name']) || isset($input['search_status']) || isset($input['couuntry_id'])) {

                if (isset($input['search_name'])) {
                    $statessss->where('name', 'LIKE', '%' . $input['search_name'] . '%');
                }
                if (isset($input['couuntry_id'])) {
                    $statessss->where('couuntry_id', $input['couuntry_id']);
                }
                if (isset($input['search_status'])) {
                    $statessss->where('status', $input['search_status']);
                }
            }
            $relation = ['couuntry'];
            $details['lists'] = $statessss->with($relation)->orderBy('id', 'DESC')->paginate(20);

            $details['country'] = $this->country->where('status', 1)->orderBy('id', 'DESC')->get();



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
            $details['country'] = $this->country->where('status', 1)->get();
            #render view
            return view($this->view . 'create', $details);
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
                'name'          => 'required',
                'country_id'    => 'required',
            ]);

            if ($validate->fails()) {

                toastr()->error($validate->messages());
                return redirect()->back()->withInput()->with('error', $validate->messages())->withErrors($validate->messages());
            }
            $checkstate = $this->state->where('country_id', $request->country_id)->where('name', $request->name)->first();
            if (isset($checkstate)) {
                $validate = Validator::make($request->all(), [
                    'name'          => 'required|unique:states,name',
                ]);

                if ($validate->fails()) {

                    toastr()->error($validate->messages());
                    return redirect()->back()->withInput()->with('error', $validate->messages())->withErrors($validate->messages());
                }
            }
            #get the requested data in Data variable
            $data = [
                'name'              => $request->name,
                'country_id'        => $request->country_id,
                'status'            => '1',
            ];
            #store the newly creted resoures
            $this->state->create($data);
            #return redirect back to view
            toastr()->success('Added Successfully');
            return redirect('/master/state')->with('message', 'State Added Successfully');
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
            $details['country'] = $this->country->where('status', 1)->get();
            $details['detail'] = $this->state->where('id', $id)->first();

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
                'name'          => 'required|unique:states,name,' . $id,
                'country_id'    => 'required',
            ]);
            if ($validate->fails()) {

                toastr()->error($validate->messages());
                return redirect()->back()->withInput()->with('error', $validate->messages())->withErrors($validate->messages());
            }
            #get the requested data in Data variable
            $data = [
                'name'             => $request->name,
                'country_id'      => $request->country_id,
                'status'           => '1',
            ];

            #update the newly added resoures
            $this->state->whereId($id)->update($data);
            #return redirect back to view
            toastr()->success('Updated Successfully');
            return redirect('master/state')->with('message', 'State Updated Successfully');
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
        $caste = $this->state::find($id);
        $caste->delete();
        toastr()->success('You are successfully Deleted');
        return redirect('master/state')->with('message', 'State Deleted Successfully');
    }
    /**
     * change status of specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function changeStatus(Request $request, $id)
    {

        #get the detail of requested resources
        $states = $this->state->whereId($request->id)->first();

        if ($states->status == 1) {
            $status = '0';
        } else {
            $status = '1';
        }
        #get the status in data variable
        $data = ['status' => $status];

        #update status
        $this->state->whereId($request->id)->update($data);
        $states = $this->state->whereId($request->id)->first();
        $message = $states->status == 0 ? 'InActive' : 'Active';
        toastr()->success('You are successfully ' . $message);
        return redirect('master/state')->with('message', 'State Status Changed Successfully');
    }

    /**
     *country wise state of specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function countryWiseState(Request $request)
    {

        #get the detail of requested resources
        $details['states'] = $this->state->where('country_id', $request->country_id)->get();
        #render view

        return view($this->view . 'option', $details);
    }
}
