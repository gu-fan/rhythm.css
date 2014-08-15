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
    rst2html_arg: '--stylesheet=<%= cssPath %>,<%= synPath %> ' +
                      '--syntax-highlight=short ' +
                      '--link-stylesheet ',
    banner: '/*!\n' +
            ' * Rhythm.css v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright 2014-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n' +
            ' */\n',

    // Task configuration.
    clean: {
      dist: 'dist',
      docsDist: 'docs/dist',
      test: 'test'
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
      test0: { command: 'mkdir -p test && rst2html.py README.rst <%= rst2html_arg %> > test/index.html ' },
      test1: { command: 'rst2html.py doc/rst_syntax.rst <%= rst2html_arg %> > test/rst_syntax.html ' },
      test2: { command: 'rst2html.py doc/wired_article.rst <%= rst2html_arg %> > test/article.html ' },
      test3: { command: 'rst2html.py doc/rst_specification.rst <%= rst2html_arg %> > test/specification.html ' },
      test4: { command: 'rst2html.py doc/rst_directives.rst <%= rst2html_arg %> > test/directives.html ' },
      sed_syn: {
        command: 'sed -i s@<%= cssPath %>@<%= cssLink %>@ test/*.html ' 
        + '&&' +  ' sed -i s@<%= synPath %>@<%= synLink %>@ test/*.html' 
        + '&&' +  ' sed -i s@<%= mathPath %>@<%= mathLink %>@ test/*.html' 
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

  grunt.registerTask('test', ['exec:test0', 'exec:test1','exec:test2', 'exec:test3','exec:test4']);
  grunt.registerTask('testNorm', ['test', 'exec:browse']);
  grunt.registerTask('testLink', ['test', 'exec:sed_syn', 'exec:browse']);
  
  // Default task.
  grunt.registerTask('default', ['dist', 'testNorm']);

};
