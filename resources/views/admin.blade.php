<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{csrf_token()}}">

        <title>Laravel Admin</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">

        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&amp;subset=cyrillic-ext" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Didact+Gothic&amp;subset=cyrillic-ext" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Muli:300,300i,400,400i,600,700,800,900" rel="stylesheet">

        <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css" rel="stylesheet">

        <link rel="stylesheet" href="{{asset('css/admin/admin.css')}}">
        <style>
            body {
                font-family: 'Muli', sans-serif;
            }
        </style>
    </head>
    <body>
        @yield('content')
        
        <div id="app"></div>
            
        <script src="{{asset('js/admin/admin.js')}}"></script>
    </body>
</html>
