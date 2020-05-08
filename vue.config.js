module.exports = {
  runtimeCompiler: true,
  devServer: {
    port:8080,
    proxy:{
      '/api':{
        target:'http://localhost:8099',
        changeOrigin:true,
        pathRewrite:{
          '^/api':''
        }
      }
    },
    
    disableHostCheck: true,


  }
}