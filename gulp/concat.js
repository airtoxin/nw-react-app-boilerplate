var gulp = require( 'gulp' );
var concat = require( 'gulp-concat' );

gulp.task( 'concat', function () {
	return gulp.src( './vendor/*.js' )
		.pipe( concat( 'vendors.js' ) )
		.pipe( gulp.dest( './compile/' ) );
} );
