
<?php $__env->startSection("css"); ?>

<?php $__env->stopSection(); ?>
<?php $__env->startSection("wrapper"); ?>
<div id="top" class="sa-app__body">
    <div class="mx-sm-2 px-2 px-sm-3 px-xxl-4 pb-6">
        <div class="container">
            <div class="py-5">
                <div class="row g-4 align-items-center">
                    <div class="col">
                        <nav class="mb-2" aria-label="breadcrumb">
                            <ol class="breadcrumb breadcrumb-sa-simple">

                                <li class="breadcrumb-item active" aria-current="page"></li>
                            </ol>
                        </nav>
                        <h1 class="h3 m-0">User</h1>
                    </div>
                </div>
            </div>
            <div class="sa-entity-layout" data-sa-container-query="{&quot;920&quot;:&quot;sa-entity-layout--size--md&quot;,&quot;1100&quot;:&quot;sa-entity-layout--size--lg&quot;}">
                <div class="sa-entity-layout__body">
                    <div class="sa-entity-layout__main">
                        <div class="card">
                            <div class="card-body p-5">

                                <form method="post" action="<?php echo e(url('user/customer/'.$detail->id)); ?>" onsubmit="return validateForm('addsstatus')" class="addsstatus" autocomplete="off" enctype="multipart/form-data">
                                    <?php echo csrf_field(); ?>
                                    <?php echo e(method_field('PATCH')); ?>

                                    </br>

                                    <div class="row mb-3">
                                        <label for="Name" class="col-sm-3 col-form-label">Name</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" disabled name="name" value="<?php echo e($detail->name); ?>">
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="Name" class="col-sm-3 col-form-label">Email</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" disabled name="email" value="<?php echo e($detail->email); ?>">
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="Name" class="col-sm-3 col-form-label">Mobile number</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" disabled value="<?php echo e($detail->mobile_number); ?>">
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="Name" class="col-sm-3 col-form-label">Gender</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" disabled value="<?php echo e(isset($detail->userProfile) ? $detail->userProfile->gender : ''); ?>">
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="Name" class="col-sm-3 col-form-label">Date of Birth</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" disabled value="<?php echo e(isset($detail->userProfile) ? $detail->userProfile->dob : ''); ?>">
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="Name" class="col-sm-3 col-form-label">Blood Group</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" disabled value="<?php echo e(isset($detail->userProfile) ? $detail->userProfile->blood_group : ''); ?>">
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="Name" class="col-sm-3 col-form-label">Profession</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" disabled value="<?php echo e(isset($detail->userProfile) ? $detail->userProfile->profession : ''); ?>">
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="Name" class="col-sm-3 col-form-label">Education</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" disabled value="<?php echo e(isset($detail->userProfile) ? $detail->userProfile->education : ''); ?>">
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="Name" class="col-sm-3 col-form-label">LinkedIn</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" disabled value="<?php echo e(isset($detail->userProfile) ? $detail->userProfile->linkedin : ''); ?>">
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="Name" class="col-sm-3 col-form-label">Image</label>
                                        <div class="col-sm-9">
                                            <?php if($detail->userProfile->image): ?>
                                            <img src="<?php echo e(isset($detail->userProfile) ? asset('public/' . $detail->userProfile->image) : ''); ?>" width="250" height="50" class="img-fluid" id="s_photo">
                                            <?php else: ?>
                                                <span style="color : #ababab;">Image Not Found !</span>
                                            <?php endif; ?>
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="Name" class="col-sm-3 col-form-label">Description</label>
                                        <div class="col-sm-9">
                                            <textarea class="form-control" disabled cols="30" rows="10"><?php echo e(isset($detail->userProfile) ? $detail->userProfile->description : ''); ?></textarea>
                                        </div>
                                    </div> 
                                    <div class="row mb-3">
                                        <label for="Name" class="col-sm-3 col-form-label">Interest</label>
                                        <div class="col-sm-9">
                                            <?php if(isset($detail->interest)): ?>
                                            <?php $__currentLoopData = $detail->interest; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $code): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                            <input type="text" class="form-control" disabled value="<?php echo e(isset($code->interest) ? $code->interest->name : ''); ?>">
                                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?> 
                                            <?php endif; ?>  
                                        </div>
                                    </div>
                                    </br>
                                    <a href="<?php echo e(url('user/customer')); ?>" class="btn btn-danger reset-btn">Back</a>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div><!-- sa-app__body / end --><!-- sa-app__footer -->
<?php $__env->stopSection(); ?>
<?php $__env->startSection("script"); ?>
<?php echo $__env->make('admin.master.user.js', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.main', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/profcymabackend/public_html/social.profcymabackend.com/resources/views/admin/master/user/edit.blade.php ENDPATH**/ ?>