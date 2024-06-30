<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasFactory, Notifiable, HasRoles , HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
                'name', 
                'email', 
                'password',  
                'mobile_number',
                'device_key',
                'social_login_id',
                'type',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

   

       /**
   * The attributes that should be cast.
   *
   * @var array
   */
  protected $casts = [
    'email_verified_at' => 'datetime',
      'status'  => 'boolean',
  ];
  public function userProfile()
  {
    return $this->hasOne(new UserProfile(), 'user_id', 'id');
  }
  public function communityMembers()
  {
    return $this->hasMany(new CommunityMembers(), 'user_id', 'id');
  }
  public function sendby()
  {
    return $this->hasMany(new Friend(), 'send_by', 'id');
  }
  public function sendto()
  {
    return $this->hasMany(new Friend(), 'send_to', 'id');
  }
  public function interest()
  {
    return $this->hasMany(new UserInterests(), 'user_id', 'id');
  }

}
