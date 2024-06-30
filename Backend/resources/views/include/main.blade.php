<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Social</title>
     @include('frontend.include.css')
</head>

<body>

    <div class="all-header-section">
   
       @include('include.header')
       @include('frontend.include.head-logo')
       @include('frontend.include.inquiry')
       @include('frontend.include.wishlist')
       @include('frontend.include.cart')
       @include('frontend.include.main-nav')

    </div>
    

        @include('frontend.include.social-icon-stripped')
        @include('frontend.include.social-icon')
        @yield("wrapper")
       @include('frontend.include.inquery-modal')
       @include('frontend.include.news-letter')
       @include('frontend.include.footer')
      @include('frontend.include.js')


  

</body>

</html>