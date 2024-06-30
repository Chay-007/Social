<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class WhereToPost extends Model
{
    use Notifiable , SoftDeletes;

     # define table
      protected $table ='where_to_posts';
      
      # define fillable fields
      protected $fillable = [
                           'name',
                           'description',
                           'image',
                           'status',
                           
      ];

         /**
       * The attributes that should be cast.
       *
       * @var array
       */
      protected $casts = [
          'status'              => 'boolean',
      ];
}
