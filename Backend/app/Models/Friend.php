<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Friend extends Model
{
    use Notifiable ;

    # define table
     protected $table ='friends';
     
     # define fillable fields
     protected $fillable = [
                          'send_by',
                          'send_to',
                          'friends_status',
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
        return $this->hasOne(new User(), 'id', 'send_by');
      }
     public function sendto()
      {
        return $this->hasOne(new User(), 'id', 'send_to');
      }
     public function userProfile()
      {
        return $this->hasOne(new UserProfile(), 'user_id', 'send_by');
      }
     public function friendStatus()
      {
        return $this->hasOne(new FriendStatus(), 'id', 'friends_status');
      }
}
