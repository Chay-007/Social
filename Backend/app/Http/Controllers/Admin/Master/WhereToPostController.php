<?php

namespace App\Http\Controllers\Admin\Master;

# Models
use App\Models\Tags;
use App\Models\WhereToPost;

# Other Classes
use DB;
use Validator;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class WhereToPostController extends Controller
{
    # Define Base view
    protected $view = 'admin.master.wherePost.';

    #Bind Tags model
    protected $tags;
    
    #Bind whereToPost model
    protected $whereToPost;

    /**
     * Defining the default constructor for controller
     *
     */

    public function __construct(
        Tags        $tags,
        WhereToPost    $whereToPost
    ) {

        $this->tags         = $tags;
        $this->whereToPost     = $whereToPost;
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
            $whereToPosts = $this->whereToPost->where('created_at', '<>', null);

            if (isset($input['search_name']) || isset($input['search_status'])) {

                if (isset($input['search_name'])) {
                    $whereToPosts->where('name', 'LIKE', '%' . $input['search_name'] . '%');
                }
                if (isset($input['search_status'])) {
                    $whereToPosts->where('status', $input['search_status']);
                }
            }
            $details['lists'] = $whereToPosts->orderBy('id', 'DESC')->paginate(20);

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
                'name.*'            => 'required|unique:where_to_posts,name,NULL,id,deleted_at,NULL',
                'image'             => 'required',
            ]);

            if ($validate->fails()) {

                toastr()->error($validate->messages());
                return redirect()->back()->withInput()->with('error', $validate->messages())->withErrors($validate->messages());
            }
            
            foreach ($request->image as $key1 => $values) {
                $unique = substr(str_shuffle("0123456789"), 0, 4);
                $queImages = [
                    'name'                  => $request->name[$key1],
                    'description'           => $request->description[$key1],
                    'image'                 => isset($values) ? fileUploadProfile('public/admin/home/wherePost', $values, $unique) : '',
                ];
                $this->whereToPost->create($queImages);
            }           
            #return redirect back to view
            toastr()->success('Added Successfully');
            return redirect('master/wherePost')->with('message', 'Where To Post Added Successfully!');
        } catch (\Exception $ex) {
            toastr()->success($ex->getMessage());
            return back()->withInput()->with('error', $ex->getMessage());
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
            $details['detail'] = $this->whereToPost->where('id', $id)->first();
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
                'name'          => 'required|unique:where_to_posts,name,' . $id . ',id,deleted_at,NULL',
            ]);
            if ($validate->fails()) {

                toastr()->error($validate->messages());
                return redirect()->back()->withInput()->with('error', $validate->messages())->withErrors($validate->messages());
            }
            #get the requested data in Data variable
            $chech = $this->whereToPost->where('id',$id)->first();
            $unique = substr(str_shuffle("0123456789"), 0, 4);
            $data = [
                'name'                  => $request->name,
                'description'           => $request->description,
                'image'                 => isset($request->image) ? fileUploadProfile('public/admin/home/wherePost', $request->image, $unique) : $chech->image,
            ];

            #update the newly added resoures
            $this->whereToPost->whereId($id)->update($data);
            #return redirect back to view
            toastr()->success('Updated Successfully');
            return redirect('master/wherePost')->with('message', 'Where To Post Updated Successfully!');
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
        $caste = $this->whereToPost::find($id);
        $caste->delete();
        toastr()->success('You are successfully Deleted');
        return redirect('master/wherePost')->with('message', 'Tag Deleted Successfully!');
    }
    public function changeStatus(Request $request, $id)
    {

        #get the detail of requested resources
        $whereToPosts = $this->whereToPost->whereId($request->id)->first();

        if ($whereToPosts->status == 1) {
            $status = '0';
        } else {
            $status = '1';
        }
        #get the status in data variable
        $data = ['status' => $status];

        #update status
        $this->whereToPost->whereId($request->id)->update($data);
        $whereToPosts = $this->whereToPost->whereId($request->id)->first();
        $message = $whereToPosts->status == 0 ? 'InActive' : 'Active';
        toastr()->success('You are successfully ' . $message);
        return redirect('master/wherePost')->with('message', 'Tag Status Changed Successfully!');
    }
    public function addwherePost(Request $request) {
        $details['count']       = $request->count;
        return view($this->view . 'option', $details);        
    }
}
