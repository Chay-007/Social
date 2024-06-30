<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Poll extends Model
{
    use Notifiable , SoftDeletes;

     # define table
      protected $table ='polls';
      
      # define fillable fields
      protected $fillable = [
                           'user_id',
                           'posts_id',
                           'where_to_post_id',
                           'anonymous_survey',
                           'description',
                           'hyperlink',
                           'question',
                           'multi_option_select',
                           'day_id',
                           'lat',
                           'long',
                           'below_option',
                           'status',
                           
      ];

         /**
       * The attributes that should be cast.
       *
       * @var array
       */
      protected $casts = [
          'status'                  => 'boolean',
          'anonymous_survey'        => 'boolean',
          'multi_option_select'     => 'boolean',
          'below_option'            => 'boolean',
      ];
      public function pollImages()
      {
        return $this->hasMany(new PollImages(), 'poll_id', 'id');
      }
      public function pollimg()
      {
        return $this->hasOne(new PollImages(), 'poll_id', 'id');
      }
      public function pollOptions()
      {
        return $this->hasMany(new PollOptions(), 'poll_id', 'id');
      }
      public function pollTags()
      {
        return $this->hasMany(new PollTags(), 'poll_id', 'id');
      }
      public function likes()
      {
        return $this->hasMany(new Likes(), 'posts_id', 'posts_id');
      }
      public function comments()
      {
        return $this->hasMany(new Comments(), 'posts_id', 'posts_id');
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
      public function vote()
      {
          return $this->hasOne(Votes::class, 'posts_id', 'posts_id')->where('user_id', Auth::id());
      }
      public function votes()
      {
          return $this->hasMany(Votes::class, 'posts_id', 'posts_id');
      }
      public function submitedCount(){
        return $this->hasMany(Votes::class, 'posts_id', 'posts_id');
      }
      public function selectOption(){
        return $this->hasOne(PostUserSelectBelowOption::class, 'post_id', 'posts_id')->where('user_id',Auth::id());
      }
}
