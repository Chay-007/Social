<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Comments extends Model
{
    use Notifiable , SoftDeletes;

     # define table
      protected $table ='comments';
      
      # define fillable fields
      protected $fillable = [
                           'user_id',
                           'posts_id',
                           'comment',
                           'file',
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
      public function userProfile()
      {
        return $this->hasOne(new UserProfile(), 'user_id', 'id');
      }
      public function commentBook()
      {
        return $this->hasOne(new CommentBookMark(), 'comment_id', 'id');
      }
      public function commentStar()
      {
        return $this->hasOne(new CommentStar(), 'comment_id', 'id');
      }
      public function commentStarCount()
      {
        return $this->hasMany(new CommentStar(), 'comment_id', 'id');
      }
      public function commentReply()
      {
        return $this->hasMany(new CommentReply(), 'comment_id', 'id');
      }
}
