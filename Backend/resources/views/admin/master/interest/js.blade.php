<script type="text/javascript">
    function addFile() {

        var count = $('#count').val();
        count = parseInt(count) + 1;

        $.ajax({
            url: "{{ url('master/addInterst') }}",
            method: "GET",
            data: {
                "_token": "{{ csrf_token() }}",

                "count": count,

            },
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            success: function(data) {
                $('#count').val(count);
                $('#add').append(data);

            }
        })
    }
</script>