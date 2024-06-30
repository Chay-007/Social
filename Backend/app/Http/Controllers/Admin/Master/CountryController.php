<?php

namespace App\Http\Controllers\Admin\Master;

# Models
use App\Models\Country;

# Other Classes
use DB;
use Validator;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class CountryController extends Controller
{
    # Define Base view
    protected $view = 'admin.master.country.';

    #Bind Country model
    protected $country;

    /**
     * Defining the default constructor for controller
     *
     */

    public function __construct(
        Country $country
    ) {

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
            $countrys = $this->country->where('created_at', '<>', null);

            if (isset($input['search_name']) || isset($input['search_status'])) {

                if (isset($input['search_name'])) {
                    $countrys->where('name', 'LIKE', '%' . $input['search_name'] . '%');
                }
                if (isset($input['search_status'])) {
                    $countrys->where('status', $input['search_status']);
                }
            }
            $details['lists'] = $countrys->orderBy('id', 'DESC')->paginate(20);

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
                'name'          => 'required',
            ]);

            if ($validate->fails()) {

                toastr()->error($validate->messages());
                return redirect()->back()->withInput()->with('error', $validate->messages())->withErrors($validate->messages());
            }
            $checkvalidate = $this->country->where('name', $request->name)->withTrashed()->first();
            if (isset($checkvalidate->id)) {
                if ($checkvalidate->deleted_at == null) {
                    $validate = Validator::make($request->all(), [
                        'name' => 'required|unique:countries,name',
                    ]);

                    if ($validate->fails()) {
                        toastr()->error($validate->messages());
                        return redirect()->back()->withInput()->with('error', $validate->messages())->withErrors($validate->messages());
                    }
                } else {
                    $checkvalidate->deleted_at = null;
                    $checkvalidate->save();
                    return redirect('/master/country')->with('message', 'Country Added Successfully');
                }
            }
            #get the requested data in Data variable
            $data = [
                'name'          => $request->name,
                'status'        => '1',
            ];
            #store the newly creted resoures
            $this->country->create($data);
            #return redirect back to view
            toastr()->success('Added Successfully');
            return redirect('/master/country')->with('message', 'Country Added Successfully');
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
            $details['detail'] = $this->country->where('id', $id)->first();

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
                'name'          => 'required|unique:countries,name,' . $id,
            ]);
            if ($validate->fails()) {

                toastr()->error($validate->messages());
                return redirect()->back()->withInput()->with('error', $validate->messages())->withErrors($validate->messages());
            }
            #get the requested data in Data variable
            $data = [
                'name'          => $request->name,
                'status'        => '1',
            ];

            #update the newly added resoures
            $this->country->whereId($id)->update($data);
            #return redirect back to view
            toastr()->success('Updated Successfully');
            return redirect('master/country')->with('message', 'Country Updated Successfully!');
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
        $caste = $this->country::find($id);
        $caste->delete();
        toastr()->success('You are successfully Deleted');
        return redirect('master/country')->with('message', 'Country Deleted Successfully!');
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
        $countrys = $this->country->whereId($request->id)->first();

        if ($countrys->status == 1) {
            $status = '0';
        } else {
            $status = '1';
        }
        #get the status in data variable
        $data = ['status' => $status];

        #update status
        $this->country->whereId($request->id)->update($data);
        $countrys = $this->country->whereId($request->id)->first();
        $message = $countrys->status == 0 ? 'InActive' : 'Active';
        toastr()->success('You are successfully ' . $message);
        return redirect('master/country')->with('message', 'Country Status Changed Successfully!');
    }
}
