<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class PostMaster extends Model
{
    use Notifiable , SoftDeletes;

     # define table
      protected $table ='post_masters';
      
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
          'status'                  => 'boolean',
      ];
}
