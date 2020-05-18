<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class producto extends Model
{
    //
    protected $table='producto';

    protected $fillable=['id','nombre', 'descripcion', 'valor', 'tienda','imagen' ];

    public function tienda()
    {
        return $this->belongsTo('App\Tienda');
    }
}
