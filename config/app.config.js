
var appRoot = '/';
var apiRoot = 'http://localhost:3000/';

// export app config
module.exports = {
  client: {
    debug: true,
    useExpresCompress: process.env.USE_EXPRESS_COMPRESS,
    head: {
      stylesheets: [],
      scripts: [],
      scriptsWithoutCompress: [],
      addlPathedScripts: [],
      settings: {
        combine: process.env.COMBINE,
        jsCompression: 'uglifyjs'
      }
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
  },
  newrelic: {
    appName: 'Monarch UI',
    licensekey: process.env.NEWRELICLICENSEKEY,
    logFilePath: './nr.log'
  }
};