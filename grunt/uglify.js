module.exports = {
  prod: {
    options: {
      wrap: true,
      sourceMap: true,
      beautify: false
    },
    files: {
      'dist/scripts.min.js':  [
        'src/**/*_module.js',
        'src/**/*.js'
      ]
    }
  }
};