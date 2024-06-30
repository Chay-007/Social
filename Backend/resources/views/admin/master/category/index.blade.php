@extends('layouts.main')
@section("css")

@endsection
@section("wrapper")
<div id="top" class="sa-app__body">
    <div class="mx-xxl-3 px-4 px-sm-5">
        <div class="py-5">
            <div class="row g-4 align-items-center">
                <div class="col-md-6">
                    <h1 class="h3 m-0">Category </h1>
                </div>
                <div class="col-md-6 text-end">
                    <a href="{{ url('master/category/create') }}" class="btn btn-primary radius-30 mt-2 mt-lg-0"><i class="bx bxs-plus-square"></i>Create New Category</a>
                </div>
            </div>
        </div>
    </div>
    <div class="mx-xxl-3 px-4 px-sm-5 pb-6">
        <div class="sa-layout">
            <div class="sa-layout__backdrop" data-sa-layout-sidebar-close=""></div>            
            <div class="sa-layout__content">
                <div class="card">
                    <div class="p-4">
                        <div class="row g-4">
                            <form role="form" method="get" action="">
                                <div class="box-body">
                                    <div class="row">

                                        <div class="col-md-3">
                                            <div class="form-group">
                                                <input type="text" name="search_name" id="search_by_name-btn" class="form-control" placeholder="Search by Category Name" value="{{Request::get('search_name')}}">
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group">
                                                <select class="form-control select2" name="search_status" style="width: 100%;">
                                                    <option value="">--Select Status --</option>
                                                    <option value="1" {{Request::get('search_status') == '1' ? 'selected' : ''}}>Active</option>
                                                    <option value="0" {{Request::get('search_status') == '0' ? 'selected' : ''}}>Inactive</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-1">
                                            <button type="submit" class="btn btn-success">Search</button>
                                        </div>
                                        <div class="col-md-1">
                                            <a href="{{url('master/category')}}" class="btn btn-danger reset-btn">Reset</a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="sa-divider"></div>
                    <table class="sa-datatables">
                        <thead>
                            <tr>
                                <th class="w-min" data-orderable="false">
                                </th>
                                <th>No</th>
                                <th>Category</th>
                                <th>Status</th>
                                <th width="280px">Action</th>

                            </tr>
                            @php
                            $page=1;
                            if(Request::input('page'))
                            $page=Request::input('page');
                            $sort = $lists->perPage();
                            @endphp
                        </thead>
                        <tbody>
                            @forelse($lists as $key => $list)

                            <tr>
                                <td></td>
                                <td>{{ $sort*($page-1)+($key+1) }}</td>
                                <td>{{ $list->name }}</td>
                                <td>
                                    <a href="{{url('/master/category/changestatus/'.$list->id)}}" class="badge rounded-pill p-2 px-3 btn-{{($list->status == '0') ? 'danger' : 'success'}} button_flow" data-toggle="tooltip" data-placement="top" title="" onclick="return confirm('Do you Really want to {{($list->status == '0') ? 'Active' : 'Inactive'}} this Category?')"> <i class="fa {{($list->status == '0') ? 'fa-toggle-off' : 'fa-toggle-on'}} fa-xl"></i></a>
                                </td>
                                <td>
                                    <div class="d-flex order-actions">

                                        <a href="{{url('master/category/'.$list->id.'/edit')}}" class="">Edit<i class='bx bxs-edit'></i></a>

                                        <a href="{{url('/master/category/delete/'.$list->id)}}" class="ms-3" onclick="return confirm('Do you really Want to Delete the Category?')">Delete<i class='bx bxs-trash'></i></a>

                                    </div>
                                </td>
                            </tr>
                            @empty
                            <tr>
                                <td colspan="6" class="text-center">Record not found </td>
                            </tr>
                            @endforelse
                        </tbody>
                    </table>
                    <div class="sa-divider"></div>
                    <div class="row m-3">
                        <div class="col-md-6 text-start" style="margin: 20px 0px;">
                            Showing {{$lists->firstItem()}} to {{$lists->lastItem()}} of {{$lists->total()}}
                        </div>
                        <div class="col-md-6 text-end">
                            {{ $lists->links('vendor.pagination.default')}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div><!-- sa-app__body / end --><!-- sa-app__footer -->
@endsection