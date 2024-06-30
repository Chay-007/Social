<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class ChatImages extends Model
{
    use Notifiable , SoftDeletes;

     # define table
      protected $table ='chat_images';
      
      # define fillable fields
      protected $fillable = [
                           'file',
                           'community_id',
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
}
