const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/.netlify/functions/', {
      target: '/.netlify/functions/',
      pathRewrite: {
        '^/\\.netlify/functions': '',
      },
    })
  );
};