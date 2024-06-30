<!doctype html>
<html class="no-js" lang="en">
    <head> 
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Login | Social</title>
        <meta name="description" content="">
        <meta name="keywords" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <link rel="icon" href="{{asset('public/img/favicon.png')}}" type="image/x-icon" />

        <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,600,700,800" rel="stylesheet">
        
        <link rel="stylesheet" href="{{ asset('plugins/bootstrap/dist/css/bootstrap.min.css') }}">
        <link rel="stylesheet" href="{{ asset('plugins/fontawesome-free/css/all.min.css') }}">
        <link rel="stylesheet" href="{{ asset('plugins/ionicons/dist/css/ionicons.min.css') }}">
        <link rel="stylesheet" href="{{ asset('plugins/icon-kit/dist/css/iconkit.min.css') }}">
        <link rel="stylesheet" href="{{ asset('plugins/perfect-scrollbar/css/perfect-scrollbar.css') }}">
        <link rel="stylesheet" href="{{ asset('dist/css/theme.min.css') }}">
        <link rel="stylesheet" href="{{ asset('css/style.css') }}">
        <script src="{{ asset('src/js/vendor/modernizr-2.8.3.min.js') }}"></script>
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
                                <a href="#"><img src="{{ asset('public/img/social-logo.png') }}" alt="Rashtrasanchar" width="80%"></a>
                            </div>
                            <form method="POST" action="{{ route('new-login') }}">
                            @csrf
                                <div class="form-group">
                                    <input id="email" type="email" placeholder="Email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
                                    <i class="ik ik-user"></i>
                                    @error('email')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                                <div class="form-group">
                                    <input id="password" type="password" placeholder="Password" class="form-control @error('password') is-invalid @enderror" name="password" required>
                                    <i class="ik ik-lock"></i>
                                    @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
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
        <script src="{{ asset('src/js/vendor/jquery-3.3.1.min.js') }}"></script>
        <script src="{{ asset('plugins/popper.js/dist/umd/popper.min.js') }}"></script>
        <script src="{{ asset('plugins/bootstrap/dist/js/bootstrap.min.js') }}"></script>
        <script src="{{ asset('plugins/perfect-scrollbar/dist/perfect-scrollbar.min.js') }}"></script>
        <script src="{{ asset('plugins/screenfull/dist/screenfull.js') }}"></script>
        
    </body>
</html>
