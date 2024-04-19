const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  },
  devServer: {
    allowedHosts: [
      'localhost',
      'http://m8cckcs.128.140.84.10.sslip.io',
    ],
  },

})
