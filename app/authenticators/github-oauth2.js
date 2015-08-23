import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';
import ajax from 'ic-ajax';

export default Base.extend({
  restore (data) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      resolve(data);
    });
  },

  authenticate (options) {
    return this.fetchGithubOauthData().then(this.fetchGithubAccessToken);
  },

  fetchGithubOauthData () {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      let torii = this.container.lookup('torii:main');
      return torii.open('github-oauth2').then(resolve, reject);
    }.bind(this));
  },

  fetchGithubAccessToken (authorization) {
    return ajax({
      url: 'http://localhost:3000/v1/tokens',
      type: 'POST',
      data: {
        code: authorization.authorizationCode
      }
    });
  }
});