const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))



$(".review-box").slice(0,6).show();
$(".loadMore").on("click",function(){
     $(".review-box:hidden").slice(0,2).show();

     if($(".review-box:hidden").length == 0){
         $(".loadMore").fadeOut();
     }
});




var thumbSelect = document.querySelectorAll('.thumb'),
            windowSelect = document.querySelector('.window'),
            thumbCount;

        for (thumbCount = 0; thumbCount < thumbSelect.length; thumbCount++) {
            thumbSelect[thumbCount].onmouseover = function() {
                windowSelect.src = this.src;   
                console.log(windowSelect.src);  
                $("#openImage111").attr("src",windowSelect.src);
            };
        };


function changeDef(){  
    $('#exampleModal5').modal('show');
} 



$(document).ready(function () {
    $('.related-product-slider').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 5000,
        loop: true,
        nav: true,
        dots: false,
        navText: ["<img src='{{url(asset('frontend/assets/Images/icon/previous.png'))}}' alt='previous' width='18'>", "<img src='{{url(asset('frontend/assets/Images/icon/next.png'))}}' alt='next' width='18'>"],
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            768: {
                items: 2,
                nav: false
            },
            992: {
                items: 2,
                nav: true,
                loop: false
            },
            1200: {
                items: 3,
                nav: true,
                loop: false
            },
            1441: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    })
});





function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }