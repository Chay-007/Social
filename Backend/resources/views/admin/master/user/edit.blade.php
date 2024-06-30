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
                        <h1 class="h3 m-0">User</h1>
                    </div>
                </div>
            </div>
            <div class="sa-entity-layout" data-sa-container-query="{&quot;920&quot;:&quot;sa-entity-layout--size--md&quot;,&quot;1100&quot;:&quot;sa-entity-layout--size--lg&quot;}">
                <div class="sa-entity-layout__body">
                    <div class="sa-entity-layout__main">
                        <div class="card">
                            <div class="card-body p-5">

                                <form method="post" action="{{ url('user/customer/'.$detail->id) }}" onsubmit="return validateForm('addsstatus')" class="addsstatus" autocomplete="off" enctype="multipart/form-data">
                                    @csrf
                                    {{ method_field('PATCH') }}
                                    </br>

                                    <div class="row mb-3">
                                        <label for="Name" class="col-sm-3 col-form-label">Name</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" disabled name="name" value="{{$detail->name}}">
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="Name" class="col-sm-3 col-form-label">Email</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" disabled name="email" value="{{$detail->email}}">
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="Name" class="col-sm-3 col-form-label">Mobile number</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" disabled value="{{$detail->mobile_number}}">
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="Name" class="col-sm-3 col-form-label">Gender</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" disabled value="{{ isset($detail->userProfile) ? $detail->userProfile->gender : ''}}">
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="Name" class="col-sm-3 col-form-label">Date of Birth</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" disabled value="{{ isset($detail->userProfile) ? $detail->userProfile->dob : ''}}">
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="Name" class="col-sm-3 col-form-label">Blood Group</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" disabled value="{{ isset($detail->userProfile) ? $detail->userProfile->blood_group : ''}}">
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="Name" class="col-sm-3 col-form-label">Profession</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" disabled value="{{ isset($detail->userProfile) ? $detail->userProfile->profession : ''}}">
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="Name" class="col-sm-3 col-form-label">Education</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" disabled value="{{ isset($detail->userProfile) ? $detail->userProfile->education : ''}}">
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="Name" class="col-sm-3 col-form-label">LinkedIn</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" disabled value="{{ isset($detail->userProfile) ? $detail->userProfile->linkedin : ''}}">
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="Name" class="col-sm-3 col-form-label">Image</label>
                                        <div class="col-sm-9">
                                            @if($detail->userProfile->image)
                                            <img src="{{ isset($detail->userProfile) ? asset('public/' . $detail->userProfile->image) : ''}}" width="250" height="50" class="img-fluid" id="s_photo">
                                            @else
                                                <span style="color : #ababab;">Image Not Found !</span>
                                            @endif
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="Name" class="col-sm-3 col-form-label">Description</label>
                                        <div class="col-sm-9">
                                            <textarea class="form-control" disabled cols="30" rows="10">{{ isset($detail->userProfile) ? $detail->userProfile->description : ''}}</textarea>
                                        </div>
                                    </div> 
                                    <div class="row mb-3">
                                        <label for="Name" class="col-sm-3 col-form-label">Interest</label>
                                        <div class="col-sm-9">
                                            @if(isset($detail->interest))
                                            @foreach($detail->interest as $code)
                                            <input type="text" class="form-control" disabled value="{{ isset($code->interest) ? $code->interest->name : '' }}">
                                            @endforeach 
                                            @endif  
                                        </div>
                                    </div>
                                    </br>
                                    <a href="{{url('user/customer')}}" class="btn btn-danger reset-btn">Back</a>
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
@include('admin.master.user.js')
@endsection