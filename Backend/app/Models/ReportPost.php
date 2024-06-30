<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class ReportPost extends Model
{
    use Notifiable , SoftDeletes;

     # define table
      protected $table ='report_posts';
      
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
      public function user()
      {
        return $this->hasOne(new User(), 'id', 'user_id');
      }
      public function post()
      {
        return $this->hasOne(new Posts(), 'id', 'posts_id');
      }
}
