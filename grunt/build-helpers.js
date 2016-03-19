/**
 * Build Helpers - smaller task that make up the build logic.
 *
 * Some of them can be used standalone if you need them (though you shouldn't).
 */
module.exports = function(grunt) {
  'use strict';

  grunt.registerTask('build-html', [
    'includereplace',
    'jsbeautifier:html'
  ]);

  grunt.registerTask('_before-build-usemin', [
    'clean:tmp',
    'copy:includes',
    'useminReset',
  ]);

  grunt.registerTask('build-usemin', [
    '_before-build-usemin',
    'useminPrepare:html',
    'concat:generated',
    'usemin',
  ]);

  grunt.registerTask('build-usemin-min', [
    '_before-build-usemin',
    'useminPrepare:htmlmin',
    'concat:generated',
    'uglify:generated',
    'usemin',
  ]);

  grunt.registerTask('build-assets', [
    'newer:copy:assets'
  ]);

  grunt.registerTask('build-css', [
    'sass',
    'postcss'
  ]);

  grunt.registerTask('build-js', [
    'jshint',
    'browserify:build',
    'uglify:mainjs'
  ]);

  grunt.registerTask('build-beautify', [
    'cssbeautifier',
    'search',
    'replace:css',
    'replace:js',
  ]);
};
