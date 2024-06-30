<div id="ad">
    <div class="row mt-4" id="new">
        <div class="row">
            <label for="Name" class="col-sm-3 col-form-label">Name</label>
            <div class="col-sm-8">
                <input type="text" class="form-control me-4" id="city" name="name[{{$count}}]" value="{{ old('name.'.$count) }}" placeholder="Enter Name" onkeypress="return onlyAlphabets(event,this);">
                @if($errors->has('name'))
                    <span class="text-danger">{{ $errors->first('name') }}</span>
                @endif
            </div>            
        </div>
        <div class="row mt-3">
            <label for="Name" class="col-sm-3 col-form-label">Description</label>
            <div class="col-sm-8">
                <input type="text" class="form-control me-4" id="description" name="description[{{$count}}]" value="{{ old('description.'.$count) }}" placeholder="Enter description">
                @if($errors->has('description'))
                    <span class="text-danger">{{ $errors->first('description') }}</span>
                @endif
            </div>            
        </div>
        <div class="row mt-3">
            <label for="Name" class="col-sm-3 col-form-label">Icon</label>
            <div class="col-sm-2">
            <input type="file" class="form-control input-mandatory" id="image" name="image[{{$count}}]" value="{{old('image')}}" placeholder="Supply Ability" onchange="preview(frame{{$count}})">
            </div>
            @if($errors->has('category_id'))
            <span class="text-danger">{{ $errors->first('category_id') }}</span>
            @endif
            <div class="col-sm-4">
                <img id="frame{{$count}}" class="" style="width:200px" />
            </div>
            <div class="col-sm-3">
                <button type="button" class="btn btn-primary" onclick="addFile()"><i class="fa fa-solid fa-plus"></i> Add</button>
                <button type="button" class="btn btn-danger del"><i class="fa fa-solid fa-trash"></i> Remove</button>
            </div> 
        </div>
    </div>
</div>

<script type="text/javascript">
    $('.del').on('click', function() {
        $(this).closest("#new").remove();
    });    
</script>