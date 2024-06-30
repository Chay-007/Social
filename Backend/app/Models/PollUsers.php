<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class PollUsers extends Model
{
    use Notifiable , SoftDeletes;

     # define table
      protected $table ='poll_users';
      
      # define fillable fields
      protected $fillable = [
                           'post_id',
                           'user_id',
                           'status',
                           
      ];

         /**
       * The attributes that should be cast.
       *
       * @var array
       */
      protected $casts = [
          'status'              => 'boolean',
      ];
}
