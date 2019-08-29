// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path');
const merge = require('webpack-merge');

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        // or scss
        path.resolve(__dirname, './src/assets/sass/variables.scss'),
        path.resolve(__dirname, './src/assets/sass/utils/_breakpoints.scss'),
        path.resolve(__dirname, './src/assets/sass/utils/_typo.scss'),
      ],
    });
}

module.exports = {
  siteName: 'Kosmonaut: Connected Commerce.',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
      ]
    }
  },
  chainWebpack (config) {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];

    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type));
    });

    config
      .module
      .rule('scss')
      .oneOf('normal')
      .use('postcss-loader')
      .tap(options => merge(options, {
        plugins: (loader) => [
          require('autoprefixer'),
        ]
      }));
  },
  plugins: [
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`,
        modulePath: `src/admin/index.js`
      }
    },
  ]
};
