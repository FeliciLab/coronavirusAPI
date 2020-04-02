<p align="right">
  <img src="https://coronavirus.ceara.gov.br/wp-content/uploads/2020/03/Logo-Corona-Logo-SesaCe.png" width="60%" float="left" />
</p>

## Sobre a API Coronavírus Ceará

Plataforma para prover dados e indicadores epidemiológicos sobre Coronavírus (COVID-19) no Ceará, por meio de API Pública.

Nessa API estamos disponibilizando os dados que alimentam o [Painel Epidemiológico da COVID-19 no Ceará](https://coronavirus.ceara.gov.br/painel).
<p align="center">
  <img src="https://user-images.githubusercontent.com/89998/78218337-0076f800-7494-11ea-8c57-2d7eea57df89.png" width="50%">
</p>

## Endpoints

#### https://dev.org.br/api/casos-novos-ceara-por-dia
Retorna a quantidade novos casos por dia no Ceará
```
{
    "id":1,
    "data":"2020-03-15",
    "qtdnovoscasos":3
}
```

#### https://dev.org.br/api/casos-ceara-por-dia
Retorna a quantidade de casos por dia no Ceará (municipios)

#### https://dev.org.br/api/quantidade-casos-confirmados-por-municipio
Retorna a quantidade de casos por situação confirmada e por município no Ceará

#### https://dev.org.br/api/casos-ceara-internados
Retorna situação dos internados no Ceará

#### https://dev.org.br/api/internados-por-unidade-de-saude
Retorna internados por unidade de saúde no Ceará [Necessário token]


## Retorno .csv
Adicionar '/csv' no final da url, exemplo https://dev.org.br/api/casos-novos-ceara-por-dia/csv



# Servidor de desenvolvimento 🚀🚀

Clonando o projeto

```
git clone https://github.com/EscolaDeSaudePublica/cearacoronaapi.git
```


Entrar o diretório

```
cd cearacoronaapi
```

Em seguida executar o comando

```
docker-compose up
```

Ao executar o comando acima, será criado 3 containers
- cearacoronaapi_php-fpm
- postgres:11.1-alpine
- nginx:alpine

Acessar o container 'cearacoronaapi_php-fpm'
```
docker exec -it cearacoronaapi_php-fpm bash
```

Dentro do container acessar o diretório o /application
```
cd /application
```

Instalar dependência do Laravel
```
composer install
```

Configurar os parametros no arquivo .env (banco, token) https://laravel.com/docs/7.x#configuration

```
cp .env.example .env
```

Gerar Application Key
```
php artisan key:generate
```

---

<p align="center">
  <img src="https://coronavirus.ceara.gov.br/wp-content/uploads/2020/03/logo_espce_gov-1.png" width="40%" float="center"/>
</p>
