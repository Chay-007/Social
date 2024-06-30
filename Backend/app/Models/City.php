<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class City extends Model
{
    use Notifiable , SoftDeletes;

     # define table
      protected $table ='cities';
      
      # define fillable fields
      protected $fillable = [
                           'user_id',
                           'country_id',
                           'state_id',
                           'zone_id',
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
       public function state()
      {
        return $this->hasOne(new State(), 'id', 'state_id');
      }
      public function zone()
      {
        return $this->hasOne(new Zone(), 'id', 'zone_id');
      }
}
