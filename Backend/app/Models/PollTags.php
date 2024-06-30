<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class PollTags extends Model
{
    use Notifiable , SoftDeletes;

     # define table
      protected $table ='poll_tags';
      
      # define fillable fields
      protected $fillable = [
                           'poll_id',
                           'tag_id',
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
      public function tags()
      {
        return $this->hasOne(new Tags(), 'id', 'tag_id');
      }
}
