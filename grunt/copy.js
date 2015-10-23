module.exports = {
  all: {
    files: [
      {
        expand: true,
        cwd: 'src/',
        src: ['*/**/*.html'],
        dest: 'dist/',
        filter: 'isFile'
      }
    ]
  },

  dev: {
    options: {
      process: function(content, srcpath) {
        return '(function() {\n' +
          '\'use strict\';\n' +
          content + '\n' +
          '})();';
      }
    },
    files: [
      {
        expand: true,
        cwd: 'src/',
        src: '**/*.js',
        dest: 'dist/',
        filter: 'isFile'
      }
    ]
  },

  devLibs: {
    files: [
      {
        src: 'bower_components/jquery/dist/jquery.js',
        dest: 'dist/libs/jquery/jquery.js'
      },
      {
        expand: true,
        cwd: 'bower_components/bootstrap/dist/',
        src: [
          'css/bootstrap.css',
          'css/bootstrap-theme.css',
          'js/bootstrap.js',
          'fonts/*'
        ],
        dest: 'dist/libs/bootstrap/',
        filter: 'isFile'
      }
    ]
  },

  prodLibs: {
    files: [
      {
        src: 'bower_components/jquery/dist/jquery.min.js',
        dest: 'dist/libs/jquery/jquery.min.js'
      },
      {
        expand: true,
        cwd: 'bower_components/bootstrap/dist/',
        src: [
          'css/bootstrap.min.css',
          'css/bootstrap-theme.min.css',
          'js/bootstrap.min.js',
          'fonts/*'
        ],
        dest: 'dist/libs/bootstrap/',
        filter: 'isFile'
      }
    ]
  }
};