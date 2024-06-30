<script>
    function showImagePreview(input) {
        var file = input.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById('s_photo').src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    }
</script><?php /**PATH /home/profcymabackend/public_html/social.profcymabackend.com/resources/views/admin/master/user/js.blade.php ENDPATH**/ ?>