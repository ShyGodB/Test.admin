const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'assets',
  lintOnSave: false, // 是否开启语法检测
  devServer: {
      open: true,
      host: '127.0.0.1',
      port: 8080,
      // https: false,
      proxy: {
        "/api": {
            target: process.env.NODE_ENV === "development" ? 'http://127.0.0.1:3001' : 'http://127.0.0.1:3001',
            ws: false,
            changeOrigin: true,
            secure: false,
            pathRewrite: {
                '^/api': ''
            }
        }
    }
  }
})