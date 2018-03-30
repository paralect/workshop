module.exports = {
  paths: {
    watched: ['source'],
  },
  files: {
    stylesheets: { joinTo: 'styles.css' },
    javascripts: { joinTo: 'scripts.js' },
  },
  npm: {
    styles: {
      'semantic-ui-css': ['semantic.css'],
    },
  },
  conventions: {
    assets: /source\/static/,
  },
};
