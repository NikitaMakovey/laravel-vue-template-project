const mix = require('laravel-mix');

mix.webpackConfig({
  resolve: {
    alias: {
      '@': __dirname + './resources',
    }
  },
});

mix
  .js('resources/js/app.js', 'public/js')
  .sass('resources/sass/app.scss', 'public/css')
  .vue({ version: 3 });
