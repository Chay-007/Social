<?php

namespace App\Http\Controllers\Admin\Master;

# Models
use App\Models\City;
use App\Models\State;
use App\Models\Country;

# Other Classes
use DB;
use Validator;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class CityController extends Controller
{
    # Define Base view
    protected $view = 'admin.master.city.';

    #Bind Country model
    protected $country;

    #Bind State model
    protected $state;

    #Bind City model
    protected $city;

    /**
     * Defining the default constructor for controller
     *
     */

    public function __construct(
        City $city,
        State $state,
        Country $country
    ) {

        $this->city     = $city;
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
            $citys = $this->city->where('created_at', '<>', null);

            if (isset($input['search_name']) || isset($input['search_status'])) {

                if (isset($input['search_name'])) {
                    $citys->where('name', 'LIKE', '%' . $input['search_name'] . '%');
                }
                if (isset($input['search_status'])) {
                    $citys->where('status', $input['search_status']);
                }
            }
            $details['lists'] = $citys->orderBy('id', 'DESC')->paginate(20);
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
                'state_id'     => 'required',
            ]);

            if ($validate->fails()) {

                toastr()->error($validate->messages());
                return redirect()->back()->withInput()->with('error', $validate->messages())->withErrors($validate->messages());
            }
            $checkstate = $this->city->where('country_id', $request->country_id)->where('state_id', $request->state_id)->where('name', $request->name)->first();
            if (isset($checkstate)) {
                $validate = Validator::make($request->all(), [
                    'name'          => 'required|unique:cities,name',
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
                'state_id'          => $request->state_id,
                'status'            => '1',
            ];
            #store the newly creted resoures
            $this->city->create($data);
            #return redirect back to view
            toastr()->success('Added Successfully');
            return redirect('/master/city')->with('message', 'City Added Successfully');
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
            $details['detail'] = $this->city->where('id', $id)->first();
            $details['state'] = $this->state->where('country_id', $details['detail']->country_id)->where('status', 1)->get();
            #return to view
            // return $details;
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
                'name'          => 'required',
                'country_id'    => 'required',
                'state_id'      => 'required',
            ]);
            if ($validate->fails()) {

                toastr()->error($validate->messages());
                return redirect()->back()->withInput()->with('error', $validate->messages())->withErrors($validate->messages());
            }
            $checkstate = $this->city->where('country_id', $request->country_id)->where('state_id', $request->state_id)->where('name', $request->name)->first();
            if (isset($checkstate)) {
                $validate = Validator::make($request->all(), [
                    'name'          => 'required|unique:cities,name',
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
                'state_id'          => $request->state_id,
                'status'            => '1',
            ];

            #update the newly added resoures
            $this->city->whereId($id)->update($data);
            #return redirect back to view
            toastr()->success('Updated Successfully');
            return redirect('master/city')->with('message', 'City Updated Successfully');
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
        $caste = $this->city::find($id);
        $caste->delete();
        toastr()->success('You are successfully Deleted');
        return redirect('master/city')->with('message', 'City Deleted Successfully');
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
        $citys = $this->city->whereId($request->id)->first();

        if ($citys->status == 1) {
            $status = '0';
        } else {
            $status = '1';
        }
        #get the status in data variable
        $data = ['status' => $status];

        #update status
        $this->city->whereId($request->id)->update($data);
        $citys = $this->city->whereId($request->id)->first();
        $message = $citys->status == 0 ? 'InActive' : 'Active';
        toastr()->success('You are successfully ' . $message);
        return redirect('master/city')->with('message', 'City Status Changed Successfully');
    }

    /**
     * state wise city of specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function stateWiseCity(Request $request)
    {

        #get the detail of requested resources
        $details['states'] = $this->city->where('state_id', $request->state_id)->where('status', 1)->get();
        #render view
        return view($this->view . 'option', $details);
    }
}
