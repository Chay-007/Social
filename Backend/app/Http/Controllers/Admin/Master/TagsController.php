<?php

namespace App\Http\Controllers\Admin\Master;

# Models
use App\Models\Tags;
use App\Models\Category;

# Other Classes
use DB;
use Validator;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class TagsController extends Controller
{
    # Define Base view
    protected $view = 'admin.master.tags.';

    #Bind Tags model
    protected $tags;
    
    #Bind Category model
    protected $category;

    /**
     * Defining the default constructor for controller
     *
     */

    public function __construct(
        Tags        $tags,
        Category    $category
    ) {

        $this->tags         = $tags;
        $this->category     = $category;
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
            $tag = $this->tags->where('created_at', '<>', null);

            if (isset($input['search_name']) || isset($input['search_status']) || isset($input['search_cat'])) {

                if (isset($input['search_cat'])) {
                   $search = $input['search_cat'];
                    $tag->whereHas('category', function ($qwer) use ($search) {
                        $qwer->where('name', 'LIKE', '%' . $search . '%');
                    });

                }
                if (isset($input['search_name'])) {
                    $tag->where('name', 'LIKE', '%' . $input['search_name'] . '%');
                }
                if (isset($input['search_status'])) {
                    $tag->where('status', $input['search_status']);
                }
            }
            $details['lists'] = $tag->orderBy('id', 'DESC')->paginate(20);

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
            $details['list'] = $this->category->where('status',1)->get();
            #render view
            return view($this->view . 'create',$details);
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
                'name.*'            => 'required|unique:tags,name,NULL,id,deleted_at,NULL',
                'category_id'       => 'required',
            ]);

            if ($validate->fails()) {

                toastr()->error($validate->messages());
                return redirect()->back()->withInput()->with('error', $validate->messages())->withErrors($validate->messages());
            }
            
            foreach ($request->name as $key => $value) {
                $data = [
                    'category_id'               => $request->category_id,
                    'user_id'                   => Auth::id(),
                    'name'                      => $value,
                    'status'                    => '1',
                ];
                #store the newly creted resoures
                $this->tags->create($data);
            }           
            #return redirect back to view
            toastr()->success('Added Successfully');
            return redirect('master/tags')->with('message', 'Tag Added Successfully!');
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
            $details['detail'] = $this->tags->where('id', $id)->first();
            $details['list'] = $this->category->where('status',1)->get();
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
                'name'          => 'required|unique:tags,name,' . $id . ',id,deleted_at,NULL',
                'category_id'   => 'required',
            ]);
            if ($validate->fails()) {

                toastr()->error($validate->messages());
                return redirect()->back()->withInput()->with('error', $validate->messages())->withErrors($validate->messages());
            }
            #get the requested data in Data variable
            $data = [
                'name'                  => $request->name,
                'category_id'           => $request->category_id,
            ];

            #update the newly added resoures
            $this->tags->whereId($id)->update($data);
            #return redirect back to view
            toastr()->success('Updated Successfully');
            return redirect('master/tags')->with('message', 'Tag Updated Successfully!');
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
        $caste = $this->tags::find($id);
        $caste->delete();
        toastr()->success('You are successfully Deleted');
        return redirect('master/tags')->with('message', 'Tag Deleted Successfully!');
    }
    public function changeStatus(Request $request, $id)
    {

        #get the detail of requested resources
        $tag = $this->tags->whereId($request->id)->first();

        if ($tag->status == 1) {
            $status = '0';
        } else {
            $status = '1';
        }
        #get the status in data variable
        $data = ['status' => $status];

        #update status
        $this->tags->whereId($request->id)->update($data);
        $tag = $this->tags->whereId($request->id)->first();
        $message = $tag->status == 0 ? 'InActive' : 'Active';
        toastr()->success('You are successfully ' . $message);
        return redirect('master/tags')->with('message', 'Tag Status Changed Successfully!');
    }
    public function addtags(Request $request) {
        $details['count']       = $request->count;
        return view($this->view . 'option', $details);        
    }
}
