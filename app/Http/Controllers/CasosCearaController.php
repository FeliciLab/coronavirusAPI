<?php


namespace App\Http\Controllers;

use App\Models\CasosCearaInternados;
use App\Models\CasosCearaPorDia;
use App\Models\CasosCearaUti;
use App\Models\CasosNovosCearaPorDia;
use App\Models\QtdPorMunicipio;
use App\Models\QtdPorSituacao;


class CasosCearaController extends Controller
{
    public function casosCearaPorDia()
    {
        $casosCeara = CasosCearaPorDia::all();
        return response()->json($casosCeara);
    }


    public function casosNovosCearaPorDia()
    {
        $casosNovosCeara = CasosNovosCearaPorDia::all();
        return response()->json($casosNovosCeara);
    }

    public function quantidadeCasosConfirmadorPorMunicipio()
    {
        $qtdCasos = QtdPorMunicipio::all();
        return response()->json($qtdCasos);
    }

    public function casosCearaInternados()
    {
        $qtdCasos = CasosCearaInternados::all();
        return response()->json($qtdCasos);
    }
}
