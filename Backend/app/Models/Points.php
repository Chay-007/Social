<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Points extends Model
{
    use Notifiable , SoftDeletes;

     # define table
      protected $table ='points';
      
      # define fillable fields
      protected $fillable = [
                           'posts_id',
                           'user_id',
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
      public function posts()
      {
        return $this->hasOne(new Posts(), 'id', 'posts_id');
      }
      public function user()
      {
        return $this->hasOne(new User(), 'id', 'user_id');
      }
}
