module.exports = function (grunt) {


  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
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
      }
    }
  });


  // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });
  require('time-grunt')(grunt);

  // CSS distribution task.
  grunt.registerTask('less-compile', ['less']);

  grunt.registerTask('dist-css', ['less-compile', 'usebanner','cssmin']);

  // Full distribution task.
  grunt.registerTask('dist', ['clean', 'dist-css']);

  // Default task.
  grunt.registerTask('default', ['dist']);

};
