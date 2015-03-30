'use strict';

module.exports = function (grunt) {

  grunt.registerTask('release', 'Bump version & release', function (target) {
    if (!target) {
      return grunt.fail.warn('Unable to release without valid target.  ' +
      'Targets are one of "patch", "minor", or "major"');
    }
    grunt.task.run('bump-only:' + target);
    grunt.task.run('build');
    grunt.task.run('bump-commit');
  });

  require('load-grunt-config')(grunt, {
    configPath: 'tasks',
    data: {
      pkg: grunt.file.readJSON('package.json'),
      banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %> - (c) 2014-2015 ' +
        'FocusVision Worldwide - Licensed <%= pkg.license %> */\n\n'
    }
  });

};
