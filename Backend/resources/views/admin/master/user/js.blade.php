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
</script>