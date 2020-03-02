// Example gulpfile that reloads server and browser after any change
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const nodemon = require('gulp-nodemon');
const watch = () => {
  browserSync.init(
    {
      port: 5744,
      proxy: 'http://localhost:5743/',
      ui: { port: 3000 },
      reloadDelay: 500
    },
    () => {}
  );

  gulp.watch('../view/*').on('change', browserSync.reload);
};
const start = () => {
  return nodemon({
    script: '../',
    ext: 'js',
    watch: ['../index.js', '../lib'],
    env: { NODE_ENV: 'development' }
  })
    .on('start', () => {
      setTimeout(() => watch(), 700);
    })
    .on('restart', () => {
      browserSync.reload();
    });
};
gulp.task('default', start);