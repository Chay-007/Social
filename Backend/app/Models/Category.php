<?php

namespace App\Models;   

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Category extends Model
{
     use Notifiable , SoftDeletes;

     # define table
      protected $table ='categories';
      
      # define fillable fields
      protected $fillable = [
                           'name',
                           'status',
                           
      ];

         /**
       * The attributes that should be cast.
       *
       * @var array
       */
      protected $casts = [
          'status'  => 'boolean',
      ];
      public function tag()
      {
        return $this->hasMany(new Tags(), 'category_id', 'id');
      }
}
