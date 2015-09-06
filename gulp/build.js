var gulp = require( 'gulp' );
var NwBuilder = require( 'nw-builder' );

gulp.task( 'build', [ 'compile' ], function () {
	var nw = new NwBuilder( {
		files: './compile/**/*',
		platforms: ['win64'],
		version: '0.12.2',
	} );
	return nw.build();
} );
