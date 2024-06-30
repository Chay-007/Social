@extends("layouts.main")
@section("style")
    <link href="{{asset('assets/plugins/highcharts/css/highcharts.css')}}" rel="stylesheet" />
    <link href="{{asset('assets/plugins/vectormap/jquery-jvectormap-2.0.2.css')}}" rel="stylesheet" />
    @endsection
        @section("wrapper")
        <div class="page-wrapper">
            <div class="page-content">
                <div class="row row-cols-1 row-cols-lg-4">
                    <div class="col">
                        <div class="card radius-10 overflow-hidden bg-gradient-cosmic">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div>
                                        <p class="mb-0 text-white">Total Jobseeker Registered</p>
                                        <h5 class="mb-0 text-white">{{$customer}}</h5>
                                    </div>
                                  
                                </div>
                               
                            </div>
                        </div>
                    </div>
                 
                    <div class="col">
                        <div class="card radius-10 overflow-hidden bg-gradient-Ohhappiness">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div>
                                        <p class="mb-0 text-white">Total Employer Registered</p>
                                        <h5 class="mb-0 text-white">{{$booking}}</h5>
                                    </div>
                                    
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card radius-10 overflow-hidden bg-gradient-moonlit">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div>
                                        <p class="mb-0 text-white">Total Package Buy</p>
                                        <h5 class="mb-0 text-white">{{$revenue}}</h5>
                                    </div>
                                   
                                </div>
                                
                            </div>
                        </div>
                    </div>
                       <div class="col">
                        <div class="card radius-10 overflow-hidden bg-gradient-burning">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div>
                                        <p class="mb-0 text-white">Total Technican</p>
                                        <h5 class="mb-0 text-white">{{$technican}}</h5>
                                    </div>
                                   
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-md-6">
                        <div id="chartContainer1" style="height: 100%; width: 100%;"></div>
                    </div>
                    <div class="col-xl-6 col-md-6">
                       <div id="chartContainer" style="height: 100%; width: 100%;"></div>
                    </div>
                    
                       
                     
                  
                </div><!--end row-->
            
               
                

                
                    <!-- </div>
                </div>
            </div> -->
        </div>
        @include('admin.dashboard.js')
        @endsection
        
   