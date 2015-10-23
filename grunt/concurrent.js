module.exports = {
  options: {
    limit: 10
  },

  dev1: [
    'clean',
    'jshint:all',
    'jscs:all'
  ],
  dev2: [
    'copy:all',
    'copy:devLibs',
    'copy:dev',
    'less:dev'
  ],
  dev3: [
    'includeSource'
  ],

  devJs1: [
    'jshint:all'
  ],
  devJs2: [
    'copy:dev'
  ],

  prod1: [
    'clean',
    'jshint:all'
  ],
  prod2: [
    'copy:all',
    'copy:prodLibs',
    'less:prod',
    'uglify:prod'
  ],
  prod3: [
    'includeSource'
  ],

  prodTest2: [
    'copy:all',
    'copy:prodLibs',
    'less:prod',
    'concat:prod'
  ]
};