module.exports ={
   chainWebpack: config => {
        const oneOfsMap = config.module.rule('scss').oneOfs.store
        oneOfsMap.forEach(item => {
          item
            .use(['style-loader',
            'css-loader',
            'sass-loader'])
            .loader('sass-resources-loader')
            .options({
              // Or array of paths
              resources: ['./src/static/scss/_minix.scss', './src/static/scss/common.scss']
            })
            .end()
        })
    }, 
    // plugins: {
    //   'autoprefixer': {
    //     browsers: ['Android >= 4.0', 'iOS >= 7']
    //   },
    //   'postcss-pxtorem': {
    //     rootValue: 16,//结果为：设计稿元素尺寸/16，比如元素宽320px,最终页面会换算成 20rem
    //     propList: ['*']
    //   }
    // },
    devServer: {
      // open: process.platform === 'darwin',
      // host: 'localhost',
      // open: true, //配置自动启动浏览器
      proxy: {
        '/api': {
          target: 'http://169.254.25.25:7002', //对应自己的接口
          pathRewrite:{
            "^/api":""
          }
        }
      }
     },
     configureWebpack: {
      externals: {
        'AMap': 'AMap' // 高德地图配置
      }
    }
  
}