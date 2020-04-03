<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Covid-19-charts</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link rel="stylesheet" href="{{ mix('css/app.css')}}">
    </head>
    <body>
        <div id="app">
            <router-view></router-view>
        </div>
    </body>

    <script src="{{ mix('js/app.js') }}"></script>
</html>
