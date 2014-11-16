var path = require('path');

module.exports = function(grunt) {

    grunt.initConfig({
        pkg     : grunt.file.readJSON('package.json'),

        watch: {
            options: { 
                spawn: false,
                livereload: true //Extension required - https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei/related
            },
            lessFullBuild: {
                files: ['../css/global.less'],
                tasks: ['less:build']
            }
        },
        less: {
            options: {
                compress: true,
                yuicompress: true
            },
            build:{
                files: [
                    {
                        expand: true,
                        cwd: '../css/',
                        src: ['**/*.less'],
                        dest: '../css/',
                        ext: '.css'
                   }
                ]
            },
            file:{},
            dir:{}
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-import');

    /*
    grunt.event.on('watch', function(action, filepath, target) {
        
    });
    */

    var fs = require('fs');
    var defaultTasks = [];
    
    defaultTasks.push('less:build');
    defaultTasks.push('watch');

    grunt.registerTask('default', defaultTasks);

};