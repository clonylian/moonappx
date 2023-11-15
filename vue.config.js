const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      proxy: {
        "/moon-server": {
          target: "http://178.16.141.179:8080/moon-server/",
          changeOrigin: true,
          ws: true,
          pathRewrite: { "^/moon-server": "" },
        },
      },
    },
  },
});
