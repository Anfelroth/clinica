var  gulp = require('gulp');
     concat= require('gulp-concat');
     conn = require('gulp-connect');
     

const BUILD_PATH = './build/public/';
const SOURCE_JS= {
  'TETHER': './public/assets/tether/tether.min.js',
  'BOOTSTRAP': './public/assets/bootstrap/js/bootstrap.min.js',
  'SMOOTHSCROLL' : './public/assets/smooth-scroll/SmoothScroll.js',
  'VIEWPORT': './public/assets/viewportChecker/jquery.viewportchecker.js',
  'JARALLAX': './public/assets/jarallax/jarallax.js'
}
	
//Tarea Ambiente Dev
gulp.task('connectDev', function () {
  conn.server({    
    name: 'Dev App',
    port: 8000,
    root:'./public',
    livereload: false
  });
 });

//Concatenar js
gulp.task ('concatenar-js', function() {
  return gulp.src([SOURCE_JS.TETHER,SOURCE_JS.BOOTSTRAP,SOURCE_JS.SMOOTHSCROLL,SOURCE_JS.VIEWPORT,SOURCE_JS.JARALLAX])
          .pipe(concat('bundle.js'))
        .pipe(gulp.dest('./public/assets/theme/js'))             
});


    gulp.task('default', ['connectDev','concatenar-js']);




