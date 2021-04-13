module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: "http://localhost:3000",
    disableHostCheck: true,
    clientLogLevel: 'warning',
    inline: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    },
  }
}
