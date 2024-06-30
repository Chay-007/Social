<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class PostTags extends Model
{
    use Notifiable , SoftDeletes;

    # define table
     protected $table ='post_tags';
     
     # define fillable fields
     protected $fillable = [
                          'post_id',
                          'tags_id',
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
     public function tags()
     {
       return $this->hasOne(new Tags(), 'id', 'tags_id');
     }
     
     public function userInterst()
     {
       return $this->hasMany(new UserInterests(), 'interest_id', 'tags_id');
     }
}
