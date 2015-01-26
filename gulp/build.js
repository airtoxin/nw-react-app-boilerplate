var gulp = require( 'gulp' );
var NwBuilder = require( 'node-webkit-builder' );

gulp.task( 'build', [ 'compile' ], function () {
	var nw = new NwBuilder( {
		files: './compile/**/*',
		platforms: [ 'osx64' ],
		version: ( process.env.NODE_ENV === 'production' ) ? 'latest' : 'v0.10.5'
	} );
	return nw.build();
} );
