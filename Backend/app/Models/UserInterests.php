<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class UserInterests extends Model
{
    use Notifiable , SoftDeletes;

     # define table
      protected $table ='user_interests';
      
      # define fillable fields
      protected $fillable = [
                           'user_id',
                           'interest_id',
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
      public function user()
      {
        return $this->hasOne(new User(), 'id', 'user_id');
      }
      public function interest()
      {
        return $this->hasOne(new Tags(), 'id', 'interest_id');
      }
}
