<!doctype html>
<html lang="en">

<head>
	<!-- Required meta tags -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!--favicon-->
	<!-- <link rel="icon" href="<?php echo e(asset('img/Favicon.png')); ?>" type="image/png" /> -->
	<!--plugins-->
	<?php echo $__env->make('include.head', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
	<?php echo $__env->yieldContent("css"); ?>
    <title>Rashtrasanchar</title>
</head>

<body>
	<!--wrapper-->
	<div class="sa-app sa-app--desktop-sidebar-shown sa-app--mobile-sidebar-hidden sa-app--toolbar-fixed">
        <!-- sa-app__sidebar -->
        <?php echo $__env->make('include.sidebar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
        <!--end navigation-->
        <div class="sa-app__content">
		<!--start header -->
		<?php echo $__env->make("layouts.header", \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
		<!--end header -->

		<?php echo $__env->yieldContent("wrapper"); ?>

		
		<?php echo $__env->make('include.footer', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
        </div><!-- sa-app__content / end --><!-- sa-app__toasts -->
        <div class="sa-app__toasts toast-container bottom-0 end-0"></div><!-- sa-app__toasts / end -->
    </div><!-- sa-app / end --><!-- scripts -->
    <?php echo $__env->make('include.script', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
	<?php echo $__env->yieldContent("script"); ?>
</body>

</html>
<?php /**PATH E:\xampp\htdocs\social\resources\views/layouts/main.blade.php ENDPATH**/ ?>