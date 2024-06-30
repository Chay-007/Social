<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Review extends Model
{
    use Notifiable , SoftDeletes;

     # define table
      protected $table ='reviews';
      
      # define fillable fields
      protected $fillable = [
                           'user_id',
                           'posts_id',
                           'where_to_post_id',
                           'review',
                           'opinion',
                           'product_service_que',
                           'description',
                           'hyper_link',
                           'reating',
                           'online_product_service',
                           'recommend',
                           'beware',
                           'lat',
                           'long',
                           'status',
                           
      ];

         /**
       * The attributes that should be cast.
       *
       * @var array
       */
      protected $casts = [
          'status'  => 'boolean',
          'review'  => 'boolean',
          'opinion'  => 'boolean',
          'online_product_service'  => 'boolean',
          'recommend'  => 'boolean',
          'beware'  => 'boolean',
      ];
      public function  reviewTags()
      {
        return $this->hasMany(new ReviewTags(), 'review_id', 'id');
      }
      public function  reviewImages()
      {
        return $this->hasMany(new ReviewsImage(), 'posts_id', 'posts_id');
      }
      public function  reviewImg()
      {
        return $this->hasOne(new ReviewsImage(), 'posts_id', 'posts_id');
      }
      public function points()
      {
        return $this->hasMany(new Points(), 'posts_id', 'posts_id');
      }
      public function comments()
      {
        return $this->hasMany(new Comments(), 'posts_id', 'posts_id');
      }
      public function saves()
      {
        return $this->hasMany(new SavedPost(), 'posts_id', 'posts_id');
      }
}
