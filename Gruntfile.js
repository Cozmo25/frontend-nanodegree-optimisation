/*
  Concats, minifies JS and CSS
*/

module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
           /* css: {
                src: ['css/style.css', 'css/media.css', 'css/print.css'],
                dest: ['css/style.concat.css', 'css/media.concat.css', 'css/print.concat.css']
              },*/

            js: {
                src: ['js/*.js'],
                dest: 'js/concat.js'
              }
            },
        uglify: {
            js: {
                src: 'views/js/main.js',
                dest: 'views/js/main.min.js'
                }
            },
        cssmin: {
            css: {
                src: 'css/style.css',
                dest: 'css/style.min.css'
                }
            },
        htmlmin: {                                     // Task
            dist: {                                      // Target
              options: {                                 // Target options
                removeComments: true,
                collapseWhitespace: true
              },
              files: {                                   // Dictionary of files
                'index.min.html': 'index.html'     // 'destination': 'source'
              }
            }
        }
        });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.registerTask('build', ['concat', 'uglify', 'cssmin', 'htmlmin']);
};
