/* global module:false */
module.exports = function(grunt) {
  var port = grunt.option('port') || 8000;
  var base = grunt.option('base') || '.';

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      banner:
        '/*!\n' +
        ' * reveal.js <%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd, HH:MM") %>)\n' +
        ' * http://lab.hakim.se/reveal-js\n' +
        ' * MIT licensed\n' +
        ' *\n' +
        ' * Copyright (C) 2016 Hakim El Hattab, http://hakim.se\n' +
        ' */'
    },

    sass: {
      core: {
        files: {
          'css/reveal.css': 'css/reveal.scss',
        }
      },
      themes: {
        files: [
          {
            expand: true,
            cwd: 'css/theme/source',
            src: ['*.scss'],
            dest: 'css/theme',
            ext: '.css'
          }
        ]
      }
    },

    autoprefixer: {
      dist: {
        src: 'css/reveal.css'
      }
    },

    cssmin: {
      compress: {
        files: {
          'css/reveal.min.css': [ 'css/reveal.css' ]
        }
      }
    },

    connect: {
      server: {
        options: {
          port: port,
          base: base,
          livereload: true,
          open: true
        }
      }
    },

    zip: {
      'reveal-js-presentation.zip': [
        'index.html',
        'css/**',
        'js/**',
        'lib/**',
        'images/**',
        'plugin/**',
        '**.md'
      ]
    },

    watch: {
      js: {
        files: [ 'Gruntfile.js', 'js/reveal.js' ],
        tasks: 'js'
      },
      theme: {
        files: [ 'css/theme/source/*.scss', 'css/theme/template/*.scss' ],
        tasks: 'css-themes'
      },
      css: {
        files: [ 'css/reveal.scss' ],
        tasks: 'css-core'
      },
      html: {
        files: [ '*.html']
      },
      markdown: {
        files: [ '*.md' ]
      },
      options: {
        livereload: true
      }
    }

  });

  // Dependencies
  grunt.loadNpmTasks( 'grunt-contrib-qunit' );
  grunt.loadNpmTasks( 'grunt-contrib-jshint' );
  grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );
  grunt.loadNpmTasks( 'grunt-sass' );
  grunt.loadNpmTasks( 'grunt-contrib-connect' );
  grunt.loadNpmTasks( 'grunt-autoprefixer' );
  grunt.loadNpmTasks( 'grunt-zip' );

  // Default task
  grunt.registerTask( 'default', [ 'css', 'js' ] );

  // Theme CSS
  grunt.registerTask( 'css-themes', [ 'sass:themes' ] );

  // Core framework CSS
  grunt.registerTask( 'css-core', [ 'sass:core', 'autoprefixer', 'cssmin' ] );

  // All CSS
  grunt.registerTask( 'css', [ 'sass', 'autoprefixer', 'cssmin' ] );

  // Package presentation to archive
  grunt.registerTask( 'package', [ 'default', 'zip' ] );

  // Serve presentation locally
  grunt.registerTask( 'serve', [ 'connect', 'watch' ] );
};
