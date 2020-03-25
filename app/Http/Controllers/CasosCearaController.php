<?php


namespace App\Http\Controllers;

use App\Models\CasosCeara;


class CasosCearaController extends Controller
{
    public function lista()
    {
        $casosCeara = CasosCeara::all();
        return response()->json($casosCeara);
    }
}
