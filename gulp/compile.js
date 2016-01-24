var gulp = require( 'gulp' );

gulp.task( 'compile', [ 'browserify', 'concat', 'less', 'through' ] );
