// const fetch = require('isomorphic-unfetch');
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  exportPathMap: async function () {
    const paths = {
      '/': { page: '/' },
      '/goddesshouse': { page: '/goddesshouse' },
      '/product': { page: '/product' },
      '/alliance': { page: '/alliance' },
      '/news': { page: '/news' },
      '/post': { page: '/post' },
      '/toolkit': { page: '/toolkit' }
    };
    return paths;
  }
})