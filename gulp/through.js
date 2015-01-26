var gulp = require( 'gulp' );

gulp.task( 'through', function () {
	return gulp.src( [
		'./index.html',
		'./package.json'
	] ).pipe( gulp.dest( './compile' ) );
} );
