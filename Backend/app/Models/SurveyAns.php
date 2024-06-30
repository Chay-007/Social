<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class SurveyAns extends Model
{
    use Notifiable , SoftDeletes;

     # define table
      protected $table ='survey_ans';
      
      # define fillable fields
      protected $fillable = [
        'posts_id',
        'question_id',
        'user_id',
        'option_id',
        'status',
                           
      ];

         /**
       * The attributes that should be cast.
       *
       * @var array
       */
      protected $casts = [
          'status'              => 'boolean',
          'anonymous_survey'    => 'boolean',
      ];

      public function user()
      {
        return $this->hasOne(new User(), 'id', 'user_id');
      }
      

}
