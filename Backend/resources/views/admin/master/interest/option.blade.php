<div id="ad">
    <div class="row mt-4" id="new">
        <div class="col-md-6">
        </div>
        <div class="row">
            <label for="Name" class="col-sm-3 col-form-label">Interest Name</label>
            <div class="col-sm-6">
                <input type="text" class="form-control me-4" id="city" name="name[{{$count}}]" value="{{old('name')}}" placeholder="Enter Interest Name" >
            </div>
            <div class="col-sm-1"><button type="button" class="btn btn-primary" onclick="addFile()" ><i class="fa fa-solid fa-plus"></i> Add</button></div>
            <div class="col-sm-2"><button type="button" class="btn btn-danger del"><i class="fa fa-solid fa-xmark"></i>  Remove</button></div>
        </div>
    </div>
</div>

<script type="text/javascript">
    $('.del').on('click', function() {
        $(this).closest("#new").remove();
    });
</script>
@include('admin.master.interest.js')