@extends('layouts.main') 
@section('title', 'Admin Role')
@section("wrapper")
<div class="page-wrapper">
    <div class="page-content">
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-12">
                        <h2>Create Edit Role</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-9 mx-auto">
                    <hr/>
                     <div class="card border-top border-0 border-4 border-info">
                        <div class="card-body">
                                <div class="border p-4 rounded">
                                    <div class="card-title d-flex align-items-center">
                                        <div><i class="bx bxs-user me-1 font-22 text-info"></i>
                                        </div>
                                        <h5 class="mb-0 text-info">Edit Role</h5>
                                    </div>
                                    <hr/>
                                     <form method="post" action="{{ url('team/roles/'.$detail->id) }}"  onsubmit="return validateForm('addsstatus')" class="addsstatus" autocomplete="off" enctype="multipart/form-data">
                             @csrf
             {{ method_field('PATCH') }}
                                    <div class="row mb-3">
                                        <label for="Name" class="col-sm-3 col-form-label">Role Name</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control input-mandatory" id="banner" name="name" value="{{$detail->name}}" placeholder="Role Name">
                                        </div>
                                    </div>
                                   
                                     <div class="row mb-3">
                                        <label for="Name" class="col-sm-3 col-form-label">All Permission</label>
                                        <div class="col-sm-9">
                                            <INPUT type="checkbox" onchange="checkAll(this)" name="chk[]" {{count($rolePermissions) == count($permission) ? 'checked' : ''}} />
                                        </div>
                                    </div>
                                     
                                    <div class="row">
                                         @foreach($permission as $value)
                                        <div class="col-md-3">
                                            <div class="form-group">
                                                <input type="checkbox" name="permission[]" value="{{$value->id}}"{{in_array($value->id,$rolePermissions) ? 'checked' : ''}}>
                                                <span style="    margin-left: 10%;">{{ $value->name }} </span>
                                            </div>
                                        </div>
                                        @endforeach
                                    </div>
                                    <div class="row">
                                        <label class="col-sm-3 col-form-label"></label>
                                        <div class="col-sm-9">
                                            <button type="submit" class="btn btn-info px-5">Save</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>
@endsection

@section("script")
@include('admin.role.js')
@endsection

