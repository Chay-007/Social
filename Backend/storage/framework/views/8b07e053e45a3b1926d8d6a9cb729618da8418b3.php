 <option value="">---Select State---</option>
 <?php if(isset($states)): ?>
 <?php $__currentLoopData = $states; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $state): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
 <option value="<?php echo e($state->id); ?>"><?php echo e($state->name); ?></option>
 <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
 <?php endif; ?><?php /**PATH /home/profcymabackend/public_html/social.profcymabackend.com/resources/views/admin/master/state/option.blade.php ENDPATH**/ ?>