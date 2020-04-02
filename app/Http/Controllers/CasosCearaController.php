<?php


namespace App\Http\Controllers;

use App\Models\CasosCearaInternados;
use App\Models\CasosCearaPorDia;
use App\Models\CasosCearaUti;
use App\Models\CasosNovosCearaPorDia;
use App\Models\InternadosPorUnidadeDeSaude;
use App\Models\QtdPorMunicipio;
use App\Models\QtdPorSituacao;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;


class CasosCearaController extends Controller
{
    public function casosCearaPorDia(Request $request, $type = null)
    {
        $dados = CasosCearaPorDia::all();

        if ($type == Controller::TYPE_RETURN_CSV) {
            return $this->returnObjectCsv()->build($dados, Schema::getColumnListing('casoscearapordia'))->download();
        }

        return response()->json($dados);
    }


    public function casosNovosCearaPorDia(Request $request, $type = null)
    {
        $dados = CasosNovosCearaPorDia::all();
        if ($type == Controller::TYPE_RETURN_CSV) {
            return $this->returnObjectCsv()->build($dados, Schema::getColumnListing('casosnovoscearapordia'))->download();
        }

        return response()->json($dados);
    }

    public function casosCearaInternados(Request $request, $type = null)
    {
        $dados = CasosCearaInternados::all();

        if ($type == Controller::TYPE_RETURN_CSV) {
            return $this->returnObjectCsv()->build($dados, Schema::getColumnListing('casoscearainternados'))->download();
        }

        return response()->json($dados);
    }

    public function internadosPorUnidadeDeSaude(Request $request, $type = null)
    {
        $dados = InternadosPorUnidadeDeSaude::all();

        if ($type == Controller::TYPE_RETURN_CSV) {
            return $this->returnObjectCsv()->build($dados, Schema::getColumnListing('internadosporunidadedesaude'))->download();
        }

        return response()->json($dados);
    }


}
