const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  env: {
    CONTENT_API_KEY: '7b7f56ef7ce29367627b12e73b',
    BLOG_URL: 'https://next-ghost-blog-app.herokuapp.com',
    APP_URL: 'https://next-ghost-blog-app.vercel.app',
  },
  compress: true,
  poweredByHeader: false,
  webpack(config) {
    const prod = process.env.NODE_ENV === 'production';
    return {
      ...config,
      mode: prod ? 'production' : 'development',
      devtool: prod ? 'hidden-source-map' : 'eval',
    };
  },
});
