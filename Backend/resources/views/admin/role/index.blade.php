@extends('layouts.main') 
@section('title', 'Roles')
@section("wrapper")
    <div class="page-wrapper">
      <div class="page-content">
        <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
          <div class="ps-3">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb mb-0 p-0">
                <li class="breadcrumb-item"><a href="{{url('/home')}}"><i class="bx bx-home-alt"></i></a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Roles</li>
              </ol>
            </nav>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            @can('role-create')
            <div class="d-lg-flex align-items-center mb-4 gap-3">
              <div class=""><a href="{{ url('team/roles/create') }}" class="btn btn-primary radius-30 mt-2 mt-lg-0"><i class="bx bxs-plus-square"></i>Create New Roles</a></div>
            </div>
            @endcan
            <form role="form" method="get" action="">
                <div class="box-body">
                  <div class="row">
                    <div class="col-md-3">
                      <div class="form-group">
                        <input type="text" name="search_name" id="search_by_name-btn" class="form-control" placeholder="Search by  Name " value="{{Request::get('search_name')}}">
                      </div>
                    </div>
                   
                   
                    <div class="col-md-1">
                     <button type="submit" class="btn btn-success">Search</button>
                   </div>
                   <div class="col-md-1">
                     <a href="{{url('team/roles')}}" class="btn btn-danger reset-btn">Reset</a>
                   </div>
                 </div>
               </div>
             </form>
                 
            <div class="table-responsive my-4">
              <table class="table mb-0">
                <thead class="table-light">
                    <tr>
                      <th>No</th>
                     <th>Name</th>
                     <th width="280px">Action</th>
                    </tr>
                   @php 
                      $page=1;
                      if(Request::input('page'))
                      $page=Request::input('page');
                      $sort = $lists->perPage();
                   @endphp

                   @forelse($lists as $key => $list)
                   <tbody>
                     <tr>
                       <td>{{ $sort*($page-1)+($key+1) }}</td>
                       <td>{{ $list->name }}</td>
                      
                       <td>
                        <div class="d-flex order-actions">
                          @can('role-edit')
                        <a href="{{url('team/roles/'.$list->id.'/edit')}}" class=""><i class='bx bxs-edit'></i></a>
                        @endcan
                            
                      </div>
                    </td>
                     </tr>
                     @empty

                     <tr>
                       <td colspan="6">Record not found </td>
                     </tr>
                     </tbody>
                   @endforelse              
                  
                
                
              </table>
            </div>
            
             <div class="row">
               <div class="col-md-6 text-start" style="margin: 20px 0px;">
                  Showing  {{$lists->firstItem()}} to {{$lists->lastItem()}} of {{$lists->total()}}
               </div>
               <div class="col-md-6 text-end">
                 {{ $lists->links('vendor.pagination.default')}}
               </div>
             </div>
          </div>
        </div>
@endsection