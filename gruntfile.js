/*!
 * Bui's Gruntfile - Triggers Bootstrap Gruntfile when compiling.
 * http://decipher-design.com/bui
 */

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            lib: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    // target.css file: source.less file
                    "demo-page-css/demo-page-styles.css": "bui-less/demo-page-specific.less"
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
                    "bui-css/bui-styles.css": "bui-less/style.less"
                }
            }
        },
        watch: {
            libSpecificStyles: {
                files: ['bui-less/demo-page-specific.less'],
                tasks: ['less:lib'],
                options: {
                    nospawn: true
                }
            },
            bui: {
                files: ['bui-less/*.less', '!bui-less/demo-page-specific.less'],
                tasks: ['less:bui'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['watch', 'less']);

};