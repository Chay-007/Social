<?php
    
namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Validator;
use DB;
    
class RoleController extends Controller
{

    # Define Base view
    protected $view = 'admin.role.';

     #Bind Role model
    protected $role;

     #Bind SubscripationPermission model
    protected $subscripationPermission;

    /**
      * Defining the default constructor for controller
      *
      */
    public function __construct(
                                Role $role
                            )
    {
        $this->middleware('permission:role-list|role-create|role-edit|role-delete', ['only' => ['index','store']]);
         $this->middleware('permission:role-create', ['only' => ['create','store']]);
         $this->middleware('permission:role-edit', ['only' => ['edit','update']]);
         $this->middleware('permission:role-delete', ['only' => ['destroy']]);
         
        $this->role                           = $role;
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
           
            #get all paymentrole resources 'subscripation_id' => franchising()
            $roles = $this->role->where('created_at','!=',null);

            $search_name = '';
            if(isset($input['search_name']) ){
                $search_name = $input['search_name'];
                if(isset($search_name) && $search_name != null){
                $roles->where('name','LIKE','%'.$search_name.'%');
                }
            }  
            $details['lists'] = $roles->orderBy('id', 'DESC')->paginate(10);

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
        try{
           $permission = Permission::get();
            
            return view($this->view.'create',compact('permission'));
        }catch(\Exception $ex)
        {
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
        $validate = Validator::make($request->all(),[
                        'name' => 'required',
                        'permission'      => 'required',

                    ]);

        if($validate->fails()){
             toastr()->error($validate->messages());
            return redirect()->back()->withInput()->with('error', $validate->messages())->withErrors($validate->messages());
        }

        $check =  Role::where('name','LIKE','%'.$request->input('name').'%')->first();

        if($check){
            toastr()->error('Name Alredy Exits');
            return redirect()->back()->withInput()->with('error', $validate->messages())->withErrors($validate->messages());
        }
    
        $role = Role::create(['name' => $request->input('name')]);
        $role->syncPermissions($request->input('permission'));
    
        toastr()->success('Added Successfully');
            return redirect('team/roles');
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $role = Role::find($id);
        $rolePermissions = Permission::join("role_has_permissions","role_has_permissions.permission_id","=","permissions.id")
            ->where("role_has_permissions.role_id",$id)
            ->get();
    
        return view($this->view.'.show',compact('role','rolePermissions'));
    }
    
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
         try{
              $details['detail'] = Role::find($id);
             $details['permission'] = Permission::get();
              
            $details['rolePermissions'] = DB::table("role_has_permissions")->where("role_has_permissions.role_id",$id)
            ->pluck('role_has_permissions.permission_id','role_has_permissions.permission_id')
            ->all();

            return view($this->view.'edit',$details);
        }catch(\Exception $ex)
        {
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
        $validate = Validator::make($request->all(),[
                        'name' => 'required|unique:roles,name,'.$id,
                        'permission'      => 'required',

                    ]);

        if($validate->fails()){

             toastr()->error($validate->messages());
            return redirect()->back()->withInput()->with('error', $validate->messages())->withErrors($validate->messages());
        }
    
        $role = Role::find($id);
        $role->name = $request->input('name');
        $role->save();
    
        $role->syncPermissions($request->input('permission'));
    
       toastr()->success('Updated Successfully');
            return redirect('team/roles');
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DB::table("roles")->where('id',$id)->delete();
        return redirect()->route($this->view.'.index')
                        ->with('success','Role deleted successfully');
    }








     Expanded(
                  child: Padding(
                    padding: EdgeInsetsDirectional.fromSTEB(16, 0, 16, 0),
                    child: ListView(
                      padding: EdgeInsets.zero,
                      scrollDirection: Axis.vertical,
                      children: [
                        Padding(
                          padding: EdgeInsetsDirectional.fromSTEB(0, 32, 0, 0),
                          child: Column(
                            mainAxisSize: MainAxisSize.max,
                            children: [
                              Row(
                                mainAxisSize: MainAxisSize.max,
                                mainAxisAlignment:
                                MainAxisAlignment.spaceBetween,
                                children: [
                                  InkWell(
                                    onTap: (){
                                      setState(() {
                                        activeTabIndex = 0;
                                      });
                                    },
                                    child: Container(
                                      width: 148,
                                      height: 50,
                                      decoration: BoxDecoration(
                                        color: activeTabIndex == 0 ? Color(0xFF9A3CDC) : Color(0xFFD8B0F2),
                                        borderRadius: BorderRadius.circular(20),
                                      ),
                                      child: Column(
                                        mainAxisSize: MainAxisSize.max,
                                        mainAxisAlignment:
                                        MainAxisAlignment.center,
                                        children: [
                                          Padding(
                                            padding:
                                            EdgeInsetsDirectional.fromSTEB(
                                                16, 0, 16, 0),
                                            child: Text(
                                              'Call History',
                                              style: TextStyle(
                                                color: Colors.white,
                                                fontSize: 18,
                                              ),
                                            ),
                                          )
                                        ],
                                      ),
                                    ),
                                  ),
                                  InkWell(
                                    onTap: (){
                                      setState(() {
                                        activeTabIndex = 1;
                                      });
                                    },
                                    child: Container(
                                      width: 168,
                                      height: 50,
                                      decoration: BoxDecoration(
                                        color: activeTabIndex == 1 ? Color(0xFF9A3CDC) : Color(0xFFD8B0F2),
                                        borderRadius: BorderRadius.circular(20),
                                      ),
                                      child: Column(
                                        mainAxisSize: MainAxisSize.max,
                                        mainAxisAlignment:
                                        MainAxisAlignment.center,
                                        children: [
                                          Padding(
                                            padding:
                                            EdgeInsetsDirectional.fromSTEB(
                                                16, 0, 16, 0),
                                            child: Text(
                                              'Home Temperature',
                                              style: TextStyle(
                                                color: Colors.white,
                                                fontSize: 14,
                                              ),
                                            ),
                                          )
                                        ],
                                      ),
                                    ),
                                  )
                                ],
                              ),
                              Padding(
                                padding:
                                EdgeInsetsDirectional.fromSTEB(0, 24, 0, 0),
                                child: Row(
                                  mainAxisSize: MainAxisSize.max,
                                  mainAxisAlignment:
                                  MainAxisAlignment.spaceBetween,
                                  children: [
                                    InkWell(
                                      onTap: (){
                                        setState(() {
                                          activeTabIndex = 2;
                                        });
                                      },
                                      child: Container(
                                        width: 148,
                                        height: 50,
                                        decoration: BoxDecoration(
                                          color: activeTabIndex == 2 ? Color(0xFF9A3CDC) : Color(0xFFD8B0F2),
                                          borderRadius: BorderRadius.circular(20),
                                        ),
                                        child: Column(
                                          mainAxisSize: MainAxisSize.max,
                                          mainAxisAlignment:
                                          MainAxisAlignment.center,
                                          children: [
                                            Padding(
                                              padding:
                                              EdgeInsetsDirectional.fromSTEB(
                                                  16, 0, 16, 0),
                                              child: Text(
                                                'I\'m Ok Check',
                                                style: TextStyle(
                                                  color: Colors.white,
                                                  fontSize: 18,
                                                ),
                                              ),
                                            )
                                          ],
                                        ),
                                      ),
                                    ),
                                    InkWell(
                                      onTap: (){
                                        setState(() {
                                          activeTabIndex = 3;
                                        });
                                      },
                                      child: Container(
                                        width: 168,
                                        height: 50,
                                        decoration: BoxDecoration(
                                          color: activeTabIndex == 3 ? Color(0xFF9A3CDC) : Color(0xFFD8B0F2),
                                          borderRadius: BorderRadius.circular(20),
                                        ),
                                        child: Column(
                                          mainAxisSize: MainAxisSize.max,
                                          mainAxisAlignment:
                                          MainAxisAlignment.center,
                                          children: [
                                            Padding(
                                              padding:
                                              EdgeInsetsDirectional.fromSTEB(
                                                  16, 0, 16, 0),
                                              child: Text(
                                                'Activity Alert',
                                                style: TextStyle(
                                                  color: Colors.white,
                                                  fontSize: 18,
                                                ),
                                              ),
                                            )
                                          ],
                                        ),
                                      ),
                                    )
                                  ],
                                ),
                              )
                            ],
                          ),
                        ),
                        Padding(
                          padding: EdgeInsetsDirectional.fromSTEB(0, 32, 0, 0),
                          child: Row(
                            mainAxisSize: MainAxisSize.max,
                            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                            children: [
                              Text(
                                'Date',
                                style: TextStyle(
                                  color: FlutterFlowTheme.primaryColor,
                                ),
                              ),
                              Text(
                                'Time',
                                style: TextStyle(
                                  color: FlutterFlowTheme.primaryColor,
                                ),
                              ),
                              Text(
                                'Status',
                                style: TextStyle(
                                  color: FlutterFlowTheme.primaryColor,
                                ),
                              )
                            ],
                          ),
                        ),
                        if(activeTabIndex == 0 )Expanded(
                          child: FutureBuilder<List<MqttEvent>?>(
                            future: Repository().getAllAlarmCall(context), // async work
                            builder: (BuildContext context, AsyncSnapshot<List<MqttEvent>?> snapshot) {
                              switch (snapshot.connectionState) {
                                case ConnectionState.waiting: return LoadingView();
                                default:
                                  if (snapshot.hasError)
                                    return Container();
                                  else
                                    return ListView.builder(
                                        shrinkWrap: true,
                                        itemCount: snapshot.data?.length,
                                        physics: AlwaysScrollableScrollPhysics(),
                                        itemBuilder: (context,index){
                                          MqttEvent? event = snapshot.data?[index];
                                          return Padding(
                                            padding: EdgeInsetsDirectional.fromSTEB(0, 8, 0, 0),
                                            child: Row(
                                              mainAxisSize: MainAxisSize.max,
                                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                              children: [
                                                Text(
                                                  '${MqttUtils().dateTimeToFormat(event?.dateCreated)}',
                                                  style: TextStyle(
                                                    color: FlutterFlowTheme.primaryColor,
                                                  ),
                                                ),
                                                Text(
                                                  '${MqttUtils().dateTimeToTimeFormat(event?.dateCreated)}',
                                                  style: TextStyle(
                                                    color: FlutterFlowTheme.primaryColor,
                                                  ),
                                                ),
                                                Text(
                                                  '',
                                                  style: TextStyle(
                                                    color: FlutterFlowTheme.primaryColor,
                                                  ),
                                                ),
                                                Container(
                                                  width: 100,
                                                  height: 30,
                                                  decoration: BoxDecoration(
                                                    color: Color(0xFFD1D16A),
                                                    borderRadius: BorderRadius.circular(20),
                                                  ),
                                                  child: Column(
                                                    mainAxisSize: MainAxisSize.max,
                                                    mainAxisAlignment: MainAxisAlignment.center,
                                                    children: [
                                                      Text(
                                                        'Call ${event?.status??""}',
                                                        style: TextStyle(
                                                          color: Colors.white,
                                                        ),
                                                      )
                                                    ],
                                                  ),
                                                )
                                              ],
                                            ),
                                          );
                                        });
                              }
                            },
                          ),
                        ),
                        if(activeTabIndex == 1 ) Expanded(
                          child: FutureBuilder<List<MqttEvent>>(
                            future: Repository().getMqttTempList(context), // async work
                            builder: (BuildContext context, AsyncSnapshot<List<MqttEvent>> snapshot) {
                              switch (snapshot.connectionState) {
                                case ConnectionState.waiting: return LoadingView();
                                default:
                                  if (snapshot.hasError)
                                    return Container();
                                  else
                                    return ListView.builder(
                                        shrinkWrap: true,
                                        physics: AlwaysScrollableScrollPhysics(),
                                        itemCount: snapshot.data?.length,
                                        itemBuilder: (context,index){
                                          MqttEvent? mqttEvent = snapshot.data?[index];
                                          return  Padding(
                                            padding:
                                            EdgeInsetsDirectional.fromSTEB(0, 16, 0, 0),
                                            child: Row(
                                              mainAxisSize: MainAxisSize.max,
                                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                              children: [
                                                Column(
                                                  mainAxisSize: MainAxisSize.max,
                                                  children: [
                                                    Text(
                                                      '${MqttUtils().dateTimeToFormat(mqttEvent?.dateCreated)}',
                                                      style: TextStyle(
                                                        color: FlutterFlowTheme.primaryColor,
                                                      ),
                                                    )
                                                  ],
                                                ),
                                                Column(
                                                  mainAxisSize: MainAxisSize.max,
                                                  children: [
                                                    Text(
                                                      '${MqttUtils().dateTimeToTimeFormat(mqttEvent?.dateCreated)}',
                                                      style: TextStyle(
                                                        color: FlutterFlowTheme.primaryColor,
                                                      ),
                                                    )
                                                  ],
                                                ),
                                                Column(
                                                  mainAxisSize: MainAxisSize.max,
                                                  children: [
                                                    Text(
                                                      '${mqttEvent?.temperature??"--"}°c',
                                                      style: TextStyle(
                                                        color: FlutterFlowTheme.primaryColor,
                                                      ),
                                                    )
                                                  ],
                                                ),
                                                Column(
                                                  mainAxisSize: MainAxisSize.max,
                                                  children: [
                                                    Image.asset(
                                                      mqttEvent?.status == "normal" ? 'assets/images/Group_943.png' : 'assets/images/Group_942.png' ,
                                                      width: 12,
                                                      height: 12,
                                                      fit: BoxFit.cover,
                                                    )
                                                  ],
                                                )
                                              ],
                                            ),
                                          );
                                        });
                              }
                            },
                          ),
                        ),
                        if(activeTabIndex == 3)  Expanded(
                          child: FutureBuilder<List<MqttEvent>>(
                            future: Repository().getMqttPirList(context), // async work
                            builder: (BuildContext context, AsyncSnapshot<List<MqttEvent>> snapshot) {
                              switch (snapshot.connectionState) {
                                case ConnectionState.waiting: return LoadingView();
                                default:
                                  if (snapshot.hasError)
                                    return Container();
                                  else
                                    return ListView.builder(
                                        shrinkWrap: true,
                                        physics: AlwaysScrollableScrollPhysics(),
                                        itemCount: snapshot.data?.length,
                                        itemBuilder: (context,index){
                                          MqttEvent? mqttEvent = snapshot.data?[index];
                                          return Padding(
                                            padding: EdgeInsetsDirectional.fromSTEB(0, 16, 0, 0),
                                            child: Row(
                                              mainAxisSize: MainAxisSize.max,
                                              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                                              children: [
                                                Column(
                                                  mainAxisSize: MainAxisSize.max,
                                                  crossAxisAlignment: CrossAxisAlignment.center,
                                                  children: [
                                                    Text(
                                                      '${MqttUtils().dateTimeToFormat(mqttEvent?.dateCreated)}',
                                                      style: TextStyle(
                                                        color: FlutterFlowTheme.primaryColor,
                                                      ),
                                                    )
                                                  ],
                                                ),
                                                Column(
                                                  mainAxisSize: MainAxisSize.max,
                                                  children: [
                                                    Text(
                                                      '${MqttUtils().dateTimeToTimeFormat(mqttEvent?.dateCreated)}',
                                                      style: TextStyle(
                                                        color: FlutterFlowTheme.primaryColor,
                                                      ),
                                                    )
                                                  ],
                                                ),
                                                Column(
                                                  mainAxisSize: MainAxisSize.max,
                                                  children: [
                                                    Image.asset(
                                                      (mqttEvent?.event == "iamlife" || mqttEvent?.status == "1") ?  'assets/images/Group_943.png' : 'assets/images/Group_942.png' ,
                                                      width: 12,
                                                      height: 12,
                                                      fit: BoxFit.cover,
                                                    )
                                                  ],
                                                )
                                              ],
                                            ),
                                          );
                                        });
                              }
                            },
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
}