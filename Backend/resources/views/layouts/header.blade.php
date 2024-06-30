<div class="sa-toolbar sa-toolbar--search-hidden sa-app__toolbar">
                <div class="sa-toolbar__body">
                    <!-- <div class="sa-toolbar__item"><button class="sa-toolbar__button" type="button" aria-label="Menu" data-sa-toggle-sidebar=""><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M1,11V9h18v2H1z M1,3h18v2H1V3z M15,17H1v-2h14V17z"></path>
                            </svg></button></div> -->
                    <div class="sa-toolbar__item sa-toolbar__item--search">

                    </div>
                    <div class="mx-auto"></div>
                    <div class="sa-toolbar__item d-sm-none"></div>
                    <div class="sa-toolbar__item dropdown">

                    </div>

                    <div class="dropdown sa-toolbar__item"><button class="sa-toolbar-user" type="" id="dropdownMenuButton" data-bs-toggle="dropdown" data-bs-offset="0,1" aria-expanded="false"><span class="sa-toolbar-user__avatar sa-symbol sa-symbol--shape--rounded"></span><span class="sa-toolbar-user__info"><span class="sa-toolbar-user__title">Welcome ,{{Auth::user()->name}}</span><span class="sa-toolbar-user__subtitle">{{Auth::user()->email}}</span></span></button>
                        <form id="logout-form" action="{{route('logout')}}" method="POST">
                            @csrf
                            <button class="btn btn-danger" type="submit">LogOut</button>
                        </form>

                    </div>
                </div>
                <div class="sa-toolbar__shadow"></div>
            </div><!-- sa-app__toolbar / end --><!-- sa-app__body -->