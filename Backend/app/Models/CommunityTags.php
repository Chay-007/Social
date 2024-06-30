<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class CommunityTags extends Model
{
    use Notifiable , SoftDeletes;

     # define table
      protected $table ='community_tags';
      
      # define fillable fields
      protected $fillable = [
                           'community_id',
                           'tag_id',
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
      public function tag()
      {
        return $this->hasOne(new Tags(), 'id', 'tag_id');
      }
      public function community()
      {
        return $this->hasOne(new Community(), 'id', 'community_id');
      }
}
