@extends('layouts.main')
@section("css")

@endsection
@section("wrapper")
<div id="top" class="sa-app__body">
    <div class="mx-sm-2 px-2 px-sm-3 px-xxl-4 pb-6">
        <div class="container">
            <div class="py-5">
                <div class="row g-4 align-items-center">
                    <div class="col">
                        <nav class="mb-2" aria-label="breadcrumb">
                            <ol class="breadcrumb breadcrumb-sa-simple">

                                <li class="breadcrumb-item active" aria-current="page"></li>
                            </ol>
                        </nav>
                        <h1 class="h3 m-0">Create New Tag</h1>
                    </div>
                </div>
            </div>
            <div class="sa-entity-layout" data-sa-container-query="{&quot;920&quot;:&quot;sa-entity-layout--size--md&quot;,&quot;1100&quot;:&quot;sa-entity-layout--size--lg&quot;}">
                <div class="sa-entity-layout__body">
                    <div class="sa-entity-layout__main">
                        <div class="card">
                            <div class="card-body p-5">
                                <form method="post" action="{{ url('master/tags') }}" onsubmit="return validateForm('addsstatus')" class="addsstatus" autocomplete="off" enctype="multipart/form-data">
                                    @csrf
                                    </br>
                                    <div class="row mb-3">
                                        <label for="Name" class="col-sm-3 col-form-label">Category</label>
                                        <div class="col-sm-9">
                                            <select class="form-control  select2" id="category_id" name="category_id">
                                                <option value="">----Select Category----</option>
                                                @foreach($list as $lists)
                                                <option value="{{$lists->id}}">{{$lists->name}}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                        @if($errors->has('category_id'))
                                        <span class="text-danger">{{ $errors->first('category_id') }}</span>
                                        @endif
                                    </div>
                                    <div class="row mb-3" id="add">
                                        <label for="Name" class="col-sm-3 col-form-label">Tag</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="city" name="name[]" value="{{ old('name.0') }}" placeholder="Enter Tag">
                                            @if($errors->has('name.0'))
                                        <span class="text-danger">{{ $errors->first('name.0') }}</span>
                                        @endif
                                        </div>
                                        <div class="col-sm-1">
                                            <button type="button" class="btn btn-primary" onclick="addFile()"><i class="fa fa-solid fa-plus"></i> Add</button>
                                            <input type="hidden" name="count" id="count" value="0">
                                        </div>                                       

                                        @if(old('name'))
                                            @foreach(old('name') as $key => $value)
                                            @if($key != 0)
                                            <div id="ad">
                                                <div class="row mt-4" id="new">
                                                    <div class="col-md-6">
                                                    </div>
                                                    <div class="row">
                                                        <label for="Name" class="col-sm-3 col-form-label">Tag</label>
                                                        <div class="col-sm-6">
                                                            <input type="text" class="form-control me-4" id="city" name="name[{{$key}}]" value="{{ old('name.'.$key) }}" placeholder="Enter Tag">
                                                            @if($errors->has('name.'.$key))
                                                                <span class="text-danger">{{ $errors->first('name.'.$key) }}</span>
                                                            @endif
                                                        </div>
                                                        <div class="col-sm-1"><button type="button" class="btn btn-primary" onclick="addFile()"><i class="fa fa-solid fa-plus"></i> Add</button></div>
                                                        <div class="col-sm-2"><button type="button" class="btn btn-danger del"><i class="fa fa-solid fa-trash"></i> Remove</button></div>
                                                    </div>

                                                </div>
                                            </div>
                                                @endif
                                            @endforeach
                                        @endif
                                    </div>
                                    <div class="row">
                                    </div>
                                    </br></br>
                                    <button type="submit" style="float:right" class="btn btn-info px-5">Save</button>
                                    <a href="{{url('master/tags')}}" style="float:right;margin-right: 12px;" class="btn btn-danger reset-btn">Cancel</a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
@section("script")
@include("admin.master.tags.js")
@endsection