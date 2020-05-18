<?php

namespace App\Http\Controllers;

use App\Tienda;
use Illuminate\Http\Request;

class TiendaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return view('tienda');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return Tienda::all();


    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        Tienda::insert([
            'nombre' => $request->input('nombre'),
            'camaracomercio' => $request->input('camaracomercio'),
            'fechaapertura' => $request->input('fechaapertura')
          ]);
          $response['message'] = "Guardo exitosamente";
          $response['success'] = true;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Tienda  $tienda
     * @return \Illuminate\Http\Response
     */
    public function show(Tienda $tienda)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Tienda  $tienda
     * @return \Illuminate\Http\Response
     */
    public function edit(Tienda $tienda)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Tienda  $tienda
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        //
        Tienda::where('SKU',$request->input('id'))->
        update([
            'nombre' => $request->input('nombre'),
            'camaracomercio' => $request->input('camaracomercio'),
            'fechaapertura' => $request->input('fechaapertura')
        ]);

        // respesta de JSON
        $response['message'] = "Actualizo exitosamente";
        $response['success'] = true;

        return $response;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Tienda  $tienda
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        //
        Tienda::where('camaracomercio',$request->input('id'))->delete();
        // respesta de JSON
        $response['message'] = "Elimino exitosamente";
        $response['success'] = true;

        return $response;
    }
}
