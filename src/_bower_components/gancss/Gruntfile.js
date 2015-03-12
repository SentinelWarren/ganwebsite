module.exports = function(grunt) {
    grunt.initConfig({

        sass: {
            files: {
                'build/gancss.css': 'src/scss/gancss.scss'
            },

            prod: {
                options: {
                    style: 'compressed'
                },
                files: '<%= sass.files %>'
            }
        },
        watch: {
            livereload: {
                // Here we watch the files the sass task will compile to
                // These files are sent to the live reload server after sass compiles to them
                options: { livereload: true },
                files: ['docs/**/*'],
            },
            css: {
                files: 'src/scss/**/*.scss',
                tasks: ['sass', 'autoprefixer', 'hologram'],
                options: {
                    spawn: false
                }
            },
            hologram: {
                files: ['doc_assets/**/*.html', 'src/**/*.md'],
                tasks: 'hologram'
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 version']
            },
            single_file: {
                options: {
                    // Target-specific options go here.
                },
                src: 'build/gancss.css',
                dest: 'build/gancss.css'
            }
        },
        cssmin: {
            prod: {
                files: {
                    'build/gancss.css': [
                        'build/gancss.css'
                    ]
                }
            }
        },
        hologram: {
            generate: {
                options: {
                    config: 'config.yml'
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    keepalive: true,
                    base: 'docs'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-hologram');

    grunt.registerTask('copy_fonts', function() {
        grunt.file.mkdir('build/fonts');
        grunt.file.copy('src/fonts/icons.ttf', 'build/fonts/icons.ttf');
        grunt.file.copy('src/fonts/icons.woff', 'build/fonts/icons.woff');

    });

    grunt.registerTask('default', ['build', 'watch']);

    grunt.registerTask('build', ['sass:prod', 'autoprefixer:single_file', 'cssmin:prod', 'copy_fonts', 'hologram']);
};
