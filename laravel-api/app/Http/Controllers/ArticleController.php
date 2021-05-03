<?php

namespace App\Http\Controllers;

Use App\Articulo;
use Illuminate\Http\Request;

class ArticuloController extends Controller
{

    public function index()
    {
        return Articulo::all();
    }

    public function show(Articulo $Articulo)
    {
        return $Articulo;
    }

    public function store(Request $request)
    {
        $Articulo = Articulo::create($request->all());

        return response()->json($Articulo, 201);
    }

    public function update(Request $request, Articulo $Articulo)
    {
        $Articulo->update($request->all());

        return response()->json($Articulo, 200);
    }

    public function delete(Articulo $Articulo)
    {
        $Articulo->delete();

        return response()->json(null, 204);
    }
}
