
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>
<script type="text/javascript">
	
    // Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
$(".img-fluid").click(function(){
   modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

$("#p_image").change(function() {
  readURLphoto(this);
});


function readURLphoto(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    
    reader.onload = function(e) {
      $('#s_photo').attr('src', e.target.result);

      $("#s_photo").css("display", "block");
    }
    
    reader.readAsDataURL(input.files[0]); // convert to base64 string
  }
}

</script>