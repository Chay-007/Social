<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class PreviousChat extends Model
{
    use Notifiable , SoftDeletes;

     # define table
      protected $table ='previous_chats';
      
      # define fillable fields
      protected $fillable = [
                           'user_id',
                           'chat_with',
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
      public function chatWith()
      {
        return $this->hasOne(new User(), 'id', 'chat_with');
      }
}
