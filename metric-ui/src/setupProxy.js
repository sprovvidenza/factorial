const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/.well-known/openid-configuration',
        createProxyMiddleware({
            target: "http://idp:9000",
            changeOrigin: true
        })
    );
    app.use(
        '/oauth2/token',
        createProxyMiddleware({
            target: "http://idp:9000",
            changeOrigin: true,
            followRedirects: true
        })
    );

    app.use(
        '/userinfo',
        createProxyMiddleware({
            target: "http://idp:9000",
            changeOrigin: true,
            followRedirects: true
        })
    );
    app.use(
        '/metric',
        createProxyMiddleware({
            target: "http://metric-server:8080",
            changeOrigin: true,
        })
    )
};