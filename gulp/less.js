var gulp = require( 'gulp' );
var less = require( 'gulp-less' );

gulp.task( 'less', function () {
	return gulp.src( './style/main.less' )
		.pipe( less() )
		.pipe( gulp.dest( './compile/style' ) );
} );
