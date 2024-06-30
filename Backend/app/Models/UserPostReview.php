<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class UserPostReview extends Model
{
    use Notifiable , SoftDeletes;

     # define table
      protected $table ='user_post_reviews';
      
      # define fillable fields
      protected $fillable = [
                           'posts_id',
                           'discription',
                           'star',
                           'user_id',
                           'image',
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
      public function seek()
      {
        return $this->hasOne(new Seek(), 'posts_id', 'posts_id');
      }
      public function userProfile()
      {
        return $this->hasOne(new UserProfile(), 'user_id', 'user_id');
      }
      public function post()
      {
        return $this->hasOne(new Posts(), 'id', 'posts_id');
      }
      public function stars()
      {
        return $this->hasOne(new StartReviews(), 'posts_id', 'posts_id')->where('user_id',Auth::id())->where('type','star');
      }
      public function bookMark()
      {
        return $this->hasOne(new StartReviews(), 'posts_id', 'posts_id')->where('user_id',Auth::id())->where('type','bookMark');
      }
}
