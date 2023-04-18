'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const {
  createEmberCLIConfig,
  createWebpackConfig,
} = require('ember-cli-bundle-analyzer/create-config');
const { defaultsDeep } = require('ember-cli-lodash-subset');
const { Webpack } = require('@embroider/webpack');

module.exports = function (defaults) {
  const app = new EmberApp(
    defaults,
    defaultsDeep(
      {
        // your other options are here
        // ...
        sourcemaps: { enabled: true },
      },
      createEmberCLIConfig()
    )
  );

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return require('@embroider/compat').compatBuild(app, Webpack, {
    // your Embroider options...
    packagerOptions: {
      webpackConfig: {
        // any custom webpack options you might have
        ...createWebpackConfig(),
      },
    },
  });
};
