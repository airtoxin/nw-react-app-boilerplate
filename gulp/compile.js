var gulp = require( 'gulp' );
var NwBuilder = require( 'node-webkit-builder' );

gulp.task( 'compile', [ 'browserify', 'concat', 'less', 'through' ] );
