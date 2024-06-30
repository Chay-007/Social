<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Likes extends Model
{
    use Notifiable , SoftDeletes;

     # define table
      protected $table ='likes';
      
      # define fillable fields
      protected $fillable = [
        'user_id',
        'posts_id',
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
}
