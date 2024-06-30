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
                        <h1 class="h3 m-0">Create New Interest</h1>
                    </div>
                </div>
            </div>
            <div class="sa-entity-layout" data-sa-container-query="{&quot;920&quot;:&quot;sa-entity-layout--size--md&quot;,&quot;1100&quot;:&quot;sa-entity-layout--size--lg&quot;}">
                <div class="sa-entity-layout__body">
                    <div class="sa-entity-layout__main">
                        <div class="card">
                            <div class="card-body p-5">
                                <form method="post" action="{{ url('master/interest') }}" onsubmit="return validateForm('addsstatus')" class="addsstatus" autocomplete="off" enctype="multipart/form-data">
                                    @csrf
                                    </br>
                                    <div class="row mb-3" id="add">
                                        <label for="Name" class="col-sm-3 col-form-label">Interest Name</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control " id="city" name="name" value="{{old('name')}}" placeholder="Enter Interest Name" >
                                        </div>
                                        @if($errors->has('name'))
                                        <span class="text-danger">{{ $errors->first('name') }}</span>
                                        @endif
                                    </div>
                                    <div class="row">
                                    </div>
                                    </br></br>
                                    <button type="submit" style="float:right" class="btn btn-info px-5">Save</button>
                                    <a href="{{url('master/interest')}}" style="float:right;margin-right: 12px;" class="btn btn-danger reset-btn">Cancel</a>
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
@endsection