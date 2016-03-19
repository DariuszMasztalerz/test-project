/**
 * Uglify - minifies JS files.
 *
 * Actual config is generated by usemin task.
 */
module.exports = function(grunt) {
  'use strict';

  grunt.config('uglify', {
    options: {
      preserveComments: 'some'
    },

    mainjs: {
      files: [{
        dest: '<%= xh.dist %>/js/main.min.js',
        src: '<%= xh.dist %>/js/main.js'
      }]
    }
  });
};
