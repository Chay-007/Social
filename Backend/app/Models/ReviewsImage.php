<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class ReviewsImage extends Model
{
    use Notifiable , SoftDeletes;

     # define table
      protected $table ='reviews_images';
      
      # define fillable fields
      protected $fillable = [
                        'posts_id',
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
