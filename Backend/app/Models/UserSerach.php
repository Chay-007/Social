<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class UserSerach extends Model
{
    use Notifiable , SoftDeletes;

     # define table
      protected $table ='user_seraches';
      
      # define fillable fields
      protected $fillable = [
                           'user_id',
                           'key_word',
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
}
