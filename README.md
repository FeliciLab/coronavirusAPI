<p align="right">
  <img src="https://coronavirus.ceara.gov.br/wp-content/uploads/2020/03/Logo-Corona-Logo-SesaCe.png" width="60%" float="left" />
</p>

# Sobre esse repositório

Esse repositório foi inicialmente criado para prover e documentar uma API Pública com os dados dos [Boletins Epidemiológicos](https://coronavirus.ceara.gov.br/boletins) -  e que também alimentavam um Painel Epidemiológico criado para o hotsite https://coronavirus.ceara.gov.br/.

Desde o dia 02 de Abril de 2020, houve uma mudança no fornecimento dos dados por parte da Vigilância Epidemiológica, definindo que o **Boletim** deixaria de ser uma publicação diária em PDF, e passaria a ser um [Painel Dinâmico](https://indicadores.integrasus.saude.ce.gov.br/indicadores/indicadores-coronavirus) dentro do [IntegraSUS](http://integrasus.saude.ce.gov.br/) - que é a plataforma de transparência da gestão pública de saúde do Ceará.

Em função disso, a API criada para refletir os dados dos Boletins Epidemiológicos em PDF, **SERÁ RETIRADA DO AR**, uma vez que o IntegraSUS já tem [sua própria API Pública](https://github.com/EscolaDeSaudePublica/coronavirusAPI/issues/17).

Resolvemos manter esse repositório ativo, no entanto, por 3 motivos principais:

0. Necessidades operacionais, para tratamento e disponibilização de outros dados sobre o COVID-19 no Ceará;

1. Experimentar um canal de diálogo simples, efetivo e transparente, com as comunidades, cientistas, jornalistas e demais setores envolvidos no acompanhamento, pesquisa e divulgação dos dados sobre a covid-19 no Ceará;

2. Apoiar a documentação e extensão das APIs do IntegraSUS e de outros serviços relacionados e de interesse para o enfrentamento da Pendemia.


## Dúvidas?

Para facilitar nossa capacidade de resposta, **solicitamos que [abram Issues](https://github.com/EscolaDeSaudePublica/coronavirusAPI/issues/new/choose) para registrar quaisquer dúvidas**, sugestões, críticas ou insconsistências nos dados disponibilizados.


## Endpoints IntegraSUS

Abaixo estão documentados os endpoints de dados do Boletim Epidemiológico do IntegraSUS. 


### Mostra a quantidade por situação
https://indicadores.integrasus.saude.ce.gov.br/api/coronavirus/qtd-por-tipo?data=2020-04-03&tipo=Confirmado&idMunicipio=

### Mostra a quantidade de Município afetados pelo covid19 
https://indicadores.integrasus.saude.ce.gov.br/api/coronavirus/qtd-municipios-casos-confirmados?data=2020-04-03&tipo=Confirmado&idMunicipio=

### Mostra a quantidade de pessoas com covid19 por Município 
Https://indicadores.integrasus.saude.ce.gov.br/api/coronavirus/qtd-por-municipio?data=2020-04-03&tipo=Confirmado&idMunicipio=

### Mostra os novos casos por dia
https://indicadores.integrasus.saude.ce.gov.br/api/coronavirus/qtd-por-dia-tipo?data=2020-04-03&tipo=Confirmado&idMunicipio=

### Mostra a quantidade pessoas com covid19 por sexo e faixa etária
https://indicadores.integrasus.saude.ce.gov.br/api/coronavirus/qtd-por-faixa-etaria-sexo?data=2020-04-03&tipo=Confirmado&idMunicipio=

### Mostra a quantidade de óbitos por município até a presente data
https://indicadores.integrasus.saude.ce.gov.br/api/coronavirus/qtd-por-municipio?tipo=%C3%93bito&data=2020-04-04

### Mostra a quantidade de óbito até a presente data
https://indicadores.integrasus.saude.ce.gov.br/api/coronavirus/qtd-obitos?data=2020-04-03&tipo=Confirmado&idMunicipio=

### Mostra a quantidade suspeitos
https://indicadores.integrasus.saude.ce.gov.br/api/coronavirus/qtd-suspeitos?data=2020-04-03&tipo=Confirmado&idMunicipio=

### Mostra a quantidade de exames
https://indicadores.integrasus.saude.ce.gov.br/api/coronavirus/qtd-exames?data=2020-04-03&tipo=Confirmado&idMunicipio=




--- 

🚀

🚀

🚀

🚀

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
