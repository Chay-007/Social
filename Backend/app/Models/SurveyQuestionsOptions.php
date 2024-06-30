<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class SurveyQuestionsOptions extends Model
{
    use Notifiable , SoftDeletes;

     # define table
      protected $table ='survey_questions_options';
      
      # define fillable fields
      protected $fillable = [
                           'survey_question_id',
                           'image',
                           'options',
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

      public function surveyQuestion()
      {
        return $this->hasOne(new SurveyQuestions(), 'id', 'survey_question_id');
      }
      public function ans()
      {
        return $this->hasOne(new SurveyAns(), 'option_id', 'id');
      }
      public function ansers()
      {
        return $this->hasMany(new SurveyAns(), 'option_id', 'id');
      }
}
