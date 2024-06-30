<?php

namespace App\Traits;

# Models
use App\Models\User;

trait EmployeeTraits {

	function totalEmployee(){
		return User::where('type','=','employee')->count();
	}
	function totalEmployeeActive(){
		return User::where('type','=','employee')->where('status',1)->count();
	}
	function totalEmployeeInActive(){
		return User::where('type','=','employee')->where('status',0)->count();
	}

}
