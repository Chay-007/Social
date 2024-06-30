<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class PostUserSelectBelowOption extends Model
{
    use Notifiable , SoftDeletes;

     # define table
      protected $table ='post_user_select_below_options';
      
      # define fillable fields
      protected $fillable = [
                           'user_id',
                           'post_id',
                           'que_id',
                           'below_option',
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
      public function user()
      {
        return $this->hasOne(new User(), 'id', 'user_id');
      }
}
