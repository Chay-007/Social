  <?php if($paginator->hasPages()): ?>

         <!--  <nav aria-label="Page navigation example"> -->
              <ul class="pagination round-pagination justify-content-center">
                 <?php if($paginator->onFirstPage()): ?>
                  <li class="page-item"><a class="page-link" href="javascript:;"><?php echo __('pagination.previous'); ?></a>
                  </li>
                  <?php else: ?>
                  <li class="page-item"><a class="page-link" href="<?php echo e($paginator->previousPageUrl()); ?>"><?php echo __('pagination.previous'); ?></a>
                  </li>
                  <?php endif; ?>

                     <?php $__currentLoopData = $elements; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key=>$element): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                      <?php if(is_array($element)): ?>
                        <?php $__currentLoopData = $element; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $page => $url): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                          <?php if($page == $paginator->currentPage()): ?>
                            <li class="page-item <?php echo e($page == $paginator->currentPage() ? 'active' : ''); ?>"><a class="page-link" href="<?php echo e($url); ?>"><?php echo e($page); ?></a>
                            </li>
                          <?php else: ?>
                          
                          <li class="page-item "><a class="page-link " href="<?php echo e($url); ?>"><?php echo e($page); ?></a>
                            </li>
                          <?php endif; ?>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                      <?php endif; ?>
                     <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                   <?php if($paginator->hasMorePages()): ?>
                   <li class="page-item"><a class="page-link" href="<?php echo e($paginator->nextPageUrl()); ?>"><?php echo __('pagination.next'); ?></a>
                  </li>
                   <?php else: ?>
                     <li class="page-item"><a class="page-link" href="javascript:;"><?php echo __('pagination.next'); ?></a>
                  </li>
                   <?php endif; ?>
                  
              </ul>
          <!-- </nav> -->
          
 

  <?php endif; ?><?php /**PATH E:\xampp\htdocs\social\resources\views/vendor/pagination/default.blade.php ENDPATH**/ ?>