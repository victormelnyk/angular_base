module.exports = {
  options: {
    process: function(src, filepath) {
      return '// Source: ' + filepath + '\n' +
      '(function() {\n' +
      src + '\n' +
      '})();';
    }
  },
  prod: {
    dest: 'dist/scripts.js',
    src: [
      'src/**/*_module.js',
      'src/**/*.js'
    ]
  }
};
