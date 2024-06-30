<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class NotificationSetting extends Model
{
    use Notifiable , SoftDeletes;

     # define table
      protected $table ='notification_settings';
      
      # define fillable fields
      protected $fillable = [
        'user_id',
        'post_notification',
        'like_notification',
        'friend_request_notification',
        'addInto_community_notification',
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
