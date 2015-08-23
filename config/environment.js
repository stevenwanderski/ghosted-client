/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'github-issues',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    'simple-auth': {
      routeAfterAuthentication: 'repos-favorites',
      authorizer: 'authorizer:github-issues-api',
      crossOriginWhitelist: ['http://localhost:3000']
    },

    torii: {
      providers: {
        'github-oauth2': {
          apiKey: 'e7efb6c8bc9dd05dcf70',
          redirectUrl: '/repos',
          scope: 'public_repo'
        }
      }
    }
  };

  if (environment === 'development') {
    ENV.apiHost = 'http://localhost:3000';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
