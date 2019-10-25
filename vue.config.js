module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://buqiyuan.xyz/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
          // 这里理解成用'/api'代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://xxx.xxx.xxx.xx:8081/user/add'，直接写‘/api/user/add’即可
        }
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? 'mi-shop/'
    : '/'
}
