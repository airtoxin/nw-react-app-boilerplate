var gulp = require( 'gulp' );
var browserify = require( 'browserify' );
var reactify = require( 'reactify' );
var source = require( 'vinyl-source-stream' );

gulp.task( 'browserify', function () {
	var bundler = browserify( {
		entries: [ './component/app.jsx' ],
		extensions: [ '.jsx' ],
		transform: [ reactify ],
		debug: ( process.env.NODE_ENV === 'production' ) ? false : true
	} );
	return bundler.bundle()
		.pipe( source( 'app.js' ) )
		.pipe( gulp.dest( './compile' ) );
} );
