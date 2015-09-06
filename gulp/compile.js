var gulp = require( 'gulp' );
var NwBuilder = require( 'nw-builder' );

gulp.task( 'compile', [ 'browserify', 'concat', 'less', 'through' ] );
