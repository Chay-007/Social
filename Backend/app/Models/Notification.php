<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Notification extends Model
{
    use Notifiable , SoftDeletes;

     # define table
      protected $table ='notifications';
      
      # define fillable fields
      protected $fillable = [
        'user_id',
        'send_by',
        'community_id',
        'my_id',
        'post_id',
        'body',
        'notification_type',
        'subtype',
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
    public function sendBy(){
        return $this->hasOne(new User(), 'id', 'send_by');
    }
    public function poll(){
        return $this->hasOne(new Poll(), 'posts_id', 'post_id');
    }
    public function review(){
        return $this->hasOne(new Review(), 'posts_id', 'post_id');
    }
    public function seek(){
        return $this->hasOne(new Seek(), 'posts_id', 'post_id');
    }
    public function survey(){
        return $this->hasOne(new Survey(), 'posts_id', 'post_id');
    }
    public function community(){
        return $this->hasOne(new Community(), 'id', 'community_id');
    }
}
