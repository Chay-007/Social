<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class PostUserExperience extends Model
{
    use Notifiable , SoftDeletes;

     # define table
      protected $table ='post_user_experiences';
      
      # define fillable fields
      protected $fillable = [
                           'user_id',
                           'post_id',
                           'experience',
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
