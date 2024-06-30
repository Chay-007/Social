<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Appose extends Model
{
    use Notifiable , SoftDeletes;

     # define table
      protected $table ='apposes';
      
      # define fillable fields
      protected $fillable = [
                           'posts_id',
                           'appose_post_id',
                           'user_id',
                           'star',
                           'reason',
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
      
      public function posts()
     {
       return $this->hasOne(new Posts(), 'id', 'posts_id');
     }
     public function apposes()
     {
       return $this->hasOne(new Posts(), 'id', 'appose_post_id');
     }
     public function user()
     {
       return $this->hasOne(new User(), 'id', 'user_id');
     }
}
