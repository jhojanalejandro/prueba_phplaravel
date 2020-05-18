<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tienda extends Model
{
    protected $table='Tienda';
    protected $fillable=['camaracomercio','nombre', 'fechaapertura' ];
}
