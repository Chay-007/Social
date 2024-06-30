<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class CommunityMembers extends Model
{
    use Notifiable , SoftDeletes;

     # define table
      protected $table ='community_members';
      
      # define fillable fields
      protected $fillable = [
                           'user_id',
                           'community_id',
                           'member_status',
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
      public function community()
      {
        return $this->hasOne(new Community(), 'id', 'community_id');
      }
}
