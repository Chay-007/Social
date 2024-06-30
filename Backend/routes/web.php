<?php

use Illuminate\Support\Facades\Route;

#Start Master Controller
use App\Http\Controllers\Admin\Master\CountryController;
use App\Http\Controllers\Admin\Master\StateController;
use App\Http\Controllers\Admin\Master\CityController;
use App\Http\Controllers\Admin\Master\CategoryController;
use App\Http\Controllers\Admin\Master\InterestsController;
use App\Http\Controllers\Admin\Master\CustomerController;
use App\Http\Controllers\Admin\Master\DaysController;
use App\Http\Controllers\Admin\Master\TagsController;
use App\Http\Controllers\Admin\Master\WhereToPostController;
#End Master Controller




#Start Admin Controller
use App\Http\Controllers\UserController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\Auth\LoginController;
#End Admin Controller

#
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



  Route::auth();
Route::get('/admin-login', function () {
    return view('auth.login');
});
Route::get('/', function () {
    return view('auth.login');
});



 Auth::routes(['login' => false,'register' => false]);
  Route::post('register', [LoginController::class, 'login'])->name('new-login');


Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
   
#Start Admin Routes
    Route::group([ 'prefix'=>'team','middleware' =>['auth'] ], function()
    {

    #Start route user 
        Route::resource('roles', RoleController::class);
        Route::resource('users', UserController::class); 
         Route::get('users/delete/{id}', [UserController::class, 'destroy']);
        Route::get('users/changestatus/{id}', [UserController::class, 'changeStatus']);
    #End route user

  });
 #End Admin Routes




#Start Master Routes
Route::group([ 'prefix'=>'master','middleware' =>['auth'] ], function()
{     
    #Start route country  
    Route::resource('country', CountryController::class);
    Route::get('country/delete/{id}', [CountryController::class, 'destroy']);
    Route::get('country/changestatus/{id}', [CountryController::class, 'changeStatus']);
    #End route country  
  
    #Start route state  
    Route::resource('state', StateController::class);
    Route::get('state/delete/{id}', [StateController::class, 'destroy']);
    Route::get('state/changestatus/{id}', [StateController::class, 'changeStatus']);
    Route::get('country-wise-state', [StateController::class, 'countryWiseState']);
  
    #End route state  
  
    #Start route city  
    Route::resource('city', CityController::class);
    Route::get('city/delete/{id}', [CityController::class, 'destroy']);
    Route::get('city/changestatus/{id}', [CityController::class, 'changeStatus']);
    Route::get('state-wise-city', [CityController::class, 'stateWiseCity']);
    #End route city

    #Start route Interests  
    Route::resource('interest', InterestsController::class);
    Route::get('interest/delete/{id}', [InterestsController::class, 'destroy']);
    Route::get('interest/changestatus/{id}', [InterestsController::class, 'changeStatus']);
    Route::get('addInterst', [InterestsController::class, 'addInterst']);
    #End route Interests
    
    #Start route tags  
    Route::resource('tags', TagsController::class);
    Route::get('tags/delete/{id}', [TagsController::class, 'destroy']);
    Route::get('tags/changestatus/{id}', [TagsController::class, 'changeStatus']);
    Route::get('addtags', [TagsController::class, 'addtags']);
    #End route tags
   
    #Start route days  
    Route::resource('days', DaysController::class);
    Route::get('days/delete/{id}', [DaysController::class, 'destroy']);
    Route::get('days/changestatus/{id}', [DaysController::class, 'changeStatus']);
    Route::get('adddays', [DaysController::class, 'adddays']);
    #End route days
    
    #Start route wherePost  
    Route::resource('wherePost', WhereToPostController::class);
    Route::get('wherePost/delete/{id}', [WhereToPostController::class, 'destroy']);
    Route::get('wherePost/changestatus/{id}', [WhereToPostController::class, 'changeStatus']);
    Route::get('addwherePost', [WhereToPostController::class, 'addwherePost']);
    #End route wherePost

    #Start route category  
    Route::resource('category', CategoryController::class);
    Route::get('category/delete/{id}', [CategoryController::class, 'destroy']);
    Route::get('category/changestatus/{id}', [CategoryController::class, 'changeStatus']);
    #End route category   
  });
#End Master Routes



#Start User Routes
Route::group([ 'prefix'=>'user','middleware' =>['auth'] ], function()
{     
  #Start route Customer  
  Route::resource('customer', CustomerController::class);
  Route::get('customer/delete/{id}', [CustomerController::class, 'destroy']);
  #End route Customer 
});
#End User Routes