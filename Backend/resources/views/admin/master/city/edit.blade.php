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
                        <h1 class="h3 m-0">Edit City</h1>
                    </div>
                </div>
            </div>
            <div class="sa-entity-layout" data-sa-container-query="{&quot;920&quot;:&quot;sa-entity-layout--size--md&quot;,&quot;1100&quot;:&quot;sa-entity-layout--size--lg&quot;}">
                <div class="sa-entity-layout__body">
                    <div class="sa-entity-layout__main">
                        <div class="card">
                            <div class="card-body p-5">

                                <form method="post" action="{{ url('master/city/'.$detail->id) }}" onsubmit="return validateForm('addsstatus')" class="addsstatus" autocomplete="off" enctype="multipart/form-data">
                                    @csrf
                                    {{ method_field('PATCH') }}
                                    </br>
                                    <div class="row mb-3">
                                        <label for="Name" class="col-sm-3 col-form-label">Country Name</label>
                                        <div class="col-sm-9">
                                            <select class="form-control select2 input-mandatory" name="country_id" onchange="getState(this);">
                                                <option value="">---Select Country---</option>
                                                @foreach($country as $caste)
                                                <option value="{{$caste->id}}" {{ $detail->country_id== $caste->id ? 'Selected' : ''  }}>{{$caste->name}}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                        @if($errors->has('country_id'))
                                        <span class="text-danger">{{ $errors->first('country_id') }}</span>
                                        @endif
                                    </div>

                                    <div class="row mb-3">
                                        <label for="Name" class="col-sm-3 col-form-label">State Name</label>
                                        <div class="col-sm-9">
                                            <select class="form-control select2 input-mandatory" name="state_id" id="state_id">
                                                <option value="">---Select State---</option>
                                                @foreach($state as $caste)
                                                <option value="{{$caste->id}}" {{ $detail->state_id== $caste->id ? 'Selected' : ''  }}>{{$caste->name}}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                        @if($errors->has('state_id'))
                                        <span class="text-danger">{{ $errors->first('state_id') }}</span>
                                        @endif
                                    </div>

                                    <div class="row mb-3">
                                        <label for="Name" class="col-sm-3 col-form-label">City Name</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control input-mandatory" id="name" name="name" value="{{$detail->name}}" placeholder="City Name" onkeypress="return onlyAlphabets(event,this);">
                                        </div>
                                        @if($errors->has('name'))
                                        <span class="text-danger">{{ $errors->first('name') }}</span>
                                        @endif
                                    </div>
                                    </br>
                                    <button type="submit" style="float:right" class="btn btn-info px-5">Save</button>
                                    <a href="{{url('master/city')}}" style="float:right;margin-right: 12px;" class="btn btn-danger reset-btn">Cancel</a>
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
@include('admin.master.city.js')
@endsection