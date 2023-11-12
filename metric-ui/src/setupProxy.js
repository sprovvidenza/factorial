const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/.well-known/openid-configuration',
        createProxyMiddleware({
            target: 'http://localhost:9000',
            changeOrigin: true,
        })
    );
    app.use(
        '/oauth2',
        createProxyMiddleware({
            target: 'http://localhost:9000',
            changeOrigin: true,
        })
    );
    app.use(
        '/metric',
        createProxyMiddleware({
            target: 'http://localhost:8080',
            changeOrigin: true,
        })
    )
};