<div class="sidebar-wrapper" data-simplebar="true">
            <div class="sidebar-header">
                <div>
                    <img src="{{asset('img/Sidebar-Logo.png')}}" class="logo-icon" alt="logo icon">
                </div>
                <div>
                    <h4 class="logo-text">Afficity</h4>
                </div>
                
            </div>
           
            <ul class="metismenu" id="menu">
                <li>
                    <a href="{{ url('/') }}">
                        <div class="parent-icon"><i class='bx bx-home'></i>
                        </div>
                        <div class="menu-title">Dashboard</div>
                    </a>
                  
                </li>
                <li>
                    <a href="javascript:;" class="has-arrow">
                        <div class="parent-icon"><i class='bx bx-spa' ></i>
                        </div>
                        <div class="menu-title">Astrologer</div>
                    </a>
                    <ul>
                        <li> <a href="{{ url('astrologer') }}"><i class="bx bx-right-arrow-alt"></i>List of Astrologer</a>
                        </li>
                        
                    </ul>
                </li>
                <li>
                    <a href="javascript:;" class="has-arrow">
                        <div class="parent-icon"><i class='bx bx-user-pin' ></i>
                        </div>
                        <div class="menu-title">User</div>
                    </a>
                    <ul>
                        <li> <a href="{{ url('app-emailbox') }}"><i class="bx bx-right-arrow-alt"></i>Customer  List</a></li>
                        <li> <a href="{{ url('app-emailbox') }}"><i class="bx bx-right-arrow-alt"></i>User Wallet</a></li>
                        <li> <a href="{{ url('app-emailbox') }}"><i class="bx bx-right-arrow-alt"></i>Transaction History</a></li>
                       
                    </ul>
                </li>
                <li>
                    <a href="javascript:;" class="has-arrow">
                        <div class="parent-icon"><i class='bx bx-cart-alt'></i>
                        </div>
                        <div class="menu-title">Ecommerce</div>
                    </a>
                    <ul>
                        <li> <a href="{{ url('app-emailbox') }}"><i class="bx bx-right-arrow-alt"></i>Category</a></li>
                        <li> <a href="{{ url('app-emailbox') }}"><i class="bx bx-right-arrow-alt"></i>Products</a></li>
                        <li> <a href="{{ url('app-emailbox') }}"><i class="bx bx-right-arrow-alt"></i>Orders</a></li>
                      
                    </ul>
                </li>
                <li>
                    <a href="javascript:;" class="has-arrow">
                        <div class="parent-icon"><i class='bx bx-group' ></i>
                        </div>
                        <div class="menu-title">Miscellaneous</div>
                    </a>
                    <ul>
                        <li> <a href="{{ url('app-emailbox') }}"><i class="bx bx-right-arrow-alt"></i>Country</a></li>
                        <li> <a href="{{ url('app-emailbox') }}"><i class="bx bx-right-arrow-alt"></i>State</a></li>
                        <li> <a href="{{ url('app-emailbox') }}"><i class="bx bx-right-arrow-alt"></i>City</a></li>
                        <li> <a href="{{ url('app-emailbox') }}"><i class="bx bx-right-arrow-alt"></i>Marital Status</a></li>
                        <li> <a href="{{ url('app-emailbox') }}"><i class="bx bx-right-arrow-alt"></i>Astro24 Language</a></li>

                       
                    </ul>
                </li>
                <li>
                    <a href="javascript:;" class="has-arrow">
                        <div class="parent-icon"><i class='bx bx-cog' ></i>
                        </div>
                        <div class="menu-title">Website Settings</div>
                    </a>
                    <ul>
                        <li> <a href="{{ url('app-emailbox') }}"><i class="bx bx-right-arrow-alt"></i>Blog</a></li>
                        <li> <a href="{{ url('app-emailbox') }}"><i class="bx bx-right-arrow-alt"></i>Banner</a></li>
                       
                    </ul>
                </li>
                <li>
                    <a href="javascript:;" class="has-arrow">
                        <div class="parent-icon"><i class='bx bx-gift' ></i>
                        </div>
                        <div class="menu-title">Offer &amp; Coupon</div>
                    </a>
                    <ul>
                        <li> <a href="{{ url('app-emailbox') }}"><i class="bx bx-right-arrow-alt"></i>Offer</a></li>
                        <li> <a href="{{ url('app-emailbox') }}"><i class="bx bx-right-arrow-alt"></i>Coupon</a></li>
                        <li> <a href="{{ url('app-emailbox') }}"><i class="bx bx-right-arrow-alt"></i>Astrologer Referrals</a></li>
                        <li> <a href="{{ url('app-emailbox') }}"><i class="bx bx-right-arrow-alt"></i>User Referrals</a></li>
                       
                    </ul>
                </li>
              
                <li>
                    <a href="javascript:;" class="has-arrow">
                        <div class="parent-icon"><i class='bx bx-cart-alt' ></i>
                        </div>
                        <div class="menu-title">eCommerce</div>
                    </a>
                    <ul>
                        <li> <a href="{{ url('ecommerce-products') }}"><i class="bx bx-right-arrow-alt"></i>Products</a>
                        </li>
                        <li> <a href="{{ url('ecommerce-products-details') }}"><i class="bx bx-right-arrow-alt"></i>Product Details</a>
                        </li>
                        <li> <a href="{{ url('ecommerce-add-new-products') }}"><i class="bx bx-right-arrow-alt"></i>Add New Products</a>
                        </li>
                        <li> <a href="{{ url('ecommerce-orders') }}"><i class="bx bx-right-arrow-alt"></i>Orders</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <!--end navigation-->
        </div>