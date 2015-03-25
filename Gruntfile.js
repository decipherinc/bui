'use strict';

module.exports = function (grunt) {

  var pkg = require('./package.json'),
    BANNER = '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %> - (c) 2014-2015 ' +
      'FocusVision Worldwide - Licensed MIT */\n\n';

  // Project configuration.
  grunt.initConfig({
    pkg: pkg,
    less: {
      demo: {
        files: {
          'demo/css/demo-page-styles.css': 'demo/less/demo-' +
          'page-specific.less'
        }
      },
      main: {
        options: {
          banner: BANNER
        },
        files: {
          'dist/bui.css': 'less/bui.less'
        }
      },
      min: {
        options: {
          compress: true,
          banner: BANNER
        },
        files: {
          'dist/bui.min.css': 'less/bui.less'
        }
      }
    },
    watch: {
      demo: {
        files: ['demo/less/demo-page-specific.less', 'less/*.less'],
        tasks: ['less:main', 'less:demo']
      },
      main: {
        files: ['less/*.less'],
        tasks: ['less:main']
      }
    },
    devUpdate: {
      options: {
        updateType: 'prompt',
        semver: false
      },
      main: {}
    },
    bump: {
      options: {
        files: [
          'package.json',
          'bower.json'
        ],
        updateConfigs: ['pkg'],
        commitMessage: 'Release v%VERSION%',
        commitFiles: [
          'package.json',
          'bower.json',
          'dist/*'
        ],
        createTag: true,
        tagName: 'v%VERSION%',
        tagMessage: 'Version %VERSION%',
        push: false,
        gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d'
      }
    },
    clean: {
      demo: 'demo/support/'
    },
    copy: {
      demo: {
        files: [
          {
            cwd: 'node_modules/bootstrap/dist/',
            src: 'css/**',
            dest: 'demo/support/bootstrap/',
            expand: true
          },
          {
            src: '**',
            cwd: 'dist/',
            dest: 'demo/support/bui/',
            expand: true
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-dev-update');
  grunt.loadNpmTasks('grunt-bump');

  grunt.registerTask('release', 'Bump version & release', function (target) {
    if (!target) {
      return grunt.fail.warn('Unable to release without valid target.  ' +
      'Targets are one of "patch", "minor", or "major"');
    }
    grunt.task.run('bump-only:' + target);
    grunt.task.run('build');
    grunt.task.run('bump-commit');
  });

  grunt.registerTask('default', 'Compile LESS', ['build']);
  grunt.registerTask('demo', 'Build demo', [
    'build',
    'less:demo',
    'clean:demo',
    'copy:demo'
  ]);
  grunt.registerTask('build', 'Compile LESS', [
    'less:main',
    'less:min'
  ]);
  grunt.registerTask('watch-demo',
    'Watch demo LESS file(s) and recompile upon change', ['watch:demo']);

};
