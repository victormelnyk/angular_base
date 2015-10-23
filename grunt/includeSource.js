module.exports = {
  options: {
    basePath: 'dist',
    templates: {
      html: {
        js: '<script src="{filePath}"></script>',
        css: '<link rel="stylesheet" type="text/css" href="{filePath}" />'
      }
    }
  },
  all: {
    files: {
      'dist/index.html': 'src/index.html'
    }
  }
};