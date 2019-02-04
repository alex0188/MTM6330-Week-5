const gulp = require('gulp')
const sass = require ('gulp-sass')
const browsersync = require('browsersync').create()
const postcss = require('gulp-postcss') // load the postcss
const autoprefixer = require('autoprefixer') // load the autoprefixer plugin
const cssnano = require('cssnano') // load the cssnano plugin
// define a task to compile Sass and run autoprefixer and cssnano
gulp.task('sass', function ()
  const plugins = [
    autoprefixer({browsers: ['last 2 versions'] }),
    cssnano()
  ])
  return gulp
    .src('scss/**/*.scss') // source of any sass files
    .pipe(sass()) // run the sass compiler on the source files
    .pipe(gulp.dest('css')) // destination for the compiled css files
    .pipe(postcss(plugins)) // apply the PostCss plugins
    .pipe(gulp.dest('./css/min')) // path to output the minifed css file
    .pipe(browsersync.stream()) // run the browsersync stream
})
// define the default task
gulp.task('default', function (){
  // initialize browsersync on the current folder
  browsersync.init({ server: './' })
  // watch for changes to any files in scss folder and its sub folders and with
  // .scss extension, run the sass task when a change is found
  gulp.watch('scss/**/*.scss', gulp/series('sass'))
  // watch for changes on any .html file and reload the browser on change
  gulp.watch('*.html').on('change', browsersync.reload)
})
