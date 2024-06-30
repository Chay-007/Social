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
                        <h1 class="h3 m-0">Create New City</h1>
                    </div>
                </div>
            </div>
            <div class="sa-entity-layout" data-sa-container-query="{&quot;920&quot;:&quot;sa-entity-layout--size--md&quot;,&quot;1100&quot;:&quot;sa-entity-layout--size--lg&quot;}">
                <div class="sa-entity-layout__body">
                    <div class="sa-entity-layout__main">
                        <div class="card">
                            <div class="card-body p-5">
                                <form method="post" action="{{ url('master/city') }}" onsubmit="return validateForm('addsstatus')" class="addsstatus" autocomplete="off" enctype="multipart/form-data">
                                    @csrf

                                    </br>
                                    <div class="row mb-3">
                                        <label for="Name" class="col-sm-3 col-form-label">Country</label>
                                        <div class="col-sm-9">
                                            <select class="form-control  select2" id="country_id" name="country_id" onchange="getState(this)">
                                                <option value="">----Select Country----</option>
                                                @foreach($country as $countrys)
                                                <option value="{{$countrys->id}}">{{$countrys->name}}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                        @if($errors->has('country_id'))
                                        <span class="text-danger">{{ $errors->first('country_id') }}</span>
                                        @endif
                                    </div>
                                    <div class="row mb-3">
                                        <label for="Name" class="col-sm-3 col-form-label">Select State</label>
                                        <div class="col-sm-9">
                                            <select class="form-control  select2" id="state_id" name="state_id" onchange="getZone(this)">
                                                <option value="">----Select State----</option>
                                            </select>
                                        </div>
                                        @if($errors->has('state_id'))
                                        <span class="text-danger">{{ $errors->first('state_id') }}</span>
                                        @endif
                                    </div>
                                    <div class="row mb-3">
                                        <label for="Name" class="col-sm-3 col-form-label">City Name</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control " id="city" name="name" value="{{old('name')}}" placeholder="Enter City Name" onkeypress="return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123) || (event.charCode == 32)">
                                        </div>
                                        @if($errors->has('name'))
                                        <span class="text-danger">{{ $errors->first('name') }}</span>
                                        @endif
                                    </div>
                                    <div class="row">

                                    </div>
                                    </br></br>
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
</div>
@endsection
@section("script")
@include('admin.master.city.js')
@endsection