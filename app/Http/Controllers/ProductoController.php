<?php

namespace App\Http\Controllers;

use App\producto;
use Illuminate\Http\Request;

class ProductoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
        $datosprod = request()->except('_token');
        if($request->hasFile('imagen')){
            $datosprod['imagen']= $request->hasFile('imagen')->store('uploads','public');
        }
        Producto::insert([
            'nombre' => $request->input('nombre'),
            'descripcion' => $request->input('descripcion'),
            'valor' => $request->input('valor'),
            'imagen' => $request->$datosprod,
            'tienda' => $request->input('tienda'),
            ]);
            $response['message'] = "Guardo exitosamente";
            $response['success'] = true;


            return $response;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\producto  $producto
     * @return \Illuminate\Http\Response
     */
    public function show(producto $producto)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\producto  $producto
     * @return \Illuminate\Http\Response
     */
    public function edit(producto $producto)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\producto  $producto
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        //
              // inserta los datos
      Producto::where('SKU',$request->input('id'))->
      update([
        'nombre' => $request->input('nombre'),
        'descripcion' => $request->input('descripcion'),
        'valor' => $request->input('precio'),
        'imagen' => $request->input('imagen')
      ]);

      // respesta de JSON
      $response['message'] = "Actualizo exitosamente";
      $response['success'] = true;

      return $response;
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\producto  $producto
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        //
        Producto::where('SKU',$request->input('id'))->delete();
        // respesta de JSON
        $response['message'] = "Elimino exitosamente";
        $response['success'] = true;

        return $response;
    }
}
