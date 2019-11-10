<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=0.75">
        <meta name="csrf-token" content="{{csrf_token()}}">

        <title>HUTPLACE</title>

        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&amp;subset=cyrillic-ext" rel="stylesheet">

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css">


        <link rel="stylesheet" href="{{asset('css/app.css')}}">

    </head>
    <body >
       <div id="app"></div>



       <script src="{{asset('js/app.js')}}"></script>


    </body>
</html>
