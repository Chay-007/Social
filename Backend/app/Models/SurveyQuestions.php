<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Auth\User as Authenticatable;

class SurveyQuestions extends Model
{
    use Notifiable , SoftDeletes;

     # define table
      protected $table ='survey_questions';
      
      # define fillable fields
      protected $fillable = [
                           'survey_id',
                           'question',
                           'multi_option_select',
                           'below_option',
                           'status',
                           
      ];

         /**
       * The attributes that should be cast.
       *
       * @var array
       */
      protected $casts = [
          'status'                  => 'boolean',
          'multi_option_select'     => 'boolean',
          'below_option'            => 'boolean',
      ];

      public function survey()
      {
        return $this->hasOne(new Survey(), 'id', 'survey_id');
      }
      public function surveyQuestionsImages()
      {
        return $this->hasMany(new SurveyQuestionsImages(), 'survey_question_id', 'id');
      }
      public function surveyQuestionsOption()
      {
        return $this->hasMany(new SurveyQuestionsOptions(), 'survey_question_id', 'id');
      }
      public function surveyQuestionsAns()
      {
        return $this->hasMany(new SurveyAns(), 'question_id', 'id');
      }
      public function surveyQuestionsImg()
      {
        return $this->hasOne(new SurveyQuestionsImages(), 'survey_question_id', 'id');
      }
      public function selectOption()
      {
        return $this->hasOne(new PostUserSelectBelowOption(), 'que_id', 'id')->where('user_id',Auth::id());
      }
      public function selectBelow()
      {
        return $this->hasMany(new PostUserSelectBelowOption(), 'que_id', 'id');
      }
}
