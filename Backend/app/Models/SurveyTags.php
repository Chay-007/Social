<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class SurveyTags extends Model
{
    use Notifiable , SoftDeletes;

     # define table
      protected $table ='survey_tags';
      
      # define fillable fields
      protected $fillable = [
                           'survey_id',
                           'tag_id',
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
        return $this->hasOne(new Tags(), 'id', 'tag_id');
      }
      
}
