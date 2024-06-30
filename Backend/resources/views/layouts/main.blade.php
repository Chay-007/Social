<!doctype html>
<html lang="en">

<head>
	<!-- Required meta tags -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!--favicon-->
	<!-- <link rel="icon" href="{{asset('img/Favicon.png')}}" type="image/png" /> -->
	<!--plugins-->
	@include('include.head')
	@yield("css")
    <title>Rashtrasanchar</title>
</head>

<body>
	<!--wrapper-->
	<div class="sa-app sa-app--desktop-sidebar-shown sa-app--mobile-sidebar-hidden sa-app--toolbar-fixed">
        <!-- sa-app__sidebar -->
        @include('include.sidebar')
        <!--end navigation-->
        <div class="sa-app__content">
		<!--start header -->
		@include("layouts.header")
		<!--end header -->

		@yield("wrapper")

		
		@include('include.footer')
        </div><!-- sa-app__content / end --><!-- sa-app__toasts -->
        <div class="sa-app__toasts toast-container bottom-0 end-0"></div><!-- sa-app__toasts / end -->
    </div><!-- sa-app / end --><!-- scripts -->
    @include('include.script')
	@yield("script")
</body>

</html>
