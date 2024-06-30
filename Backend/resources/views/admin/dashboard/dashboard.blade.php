@extends('layouts.main')
@section("css")
            <style>
.font-small {
    font-size: 13px
}
#chartdiv {
  width: 100%;
  height: 600px;
}
#chartdivs {
  width: 100%;
  height: 600px;
}

    </style>
@endsection
@section("wrapper")
            <div id="top" class="sa-app__body px-2 px-lg-4">
                <div class="container pb-6">
                    <div class="py-5">
                        <div class="row g-4 align-items-center">
                            <div class="col">
                                <h1 class="h3 m-0">Dashboard</h1>
                            </div>
                            <!-- <div class="col-auto d-flex"><select class="form-select me-3">
                                    <option selected="">7 October, 2021</option>
                                </select><a href="#" class="btn btn-primary">Export</a></div> -->
                        </div>
                    </div>
                    <div class="row g-4 g-xl-5">
                        <div class="col-12 col-md-2 d-flex">
                            <div class="card saw-indicator flex-grow-1" data-sa-container-query="{&quot;340&quot;:&quot;saw-indicator--size--lg&quot;}">
                                <div class="sa-widget-header saw-indicator__header">
                                    <h2 class="sa-widget-header__title">Total Users</h2>
                                    <div class="sa-widget-header__actions">
                                        
                                    </div>
                                </div>
                                <div class="saw-indicator__body">
                                    <div class="saw-indicator__value">{{$total_users}}</div>
                                    <div class="saw-indicator__delta saw-indicator__delta--rise">
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-2 d-flex">
                            <div class="card saw-indicator flex-grow-1" data-sa-container-query="{&quot;340&quot;:&quot;saw-indicator--size--lg&quot;}">
                                <div class="sa-widget-header saw-indicator__header">
                                    <h2 class="sa-widget-header__title">Total Post</h2>
                                    <div class="sa-widget-header__actions">

                                    </div>
                                </div>
                                <div class="saw-indicator__body">
                                    <div class="saw-indicator__value">{{$total_posts}}</div>
                                    <div class="saw-indicator__delta saw-indicator__delta--fall">

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-2 d-flex">
                            <div class="card saw-indicator flex-grow-1" data-sa-container-query="{&quot;340&quot;:&quot;saw-indicator--size--lg&quot;}">
                                <div class="sa-widget-header saw-indicator__header">
                                    <h2 class="sa-widget-header__title">Total Community's</h2>
                                    <div class="sa-widget-header__actions">

                                    </div>
                                </div>
                                <div class="saw-indicator__body">
                                    <div class="saw-indicator__value">{{$total_communitys}}</div>
                                    <div class="saw-indicator__delta saw-indicator__delta--fall">

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-2 d-flex">
                            <div class="card saw-indicator flex-grow-1" data-sa-container-query="{&quot;340&quot;:&quot;saw-indicator--size--lg&quot;}">
                                <div class="sa-widget-header saw-indicator__header">
                                    <h2 class="sa-widget-header__title">Total Report Post</h2>
                                    <div class="sa-widget-header__actions">

                                    </div>
                                </div>
                                <div class="saw-indicator__body">
                                    <div class="saw-indicator__value">{{$total_reportPosts}}</div>
                                    <div class="saw-indicator__delta saw-indicator__delta--fall">

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-2 d-flex">
                            <div class="card saw-indicator flex-grow-1" data-sa-container-query="{&quot;340&quot;:&quot;saw-indicator--size--lg&quot;}">
                                <div class="sa-widget-header saw-indicator__header">
                                    <h2 class="sa-widget-header__title">Total Repost Post</h2>
                                    <div class="sa-widget-header__actions">

                                    </div>
                                </div>
                                <div class="saw-indicator__body">
                                    <div class="saw-indicator__value">{{$totalrepost}}</div>
                                    <div class="saw-indicator__delta saw-indicator__delta--fall">

                                    </div>

                                </div>
                            </div>
                        </div>
                        <!--<div class="col-12 col-md-2 d-flex">-->
                        <!--    <div class="card saw-indicator flex-grow-1" data-sa-container-query="{&quot;340&quot;:&quot;saw-indicator--size--lg&quot;}">-->
                        <!--        <div class="sa-widget-header saw-indicator__header">-->
                        <!--            <h2 class="sa-widget-header__title">Total orders</h2>-->
                        <!--            <div class="sa-widget-header__actions">-->

                        <!--            </div>-->
                        <!--        </div>-->
                        <!--        <div class="saw-indicator__body">-->
                        <!--            <div class="saw-indicator__value"></div>-->
                        <!--            <div class="saw-indicator__delta saw-indicator__delta--rise">-->
                        <!--                <div class="saw-indicator__delta-direction"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="currentColor">-->
                        <!--                        <path d="M9,0L8,6.1L2.8,1L9,0z"></path>-->
                        <!--                        <circle cx="1" cy="8" r="1"></circle>-->
                        <!--                        <rect x="0" y="4.5" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -2.864 4.0858)" width="7.1" height="2"></rect>-->
                        <!--                    </svg></div>-->
                        <!--                <div class="saw-indicator__delta-value">%</div>-->
                        <!--            </div>-->
                        <!--            <div class="saw-indicator__caption">Compared to </div>-->
                        <!--        </div>-->
                        <!--    </div>-->
                        <!--</div>-->
                        <div class="col-12 col-lg-4 col-xxl-6" style="height:100%">
                            <div class="card flex-grow-1 saw-chart">
                                <div class="sa-widget-header saw-chart__header">
                                    <h2 class="sa-widget-header__title">Post Statistics</h2>
                                    <div class="sa-widget-header__actions">
                                        Year: <?php 
                                        $year = date("Y");  // Fix the typo here
                                        echo $year; 
                                        ?>
                                    </div>
                                </div>                                
                                    <div id="chartdiv"></div>
                                    @foreach($ordervaluestat as $key => $value)
                                    <input type="hidden" value="{{$value}}" id="ordervalue{{$key}}">
                                    @endforeach                                
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div><!-- sa-app__body / end --><!-- sa-app__footer -->
@endsection

@include('admin.dashboard.js')
   