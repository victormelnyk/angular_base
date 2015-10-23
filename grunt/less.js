module.exports = {
  dev: {
    options: {
      paths: ['src']
    },
    files: [
      {
        expand: true,
        cwd: 'src',
        src: ['**/*.less'],
        dest: 'dist',
        ext: '.css'
      }
    ]
  },
  prod: {
    options: {
      compress: true,
      paths: ['src']
    },
    files: {
      'dist/styles.min.css': 'src/**/*.less'
    }
  }
};