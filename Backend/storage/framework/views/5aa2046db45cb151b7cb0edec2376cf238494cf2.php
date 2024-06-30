<script type="text/javascript">
    var count;
    function addFile() {

        count = $('#count').val();
        count = parseInt(count) + 1;

        $.ajax({
            url: "<?php echo e(url('master/addwherePost')); ?>",
            method: "GET",
            data: {
                "_token": "<?php echo e(csrf_token()); ?>",

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
    function onlyAlphabets(e, t) {
        try {
            if (window.event) {
                var charCode = window.event.keyCode;
            } else if (e) {
                var charCode = e.which;
            } else {
                return true;
            }

            // Allowing alphabets (A-Z, a-z) and space (charCode 32)
            if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode === 32) {
                return true;
            } else {
                return false;
            }
        } catch (err) {
            alert(err.Description);
        }
    }

    
    function preview(frame) {
        frame.src=URL.createObjectURL(event.target.files[0]);
        $(this).css("display", "block");
    }


</script><?php /**PATH E:\xampp\htdocs\social\resources\views/admin/master/wherePost/js.blade.php ENDPATH**/ ?>