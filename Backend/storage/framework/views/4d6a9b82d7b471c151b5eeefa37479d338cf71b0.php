
<?php $__env->startSection("css"); ?>

<?php $__env->stopSection(); ?>
<?php $__env->startSection("wrapper"); ?>
<div id="top" class="sa-app__body">
    <div class="mx-xxl-3 px-4 px-sm-5">
        <div class="py-5">
            <div class="row g-4 align-items-center">
                <div class="col">
                    <nav class="mb-2" aria-label="breadcrumb">
                        <ol class="breadcrumb breadcrumb-sa-simple">

                            <li class="breadcrumb-item active" aria-current="page"></li>
                        </ol>
                    </nav>
                    <h1 class="h3 m-0">State</h1>
                </div>
                <div class="col-md-6 text-end"><a href="<?php echo e(url('master/state/create')); ?>" class="btn btn-primary radius-30 mt-2 mt-lg-0"><i class="bx bxs-plus-square"></i>Create New State</a></div>
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
                                                <input type="text" name="search_name" id="search_by_name-btn" class="form-control" placeholder="Search by State Name" value="<?php echo e(Request::get('search_name')); ?>">
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group">
                                                <select class="form-control select2" name="search_status" style="width: 100%;">
                                                    <option value="">--Select Status --</option>
                                                    <option value="1" <?php echo e(Request::get('search_status') == '1' ? 'selected' : ''); ?>>Active</option>
                                                    <option value="0" <?php echo e(Request::get('search_status') == '0' ? 'selected' : ''); ?>>Inactive</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-1">
                                            <button type="submit" class="btn btn-success">Search</button>
                                        </div>
                                        <div class="col-md-1">
                                            <a href="<?php echo e(url('master/state')); ?>" class="btn btn-danger reset-btn">Reset</a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="sa-divider"></div>
                    <table class="sa-datatables-init">
                        <thead>
                            <tr>
                                <th class="w-min" data-orderable="false">
                                </th>
                                <th>No</th>
                                <th>Country Name</th>
                                <th>State Name</th>
                                <th>Status</th>
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
                                <td><?php echo e(isset($list->couuntry) ? $list->couuntry->name : ''); ?></td>
                                <td><?php echo e($list->name); ?></td>
                                <td>
                                    <a href="<?php echo e(url('/master/state/changestatus/'.$list->id)); ?>" class="badge rounded-pill p-2 px-3 btn-<?php echo e(($list->status == '0') ? 'danger' : 'success'); ?> button_flow" data-toggle="tooltip" data-placement="top" title="" onclick="return confirm('Do you Really want to <?php echo e(($list->status == '0') ? 'Active' : 'Inactive'); ?> this state ?')"> <i class="fa <?php echo e(($list->status == '0') ? 'fa-toggle-off' : 'fa-toggle-on'); ?> fa-xl"></i></a>
                                </td>
                                <td>
                                    <div class="d-flex order-actions">

                                        <a href="<?php echo e(url('master/state/'.$list->id.'/edit')); ?>" class="">Edit<i class='bx bxs-edit'></i></a>

                                        <a href="<?php echo e(url('/master/state/delete/'.$list->id)); ?>" class="ms-3" onclick="return confirm('Do you really Want to Delete the  state ?')">Delete<i class='bx bxs-trash'></i></a>

                                    </div>
                                </td>
                            </tr>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                            <tr>
                                <td colspan="6" class="text-center">Record not found </td>
                            </tr>

                            <?php endif; ?>
                        </tbody>

                        </tbody>
                    </table>
                    <div class="sa-divider"></div>
                    <div class="row m-3">
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
<?php echo $__env->make('layouts.main', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH E:\xampp\htdocs\social\resources\views/admin/master/state/index.blade.php ENDPATH**/ ?>