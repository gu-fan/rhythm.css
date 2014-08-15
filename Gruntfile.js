module.exports = function (grunt) {
    'use strict';

    var path = require('path');

  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    cssPath: path.join(__dirname, 'dist/css/rhythm.css'),
    synPath: path.join(__dirname, 'syntax/molokai.css'),
    mathPath: '/usr/local/lib/python2.7/dist-packages/docutils/writers/html4css1/math.css',
    cssLink: 'http://rykka.github.io/rhythm.css/dist/css/rhythm.css',
    synLink: 'http://rykka.github.io/rhythm.css/syntax/molokai.css',
    mathLink: 'http://rykka.github.io/rhythm.css/math/math.css',
    banner: '/*!\n' +
            ' * Rhythm.css v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright 2014-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n' +
            ' */\n',

    // Task configuration.
    clean: {
      dist: ['dist']
    },

    less: {
      compileCore: {
        options: {
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: '<%= pkg.name %>.css.map',
          sourceMapFilename: 'dist/css/<%= pkg.name %>.css.map'
        },
        src: 'less/rhythm.less',
        dest: 'dist/css/<%= pkg.name %>.css'
      }
    },

    cssmin: {
      options: {
        compatibility: 'ie8',
        keepSpecialComments: '*',
        noAdvanced: true
      },
      minify: {
        src: 'dist/css/<%= pkg.name %>.css',
        dest: 'dist/css/<%= pkg.name %>.min.css'
      }
    },

    usebanner: {
      options: {
        position: 'top',
        banner: '<%= banner %>'
      },
      files: {
        src: 'dist/css/*.css'
      }
    },



    watch: {
      less: {
        files: 'less/**/*.less',
        tasks: 'less'
      }
    },


    exec: {
      npmUpdate: {
        command: 'npm update'
      },
      test2: {
        command: 'rst2html.py doc/wired_article.rst ' + 
                    '--stylesheet=<%= cssPath %>,<%= synPath %> ' +
                    '--syntax-highlight=short ' +
                    '--link-stylesheet ' +
                    '> test/article.html ' 
      },
      test1: {
        command: 'rst2html.py doc/rst_syntax.rst ' + 
                    '--stylesheet=<%= cssPath %>,<%= synPath %> ' +
                    '--syntax-highlight=short ' +
                    '--link-stylesheet ' +
                    '> test/rst_syntax.html ' 
      },
      test0: {
        command: 'rst2html.py README.rst ' + 
                    '--stylesheet=<%= cssPath %>,<%= synPath %> ' +
                    '--syntax-highlight=short ' +
                    '--link-stylesheet ' +
                    '> test/index.html ' 
      },
      sed_syn: {
        command: 'sed -i s@<%= cssPath %>@<%= cssLink %>@ test/*.html ' 
        + '&&' +  ' sed -i s@<%= synPath %>@<%= synLink %>@ test/*.html' 
        + '&&' +  ' sed -i s@<%= mathPath %>@<%= mathLink %>@ test/*.html' 
      },
      echo_sed: {
        command: 'echo <%= sysPath %>'
      },
      browse: {
        command: 'firefox test/*.html' 
      },
    }
  });


  // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });
  require('time-grunt')(grunt);

  // CSS distribution task.
  grunt.registerTask('less-compile', ['less']);

  grunt.registerTask('build', ['less-compile', 'usebanner','cssmin']);

  // Full distribution task.
  grunt.registerTask('dist', ['clean', 'build']);

  grunt.registerTask('test', ['exec:test0', 'exec:test1','exec:test2']);
  grunt.registerTask('testNorm', ['test', 'exec:browse']);
  grunt.registerTask('testLink', ['test', 'exec:sed_syn', 'exec:browse']);
  

  // Default task.
  grunt.registerTask('default', ['dist', 'testNorm']);

};
