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
                        <h1 class="h3 m-0">Edit Where To Post</h1>
                    </div>
                </div>
            </div>
            <div class="sa-entity-layout" data-sa-container-query="{&quot;920&quot;:&quot;sa-entity-layout--size--md&quot;,&quot;1100&quot;:&quot;sa-entity-layout--size--lg&quot;}">
                <div class="sa-entity-layout__body">
                    <div class="sa-entity-layout__main">
                        <div class="card">
                            <div class="card-body p-5">

                                <form method="post" action="{{ url('master/wherePost/'.$detail->id) }}" onsubmit="return validateForm('addsstatus')" class="addsstatus" autocomplete="off" enctype="multipart/form-data">
                                    @csrf
                                    {{ method_field('PATCH') }}
                                    </br>

                                    <div class="row mb-3">
                                        <label for="Name" class="col-sm-3 col-form-label">Name</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control input-mandatory" id="name" name="name" value="{{$detail->name}}" placeholder="Name" onkeypress="return onlyAlphabets(event,this);">
                                        </div>
                                        @if($errors->has('name'))
                                        <span class="text-danger">{{ $errors->first('name') }}</span>
                                        @endif
                                    </div>
                                    <div class="row mb-3">
                                        <label for="Name" class="col-sm-3 col-form-label">Description</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control input-mandatory" id="description" name="description" value="{{$detail->description}}" placeholder="description" >
                                        </div>
                                        @if($errors->has('description'))
                                        <span class="text-danger">{{ $errors->first('description') }}</span>
                                        @endif
                                    </div>
                                    <div class="row mb-3" id="add">
                                        <label for="Name" class="col-sm-3 col-form-label">Icon</label>
                                        <div class="col-lg-3">
                                            <input type="file" class="form-control input-mandatory" id="image" name="image" value="{{old('image')}}" placeholder="Supply Ability" onchange="preview(frame0)">
                                        </div>
                                        @if($errors->has('image'))
                                            <span class="text-danger">{{ $errors->first('image') }}</span>
                                        @endif
                                        <div class="col-lg-5">
                                            <img id="frame0" src="{{isset($detail->image) ? url($detail->image):''}}" class="" style="width:200px" />
                                        </div>
                                    </div>
                                    </br>
                                    <button type="submit" style="float:right" class="btn btn-info px-5">Save</button>
                                    <a href="{{url('master/wherePost')}}" style="float:right;margin-right: 12px;" class="btn btn-danger reset-btn">Cancel</a>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div><!-- sa-app__body / end --><!-- sa-app__footer -->
@endsection
@section("script")
@include("admin.master.wherePost.js")
@endsection