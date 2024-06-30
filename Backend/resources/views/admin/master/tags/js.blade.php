<script type="text/javascript">
    function addFile() {

        var count = $('#count').val();
        count = parseInt(count) + 1;

        $.ajax({
            url: "{{ url('master/addtags') }}",
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
    function onlyAlphabetsAndNumerals(e, t) {
    try {
        if (window.event) {
            var charCode = window.event.keyCode;
        } else if (e) {
            var charCode = e.which;
        } else {
            return true;
        }

        // Allow A-Z, a-z, and 0-9
        if ((charCode >= 48 && charCode <= 57) || // 0-9
            (charCode >= 65 && charCode <= 90) || // A-Z
            (charCode >= 97 && charCode <= 122)) { // a-z
            return true;
        } else {
            return false;
        }
    } catch (err) {
        alert(err.Description);
    }
}
    $('.del').on('click', function() {
        $(this).closest("#new").remove();
    });

</script>