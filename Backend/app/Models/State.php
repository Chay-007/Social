<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class State extends Model
{
    use Notifiable , SoftDeletes;

     # define table
      protected $table ='states';
      
      # define fillable fields
      protected $fillable = [
                           'user_id',
                           'country_id',
                           'name',
                           'status',
                           
      ];

         /**
       * The attributes that should be cast.
       *
       * @var array
       */
      protected $casts = [
          'status'  => 'boolean',
      ];

       public function couuntry()
      {
        return $this->hasOne(new Country(), 'id', 'country_id');
      }
}
