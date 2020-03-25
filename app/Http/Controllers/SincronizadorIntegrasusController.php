<?php

namespace App\Http\Controllers;



use App\Models\CasosCearaPorDia;
use App\Models\QtdPorMunicipio;
use App\Models\QtdPorSituacao;
use GuzzleHttp\Client;

class SincronizadorIntegrasusController extends Controller
{
    public function run()
    {
        $client = new Client();
        $res = $client->request('GET', 'https://indicadores.integrasus.saude.ce.gov.br/api/coronavirus/qtd-por-tipo');
        if ($res->getStatusCode() == 200) {

            QtdPorSituacao::truncate();

            $dados = json_decode($res->getBody());
            foreach ($dados as $dado) {
                $qtdSituacao = new QtdPorSituacao();
                $qtdSituacao->situacao = $dado->tipo;
                $qtdSituacao->quantidade = $dado->quantidade;
                $qtdSituacao->save();
            }
        }

        $client = new Client();
        $res = $client->request('GET', 'https://indicadores.integrasus.saude.ce.gov.br/api/coronavirus/qtd-por-municipio?tipo=Confirmado');
        if ($res->getStatusCode() == 200) {
            QtdPorMunicipio::truncate();

            $dados = json_decode($res->getBody());

            foreach ($dados as $dado) {
                $qtdMunicipio = new QtdPorMunicipio();
                $qtdMunicipio->situacao = $dado->tipo;
                $qtdMunicipio->quantidade = $dado->quantidade;
                $qtdMunicipio->idmunicipio = @$dado->idMunicipio;
                $qtdMunicipio->municipio = $dado->municipio;
                $qtdMunicipio->save();
            }
        }


        $client = new Client();
        $res = $client->request('GET', 'https://indicadores.integrasus.saude.ce.gov.br/api/coronavirus/qtd-por-dia-tipo?tipo=Confirmado');
        if ($res->getStatusCode() == 200) {
            CasosCearaPorDia::truncate();

            $dados = json_decode($res->getBody());

            foreach ($dados as $dado) {
                $casosCearaPorDia = new CasosCearaPorDia();
                $casosCearaPorDia->situacao = $dado->tipo;
                $casosCearaPorDia->quantidade = $dado->quantidade;
                $diaArray = explode('/', $dado->data);
                $casosCearaPorDia->data = $diaArray[2] . '-' . $diaArray[1] . '-' . $diaArray[0];
                $casosCearaPorDia->save();
            }
        }
    }
}
