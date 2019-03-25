const mix = require('laravel-mix');


/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig.resolve = {
        extensions:['.js','.vue'],
       alias: {
           '@':__dirname+"/resources"
       },
};


/**
 * Override Laravel Mix Webpack Configuration
 * @type {{chunkFilename: string, publicPath: string}}
 */
mix.config.webpackConfig.output = {
    chunkFilename: 'js/[name].bundle.js',
    publicPath: '/',
};


mix.js('resources/js/main/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');

mix.js('resources/js/admin/admin.js', 'public/js/admin')
    .sass('resources/sass/admin.scss', 'public/css/admin');
