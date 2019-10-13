// next.config.js 
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  cssLoaderOptions: {
    url: false
  },
  env: {
    API_URL: 'https://ftl-frontend-test.herokuapp.com/',
  }
})