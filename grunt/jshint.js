module.exports = {
  options: {
    jshintrc: 'grunt/.jshintrc',
    reporter: require('jshint-stylish')
  },

  all: [
    'Gruntfile.js',
    'grunt/*.js',
    'src/**/*.js',
    'test/**/*.js'
  ]
};