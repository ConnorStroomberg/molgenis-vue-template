var webpackConfig = require('../../build/webpack.test.conf')

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'sinon-chai'],
    reporters: ['spec', 'coverage'],
    files: [
    {{#vuex}}'../../node_modules/es6-promise/dist/es6-promise.auto.js',{{/vuex}}
      '../../node_modules/babel-polyfill/dist/polyfill.js',
      './index.js'],
    preprocessors: {
      './index.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'cobertura', subdir: 'cobertura' }
      ]
    }
  })
}
