import Base from 'simple-auth/authenticators/base';

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
      torii.open('github-oauth2')
      .then(function(authorization){
        resolve(authorization);
      })
      .catch(function(errors){
        reject(errors);
      });
    }.bind(this));
  },

  fetchGithubAccessToken (authorization) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      resolve({ username: 'foobie', access_token: '123-access' });
    });
  }
});