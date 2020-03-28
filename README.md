## Sobre coronavirusapi

Plataforma para prover dados e indicadores do Ceará por meio de API.

Necessário configurar os parametros no arquivo .env (banco, token) https://laravel.com/docs/7.x#configuration

```bash
cp .env.example .env
```


Em seguida executar o comando

```bash
docker-compose up
```


Endpoints
```bash


// retorna a quantidade novos casos por dia no Ceará 
http://64.227.31.11/api/casos-novos-ceara-por-dia

// retorna a quantidade de casos por dia no Ceará (municipios)
http://64.227.31.11/api/casos-ceara-por-dia


// retorna a quantidade de casos por situação confirmada e por município no Ceará
http://64.227.31.11/api/quantidade-casos-confirmados-por-municipio

// retorna situação dos hospitais (UTI) no Ceará
http://64.227.31.11/api/casos-ceara-uti

```