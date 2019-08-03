const mix = require('laravel-mix');
require('laravel-mix-alias');



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

mix.alias('@', '/resources/js');
mix.alias('~', '/resources/sass');

/**
 * Override Laravel Mix Webpack Configuration
 * @type {{chunkFilename: string, publicPath: string}}
 */
/*
mix.config.webpackConfig.output = {
    chunkFilename: 'js/[name].bundle.js',
    publicPath: '/',
};
*/


mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');

