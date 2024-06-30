<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Tags extends Model
{
    use Notifiable , SoftDeletes;

     # define table
      protected $table ='tags';
      
      # define fillable fields
      protected $fillable = [
                           'category_id',
                           'user_id',
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
      public function category() 
      {
        return $this->hasOne(new Category(), 'id', 'category_id');  
      }
}
