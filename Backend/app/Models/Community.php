<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Community extends Model
{
    use Notifiable , SoftDeletes;

     # define table
      protected $table ='communities';
      
      # define fillable fields
      protected $fillable = [
                           'user_id',
                           'community_no',
                           'name',
                           'logo',
                           'description',
                           'community_visibility',
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
       public function communityMembers()
      {
        return $this->hasMany(new CommunityMembers(), 'community_id', 'id');
      }
       public function communityChatImages()
      {
        return $this->hasMany(new ChatImages(), 'community_id', 'id');
      }
       public function communityTags()
      {
        return $this->hasMany(new CommunityTags(), 'community_id', 'id');
      }
}
