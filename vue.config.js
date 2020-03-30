module.exports = {
  runtimeCompiler: true,
  devServer: {
    port:8080,
    proxy:{
      '/':{
        target:'http://192.168.1.106:8099',
        changeOrigin:true,
        pathRewrite:{
          '^/':''
        }
      }
    },
    
    disableHostCheck: true,


  }
}