<?php


namespace App\Http\Controllers;

use App\Models\CasosCearaPorDia;
use App\Models\CasosCearaUti;
use App\Models\QtdPorMunicipio;
use App\Models\QtdPorSituacao;


class CasosCearaController extends Controller
{
    public function casosCearaPorDia()
    {
        $casosCeara = CasosCearaPorDia::all();
        return response()->json($casosCeara);
    }

    public function quantidadeCasosPorSituacao()
    {
        $qtdCasosPorSituacao = QtdPorSituacao::all();
        return response()->json($qtdCasosPorSituacao);
    }

    public function quantidadeCasosConfirmadorPorMunicipio()
    {
        $qtdCasos = QtdPorMunicipio::all();
        return response()->json($qtdCasos);
    }

    public function quantidadeCasosNaUti()
    {
        $qtdCasos = CasosCearaUti::all();
        return response()->json($qtdCasos);
    }
}
