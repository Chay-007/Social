<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class PollOptions extends Model
{
    use Notifiable , SoftDeletes;

    # define table
     protected $table ='poll_options';
     
     # define fillable fields
     protected $fillable = [
                          'poll_id',
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
         'status'              => 'boolean',
     ];
     public function vote()
    {
      return $this->hasMany(new Votes(), 'option_id', 'id');
    }
     public function userVote()
    {
      return $this->hasOne(new Votes(), 'option_id', 'id')->where('user_id',Auth::id());
    }

}
