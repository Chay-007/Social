
<script src="<?php echo e(asset('admin/vendor/jquery/jquery.min.js')); ?>"></script>
    <script src="<?php echo e(asset('admin/vendor/feather-icons/feather.min.js')); ?>"></script>
    <script src="<?php echo e(asset('admin/vendor/simplebar/simplebar.min.js')); ?>"></script>
    <script src="<?php echo e(asset('admin/vendor/bootstrap/js/bootstrap.bundle.min.js')); ?>"></script>
    <script src="<?php echo e(asset('admin/vendor/highlight.js/highlight.pack.js')); ?>"></script>
    <script src="<?php echo e(asset('admin/vendor/quill/quill.min.js')); ?>"></script>
    <script src="<?php echo e(asset('admin/vendor/air-datepicker/js/datepicker.min.js')); ?>"></script>
    <script src="<?php echo e(asset('admin/vendor/air-datepicker/js/i18n/datepicker.en.js')); ?>"></script>
    <script src="<?php echo e(asset('admin/vendor/select2/js/select2.min.js')); ?>"></script>
    <script src="<?php echo e(asset('admin/vendor/fontawesome/js/all.min.js')); ?>" data-auto-replace-svg="" async=""></script>
    <script src="<?php echo e(asset('admin/vendor/chart.js/chart.min.js')); ?>"></script>
    <script src="<?php echo e(asset('admin/vendor/datatables/js/jquery.dataTables.min.js')); ?>"></script>
    <script src="<?php echo e(asset('admin/vendor/datatables/js/dataTables.bootstrap5.min.js')); ?>"></script>
    <script src="<?php echo e(asset('admin/vendor/nouislider/nouislider.min.js')); ?>"></script>
    <script src="<?php echo e(asset('admin/vendor/fullcalendar/main.min.js')); ?>"></script>
    <script src="<?php echo e(asset('admin/js/stroyka.js')); ?>"></script>
    <script src="<?php echo e(asset('admin/js/custom.js')); ?>"></script>
    <script src="<?php echo e(asset('admin/js/calendar.js')); ?>"></script>
    <script src="<?php echo e(asset('admin/js/demo.js')); ?>"></script>
    <script src="<?php echo e(asset('admin/js/demo-chart-js.js')); ?>"></script>
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
<?php if(Session::has('message')): ?>
<script>
 
  toastr.options =
  {
  	"closeButton" : true,
  	"progressBar" : true
  }
  		toastr.success("<?php echo e(session('message')); ?>");
    </script>
  <?php endif; ?>

  <?php if(Session::has('error')): ?>
  <script>
  toastr.options =
  {
  	"closeButton" : true,
  	"progressBar" : true
  }
  		toastr.error("<?php echo e(session('error')); ?>");
      </script>
  <?php endif; ?>

  <?php if(Session::has('info')): ?>
  <script>
  toastr.options =
  {
  	"closeButton" : true,
  	"progressBar" : true
  }
  		toastr.info("<?php echo e(session('info')); ?>");
      </script>
  <?php endif; ?>

  <?php if(Session::has('warning')): ?>
  <script>
  toastr.options =
  {
  	"closeButton" : true,
  	"progressBar" : true
  }
  		toastr.warning("<?php echo e(session('warning')); ?>");
      </script>
  <?php endif; ?>


    <?php echo $__env->make("include.theme-control", \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/profcymabackend/public_html/social.profcymabackend.com/resources/views/include/script.blade.php ENDPATH**/ ?>