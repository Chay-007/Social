
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
                    <h1 class="h3 m-0">Country</h1>
                </div>
                <div class="col-md-6 text-end"><a href="<?php echo e(url('master/country/create')); ?>" class="btn btn-primary radius-30 mt-2 mt-lg-0"><i class="bx bxs-plus-square"></i>Create New Country</a></div>
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
                                                <input type="text" name="search_name" id="search_by_name-btn" class="form-control" placeholder="Search by Contry Name" value="<?php echo e(Request::get('search_name')); ?>">
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
                                            <a href="<?php echo e(url('master/country')); ?>" class="btn btn-danger reset-btn">Reset</a>
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
                                <th>Contry Name</th>
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
                                <td><?php echo e($list->name); ?></td>
                                <td>
                                    <a href="<?php echo e(url('/master/country/changestatus/'.$list->id)); ?>" class="badge rounded-pill p-2 px-3 btn-<?php echo e(($list->status == '0') ? 'danger' : 'success'); ?> button_flow" data-toggle="tooltip" data-placement="top" title="" onclick="return confirm('Do you Really want to <?php echo e(($list->status == '0') ? 'Active' : 'Inactive'); ?> this country ?')"> <i class="fa <?php echo e(($list->status == '0') ? 'fa-toggle-off' : 'fa-toggle-on'); ?> fa-xl"></i></a>
                                </td>
                                <td>
                                    <div class="d-flex order-actions">

                                        <a href="<?php echo e(url('master/country/'.$list->id.'/edit')); ?>" class="">Edit<i class='bx bxs-edit'></i></a>

                                        <a href="<?php echo e(url('/master/country/delete/'.$list->id)); ?>" class="ms-3" onclick="return confirm('Do you really Want to Delete the  country ?')">Delete<i class='bx bxs-trash'></i></a>

                                    </div>
                                </td>
                            </tr>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                            <tr>
                                <td>Record not found </td>
                            </tr>

                            <?php endif; ?>
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
</div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.main', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/profcymabackend/public_html/social.profcymabackend.com/resources/views/admin/master/country/index.blade.php ENDPATH**/ ?>