<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class CommentReply extends Model
{
    use Notifiable , SoftDeletes;

     # define table
      protected $table ='comment_replies';
      
      # define fillable fields
      protected $fillable = [
                           'user_id',
                           'comment_id',
                           'reply',
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
      public function comments()
      {
        return $this->hasOne(new Comments(), 'id', 'comment_id');
      }
}
