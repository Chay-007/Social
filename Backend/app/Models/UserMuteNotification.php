<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class UserMuteNotification extends Model
{
    use Notifiable;

     # define table
      protected $table ='user_mute_notifications';
      
      # define fillable fields
      protected $fillable = [
                           'mute_by',
                           'muted_to',
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
