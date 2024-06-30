<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class SharePostComunnity extends Model
{
    use Notifiable , SoftDeletes;

     # define table
      protected $table ='share_post_comunnities';
      
      # define fillable fields
      protected $fillable = [
                           'posts_id',
                           'community_id',
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
      public function posts()
      {
        return $this->hasOne(new Posts(), 'id', 'posts_id');
      }
      public function community()
      {
        return $this->hasOne(new Community(), 'id', 'community_id');
      }
}
