/*!
 * Bui's Gruntfile - handles bui's less files and demo-page-specific files (for the pattern library website)
 * http://decipher-design.com/bui
 */
'use strict';

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    less: {
      demo: {
        files: {
          "demo-site/styles/demo-page-styles.css": "demo-site/styles/demo-page-specific.less"
        }
      },
      main: {
        files: {
          "dist/bui-styles.css": "bui-less/bui-styles.less"
        }
      },
      min: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "dist/bui-styles.min.css": "bui-less/bui-styles.less"
        }
      }
    },
    watch: {
      demo: {
        files: ['demo-site/styles/demo-page-specific.less', 'bui-less/*.less'],
        tasks: ['less:main', 'less:demo']
      },
      main: {
        files: ['bui-less/*.less'],
        tasks: ['less:main']
      }
    },
    'bower-install-simple': {
      options: {
        directory: 'support/'
      },
      main: {}
    },
    devUpdate: {
      options: {
        updateType: 'prompt',
        semver: false
      },
      main: {}
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bower-install-simple');
  grunt.loadNpmTasks('grunt-dev-update');

  // Default task(s).
  grunt.registerTask('demo', ['build', 'less:demo']);
  grunt.registerTask('build', ['bower-install-simple', 'less:main', 'less:min']);
  grunt.registerTask('default', ['build']);
  grunt.registerTask('watch', ['watch:main']);
  grunt.registerTask('watch-demo', ['watch:demo']);

};
