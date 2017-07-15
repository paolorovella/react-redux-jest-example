const webpackConfig = require('./config/webpack.config.dev.js');
const snapguidist = require('snapguidist');

module.exports = snapguidist({
  webpackConfig,
  components: 'src/components/**/[A-Z]*/index.js',
});
