const path = require('path')
const Dotenv = require('dotenv-webpack')
const withImages = require('next-images')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
require('dotenv').config()

module.exports = withImages({
  exportPathMap: () => ({
    '/': { page: '/' }
  }),
  webpack: config => {
    config.plugins = config.plugins || []

    config.plugins = [
      ...config.plugins,

      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      }),

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
    ]

    return config
  }
})
