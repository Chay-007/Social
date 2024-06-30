
<script src="{{asset('admin/vendor/jquery/jquery.min.js')}}"></script>
    <script src="{{asset('admin/vendor/feather-icons/feather.min.js')}}"></script>
    <script src="{{asset('admin/vendor/simplebar/simplebar.min.js')}}"></script>
    <script src="{{asset('admin/vendor/bootstrap/js/bootstrap.bundle.min.js')}}"></script>
    <script src="{{asset('admin/vendor/highlight.js/highlight.pack.js')}}"></script>
    <script src="{{asset('admin/vendor/quill/quill.min.js')}}"></script>
    <script src="{{asset('admin/vendor/air-datepicker/js/datepicker.min.js')}}"></script>
    <script src="{{asset('admin/vendor/air-datepicker/js/i18n/datepicker.en.js')}}"></script>
    <script src="{{asset('admin/vendor/select2/js/select2.min.js')}}"></script>
    <script src="{{asset('admin/vendor/fontawesome/js/all.min.js')}}" data-auto-replace-svg="" async=""></script>
    <script src="{{asset('admin/vendor/chart.js/chart.min.js')}}"></script>
    <script src="{{asset('admin/vendor/datatables/js/jquery.dataTables.min.js')}}"></script>
    <script src="{{asset('admin/vendor/datatables/js/dataTables.bootstrap5.min.js')}}"></script>
    <script src="{{asset('admin/vendor/nouislider/nouislider.min.js')}}"></script>
    <script src="{{asset('admin/vendor/fullcalendar/main.min.js')}}"></script>
    <script src="{{asset('admin/js/stroyka.js')}}"></script>
    <script src="{{asset('admin/js/custom.js')}}"></script>
    <script src="{{asset('admin/js/calendar.js')}}"></script>
    <script src="{{asset('admin/js/demo.js')}}"></script>
    <script src="{{asset('admin/js/demo-chart-js.js')}}"></script>
    <!-- JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>
<style type="text/css">
    .main {
   display: none;
}
 .main1 {
   display: none;
}
 
</style>
@if(Session::has('message'))
<script>
 
  toastr.options =
  {
  	"closeButton" : true,
  	"progressBar" : true
  }
  		toastr.success("{{ session('message') }}");
    </script>
  @endif

  @if(Session::has('error'))
  <script>
  toastr.options =
  {
  	"closeButton" : true,
  	"progressBar" : true
  }
  		toastr.error("{{ session('error') }}");
      </script>
  @endif

  @if(Session::has('info'))
  <script>
  toastr.options =
  {
  	"closeButton" : true,
  	"progressBar" : true
  }
  		toastr.info("{{ session('info') }}");
      </script>
  @endif

  @if(Session::has('warning'))
  <script>
  toastr.options =
  {
  	"closeButton" : true,
  	"progressBar" : true
  }
  		toastr.warning("{{ session('warning') }}");
      </script>
  @endif


    @include("include.theme-control")