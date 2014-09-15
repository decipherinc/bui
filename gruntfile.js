/*!
 * Bui's Gruntfile - handles bui's less files and demo-page-specific files (for the pattern library website)
 * http://decipher-design.com/bui
 */
'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        less: {
            lib: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    // target.css file: source.less file
                    "demo-page-css/demo-page-styles.css": "less/demo-page-specific.less"
                }
            },
            buiDemoSite: {
                files: {
                    // target.css file: source.less file
                    "demo-page-css/bui-styles.css": "less/style.less"
                }
            },
            bui: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    // target.css file: source.less file
                    "bui-css/bui-styles-min.css": "less/style.less"
                }
            }
        },
        watch: {
            libSpecificStyles: {
                files: ['less/demo-page-specific.less'],
                tasks: ['less:lib'],
                options: {
                    nospawn: true
                }
            },
            buiDemoSite: {
                files: ['less/*.less', '!less/demo-page-specific.less'],
                tasks: ['less:buiDemoSite'],
                options: {
                    nospawn: true
                }
            },
            bui: {
                files: ['less/*.less', '!less/demo-page-specific.less'],
                tasks: ['less:bui'],
                options: {
                    nospawn: true
                }
            }
        },
        'bower-install-simple': {
            options: {
                directory: 'support/'
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-bower-install-simple');

    // Default task(s).
    grunt.registerTask('default', ['bower-install-simple', 'less']);

};