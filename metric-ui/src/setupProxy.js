const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/.well-known/openid-configuration',
        createProxyMiddleware({
            target: process.env.IDP_HOST,
            changeOrigin: true
        })
    );
    app.use(
        '/oauth2/token',
        createProxyMiddleware({
            target: process.env.IDP_HOST,
            changeOrigin: true,
            followRedirects: true
        })
    );
    app.use(
        '/userinfo',
        createProxyMiddleware({
            target: process.env.IDP_HOST,
            changeOrigin: true,
            followRedirects: true
        })
    );
    app.use(
        '/metric',
        createProxyMiddleware({
            target: process.env.METRIC_SERVER_HOST,
            changeOrigin: true,
        })
    )
};