<?php

namespace App\Models;

use DB;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Posts extends Model
{
    use Notifiable , SoftDeletes;

     # define table
      protected $table ='posts';
      
      # define fillable fields
      protected $fillable = [
                           'user_id',
                           'post_master_id',
                           'where_to_post_id',
                           'day_id',
                           'repost_status',
                           'oppose',
                           'address',
                           'city',
                           'lat',
                           'long',
                           'end_date',
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
      public function postmaster()
      {
        return $this->hasOne(new PostMaster(), 'id', 'post_master_id');
      }
      public function day()
      {
        return $this->hasOne(new Days(), 'id', 'day_id');
      }
      public function user()
      {
        return $this->hasOne(new User(), 'id', 'user_id');
      }
      public function survey()
      {
        return $this->hasOne(new Survey(), 'posts_id', 'id');
      }
      public function poll()
      {
        return $this->hasOne(new Poll(), 'posts_id', 'id');
      }
      public function seek()
      {
        return $this->hasOne(new Seek(), 'posts_id', 'id');
      }
      public function review()
      {
        return $this->hasOne(new Review(), 'posts_id', 'id');
      }
      public function reviews()
      {
        return $this->hasMany(new UserPostReview(), 'posts_id', 'id');
      }
      public function points()
      {
        return $this->hasMany(new Points(), 'posts_id', 'id');
      }
      public function repost()
      {
        return $this->hasOne(new Repost(), 'repost_id', 'id');
      }
      public function appose()
      {
        return $this->hasOne(new Appose(), 'appose_post_id', 'id');
      }
      public function apposeCount()
      {
        return $this->hasMany(new Appose(), 'appose_post_id', 'id');
      }
      public function friend()
      {
        return $this->hasOne(new Friend(), 'send_by', 'user_id');
      }
      public function postTags()
      {
        return $this->hasMany(new PostTags(), 'post_id', 'id');
      }
      public function postPollTagUser()
      {
        return $this->hasMany(new PollUsers(), 'post_id', 'id');
      }
      public function sharePostComunnity()
      {
        return $this->hasOne(new SharePostComunnity(), 'posts_id', 'id');
      }
      
      public function repostss()
      {
        return $this->hasMany(new Repost(), 'posts_id', 'id');
      }
      public function comments()
      {
        return $this->hasMany(new Comments(), 'posts_id', 'id');
      }
      public function experience()
      {
        return $this->hasOne(new PostUserExperience(), 'post_id', 'id')->where('user_id',Auth::id());
      }
      public function myExperience()
      {
        return $this->hasMany(new PostUserExperience(), 'post_id', 'id')->where('experience',1);
      }
      public function someOneExperience()
      {
        return $this->hasMany(new PostUserExperience(), 'post_id', 'id')->where('experience',2);
      }
      public function selectBelow()
      {
        return $this->hasMany(new PostUserSelectBelowOption(), 'post_id', 'id');
      }
      public function share()
      {
        return $this->hasMany(new Share(), 'posts_id', 'id');
      }
}
