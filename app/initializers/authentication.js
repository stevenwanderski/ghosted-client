import GithubOauth2Authorizer from '../authorizers/github-oauth2';

export default {
  name:       'authentication',
  before:     'simple-auth',
  initialize: function(container, application) {
    application.register('authorizer:github-oauth2', GithubOauth2Authorizer);
  }
};