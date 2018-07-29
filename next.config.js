const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const WebPWebpackPlugin = require('webp-webpack-plugin')
const withImages = require('next-images')

module.exports = withImages({
  webpack: config => {
    config.plugins.push(
      new WebPWebpackPlugin({
        match: /(jpe?g|png)$/,
        webp: {
          quality: 80
        }
      })
    )

    config.plugins.push(
      new SWPrecacheWebpackPlugin({
        verbose: true,
        staticFileGlobsIgnorePatterns: [/\.next\//],
        runtimeCaching: [
          {
            handler: 'networkFirst',
            urlPattern: /^https?.*/
          }
        ]
      })
    )

    return config
  }
})
