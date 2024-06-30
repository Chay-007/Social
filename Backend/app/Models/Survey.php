<?php

namespace App\Models;
use DB;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Survey extends Model
{
    use Notifiable , SoftDeletes;

     # define table
      protected $table ='surveys';
      
      # define fillable fields
      protected $fillable = [
                           'user_id',
                           'posts_id',
                           'where_to_post_id',
                           'anonymous_survey',
                           'description',
                           'hyperlink',
                           'experience_option',
                           'day_id',
                           'lat',
                           'long',
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
          'experience_option'    => 'boolean',
      ];
      public function surveyQuestions()
      {
        return $this->hasMany(new SurveyQuestions(), 'survey_id', 'id');
      }
      public function surveyQuestion()
      {
        return $this->hasOne(new SurveyQuestions(), 'survey_id', 'id');
      }
      public function surveyImages()
      {
        return $this->hasMany(new SurveyQuestionsImages(), 'survey_id', 'id');
      }
      public function surveyTags()
      {
        return $this->hasMany(new SurveyTags(), 'survey_id', 'id');
      }
      public function likes()
      {
        return $this->hasMany(new Likes(), 'posts_id', 'posts_id');
      }
      public function comments()
      {
        return $this->hasMany(new Comments(), 'posts_id', 'posts_id');
      }
      public function repost()
      {
        return $this->hasMany(new Repost(), 'posts_id', 'posts_id');
      }
      public function share()
      {
        return $this->hasMany(new Share(), 'posts_id', 'posts_id');
      } 
      public function saves()
      {
        return $this->hasMany(new SavedPost(), 'posts_id', 'posts_id');
      }
      public function vote()
      {
        return $this->hasMany(new SurveyAns(), 'posts_id', 'posts_id');
      }
      public function day()
      {
        return $this->hasOne(new Days(), 'id', 'day_id');
      }
      public function surveyAns()
      {
        return $this->hasMany(new SurveyAns(), 'posts_id', 'posts_id');
      }

       public function submitedCount()
      {
        return $this->hasMany(new SurveyAns(), 'posts_id', 'posts_id');
      }
}
