// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

console.log('🔥 프록시 설정 적용됨!');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:4000',
      changeOrigin: true,
    })
  );
};
