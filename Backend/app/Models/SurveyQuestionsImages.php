<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class SurveyQuestionsImages extends Model
{
    use Notifiable , SoftDeletes;

     # define table
      protected $table ='survey_questions_images';
      
      # define fillable fields
      protected $fillable = [
                           'survey_question_id',
                           'image',
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
}
