<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class BookMarkComment extends Model
{
    use Notifiable , SoftDeletes;

     # define table
      protected $table ='book_mark_comments';
      
      # define fillable fields
      protected $fillable = [
                           'posts_id',
                           'user_id',
                           'comment_id',
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
      
      public function post()
      {
        return $this->hasOne(new Posts(), 'id', 'appose_post_id');
      }
      public function user()
      {
        return $this->hasOne(new User(), 'id', 'user_id');
      }
      public function comment()
      {
        return $this->hasOne(new Comments(), 'id', 'comment_id');
      }
}
