<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class UserProfile extends Model
{
    use Notifiable , SoftDeletes;

     # define table
      protected $table ='user_profiles';
      
      # define fillable fields
      protected $fillable = [
                           'user_id',
                           'gender',
                           'dob',
                           'blood_group',
                           'profession',
                           'education',
                           'linkedin',
                           'image',
                           'lat',
                           'long',
                           'description',
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
      public function userIntrests()
      {
        return $this->hasMany(new UserInterests(), 'user_id', 'user_id');
      }
      public function userFav()
      {
        return $this->hasOne(new FavouriteChat(), 'chat_with', 'user_id');
      }
}
