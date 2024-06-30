
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
                        <h1 class="h3 m-0">Create New Category</h1>
                    </div>
                </div>
            </div>
            <div class="sa-entity-layout" data-sa-container-query="{&quot;920&quot;:&quot;sa-entity-layout--size--md&quot;,&quot;1100&quot;:&quot;sa-entity-layout--size--lg&quot;}">
                <div class="sa-entity-layout__body">
                    <div class="sa-entity-layout__main">
                        <div class="card">
                            <div class="card-body p-5">
                                <form method="post" action="<?php echo e(url('master/category')); ?>" onsubmit="return validateForm('addsstatus')" class="addsstatus" autocomplete="off" enctype="multipart/form-data">
                                    <?php echo csrf_field(); ?>
                                    </br>
                                    <div class="row mb-3" id="add">
                                        <label for="Name" class="col-sm-3 col-form-label">Category Name</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control " id="city" name="name" value="<?php echo e(old('name')); ?>" placeholder="Enter Category Name" >
                                        </div>
                                        <?php if($errors->has('name')): ?>
                                        <span class="text-danger"><?php echo e($errors->first('name')); ?></span>
                                        <?php endif; ?>
                                    </div>
                                    <div class="row">
                                    </div>
                                    </br></br>
                                    <button type="submit" style="float:right" class="btn btn-info px-5">Save</button>
                                    <a href="<?php echo e(url('master/category')); ?>" style="float:right;margin-right: 12px;" class="btn btn-danger reset-btn">Cancel</a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<?php $__env->stopSection(); ?>
<?php $__env->startSection("script"); ?>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.main', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/profcymabackend/public_html/social.profcymabackend.com/resources/views/admin/master/category/create.blade.php ENDPATH**/ ?>