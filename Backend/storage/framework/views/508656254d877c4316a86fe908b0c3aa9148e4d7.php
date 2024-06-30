<!doctype html>
<html class="no-js" lang="en">
    <head> 
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Login | Social</title>
        <meta name="description" content="">
        <meta name="keywords" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <link rel="icon" href="<?php echo e(asset('public/img/favicon.png')); ?>" type="image/x-icon" />

        <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,600,700,800" rel="stylesheet">
        
        <link rel="stylesheet" href="<?php echo e(asset('plugins/bootstrap/dist/css/bootstrap.min.css')); ?>">
        <link rel="stylesheet" href="<?php echo e(asset('plugins/fontawesome-free/css/all.min.css')); ?>">
        <link rel="stylesheet" href="<?php echo e(asset('plugins/ionicons/dist/css/ionicons.min.css')); ?>">
        <link rel="stylesheet" href="<?php echo e(asset('plugins/icon-kit/dist/css/iconkit.min.css')); ?>">
        <link rel="stylesheet" href="<?php echo e(asset('plugins/perfect-scrollbar/css/perfect-scrollbar.css')); ?>">
        <link rel="stylesheet" href="<?php echo e(asset('dist/css/theme.min.css')); ?>">
        <link rel="stylesheet" href="<?php echo e(asset('css/style.css')); ?>">
        <script src="<?php echo e(asset('src/js/vendor/modernizr-2.8.3.min.js')); ?>"></script>
        <style type="text/css">
    body {
        background: url('img/background.png');
        background-size: cover;  
    }
           </style>
    </head>
    <body>
        <div class="auth-wrapper">
            <div class="container-fluid h-100">
                <div class="container">
                    <div class="col-xl-6 col-lg-6 col-md-6 m-auto">
                        <div class="authentication-form mx-auto">
                            <div class="logo-centered">
                                <a href="#"><img src="<?php echo e(asset('public/img/social-logo.png')); ?>" alt="Rashtrasanchar" width="80%"></a>
                            </div>
                            <form method="POST" action="<?php echo e(route('new-login')); ?>">
                            <?php echo csrf_field(); ?>
                                <div class="form-group">
                                    <input id="email" type="email" placeholder="Email" class="form-control <?php $__errorArgs = ['email'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>" name="email" value="<?php echo e(old('email')); ?>" required autocomplete="email" autofocus>
                                    <i class="ik ik-user"></i>
                                    <?php $__errorArgs = ['email'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                                        <span class="invalid-feedback" role="alert">
                                            <strong><?php echo e($message); ?></strong>
                                        </span>
                                    <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                                </div>
                                <div class="form-group">
                                    <input id="password" type="password" placeholder="Password" class="form-control <?php $__errorArgs = ['password'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>" name="password" required>
                                    <i class="ik ik-lock"></i>
                                    <?php $__errorArgs = ['password'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                                    <span class="invalid-feedback" role="alert">
                                        <strong><?php echo e($message); ?></strong>
                                    </span>
                                <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                                </div>
                                   
                                <div class="sign-btn text-center">
                                    <button class="btn btn-custom">Sign In</button>
                                </div>
                                
                                
                            </form>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 m-auto text-center">
                        
                
            </div>
        </div>
        </div>
        <script src="<?php echo e(asset('src/js/vendor/jquery-3.3.1.min.js')); ?>"></script>
        <script src="<?php echo e(asset('plugins/popper.js/dist/umd/popper.min.js')); ?>"></script>
        <script src="<?php echo e(asset('plugins/bootstrap/dist/js/bootstrap.min.js')); ?>"></script>
        <script src="<?php echo e(asset('plugins/perfect-scrollbar/dist/perfect-scrollbar.min.js')); ?>"></script>
        <script src="<?php echo e(asset('plugins/screenfull/dist/screenfull.js')); ?>"></script>
        
    </body>
</html>
<?php /**PATH /home/profcymabackend/public_html/social.profcymabackend.com/resources/views/auth/login.blade.php ENDPATH**/ ?>