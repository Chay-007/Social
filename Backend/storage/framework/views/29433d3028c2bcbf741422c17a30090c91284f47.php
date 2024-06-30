
<?php $__env->startSection("css"); ?>

<?php $__env->stopSection(); ?>
<?php $__env->startSection("wrapper"); ?>
<div id="top" class="sa-app__body">
    <div class="mx-xxl-3 px-4 px-sm-5">
        <div class="py-5">
            <div class="row g-4 align-items-center">
                <div class="col-md-6">
                    <h1 class="h3 m-0">Users</h1>
                </div>
            </div>
        </div>
    </div>
    <div class="mx-xxl-3 px-4 px-sm-5 pb-6">
        <div class="sa-layout">
            <div class="sa-layout__backdrop" data-sa-layout-sidebar-close=""></div>            
            <div class="sa-layout__content">
                <div class="card">
                    <div class="p-4">
                        <div class="row g-4">
                            <form role="form" method="get" action="">
                                <div class="box-body">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <div class="form-group">
                                                <input type="text" name="search_name" id="search_by_name-btn" class="form-control" placeholder="Search by Name" value="<?php echo e(Request::get('search_name')); ?>">
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group">
                                                <input type="text" name="search_email" id="search_by_email-btn" class="form-control" placeholder="Search by Email" value="<?php echo e(Request::get('search_email')); ?>">
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group">
                                                <input type="text" name="search_number" id="search_by_number-btn" class="form-control" placeholder="Search by Mobile Number" value="<?php echo e(Request::get('search_number')); ?>">
                                            </div>
                                        </div>

                                        <div class="col-md-1">
                                            <button type="submit" class="btn btn-success">Search</button>
                                        </div>
                                        <div class="col-md-1">
                                            <a href="<?php echo e(url('user/customer')); ?>" class="btn btn-danger reset-btn">Reset</a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="sa-divider"></div>
                    <table class="sa-datatables">
                        <thead>
                            <tr>
                                <th class="w-min" data-orderable="false">
                                </th>
                                <th>No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile Number</th>
                                <th width="280px">Action</th>

                            </tr>
                            <?php
                            $page=1;
                            if(Request::input('page'))
                            $page=Request::input('page');
                            $sort = $lists->perPage();
                            ?>
                        </thead>
                        <tbody>
                            <?php $__empty_1 = true; $__currentLoopData = $lists; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $list): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>

                            <tr>
                                <td></td>
                                <td><?php echo e($sort*($page-1)+($key+1)); ?></td>
                                <td><?php echo e($list->name); ?></td>
                                <td><?php echo e($list->email); ?></td>
                                <td><?php echo e($list->mobile_number); ?></td>
                                <td>
                                    <div class="d-flex order-actions">
                                        <a href="<?php echo e(url('user/customer/'.$list->id.'/edit')); ?>" class=""><i class='fa fa-eye'></i></a>
                                    </div>
                                </td>
                            </tr>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                            <tr>
                                <td colspan="6">Record not found </td>
                            </tr>
                            <?php endif; ?>
                        </tbody>
                    </table>
                    <div class="row">
                        <div class="col-md-6 text-start" style="margin: 20px 0px;">
                            Showing <?php echo e($lists->firstItem()); ?> to <?php echo e($lists->lastItem()); ?> of <?php echo e($lists->total()); ?>

                        </div>
                        <div class="col-md-6 text-end">
                            <?php echo e($lists->links('vendor.pagination.default')); ?>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div><!-- sa-app__body / end --><!-- sa-app__footer -->
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.main', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/profcymabackend/public_html/social.profcymabackend.com/resources/views/admin/master/user/index.blade.php ENDPATH**/ ?>