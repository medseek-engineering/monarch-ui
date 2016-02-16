
var appRoot = '/';
var apiRoot = 'http://localhost:3000/';

// export app config
module.exports = {
  client: {
    debug: true,
    head: {
      stylesheets: [],
      scripts: []
    },
    app: {
      root: appRoot,
      api: {
        root: apiRoot
      },
      routes: {
        href: appRoot + 'routes.json'
      }
    }
  },
  server: {
    port: process.env.PORT || 4000
  }
};