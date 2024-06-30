<?php

namespace App\Models;   

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Seek extends Model
{
     use Notifiable , SoftDeletes;

     # define table
      protected $table ='seeks';
      
      # define fillable fields
      protected $fillable = [
                           'user_id',
                           'posts_id',
                           'where_to_post_id',
                           'review',
                           'suggestion',
                           'description',
                           'descriptionSecond',
                           'hyperLink',
                           'lat',
                           'long',
                           'day_id',
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
      public function seekTags()
      {
        return $this->hasMany(new SeekTags(), 'seek_id', 'id');
      }
      public function seekImages()
      {
        return $this->hasMany(new SeeksImages(), 'posts_id', 'posts_id');
      }
      public function seekImg()
      {
        return $this->hasOne(new SeeksImages(), 'posts_id', 'posts_id');
      }
      public function reviews()
      {
        return $this->hasMany(new UserPostReview(), 'posts_id', 'posts_id');
      }
      public function review()
      {
        return $this->hasOne(new UserPostReview(), 'posts_id', 'posts_id')->where('user_id', Auth::id());
      }
      public function repost()
      {
        return $this->hasMany(new Repost(), 'posts_id', 'posts_id');
      }
      public function share()
      {
        return $this->hasMany(new Share(), 'posts_id', 'posts_id');
      }
      public function saves()
      {
        return $this->hasMany(new SavedPost(), 'posts_id', 'posts_id');
      }
      public function day()
      {
        return $this->hasOne(new Days(), 'id', 'day_id');
      }
}
