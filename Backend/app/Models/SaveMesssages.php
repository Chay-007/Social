<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class SaveMesssages extends Model
{
    use Notifiable , SoftDeletes;

     # define table
      protected $table ='save_messsages';
      
      # define fillable fields
      protected $fillable = [
          'user_id',
          'friend_id',
          'count',
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
      public function friend()
      {
        return $this->hasOne(new User(), 'id', 'friend_id');
      }
      public function user()
      {
        return $this->hasOne(new User(), 'id', 'user_id');
      }
}
