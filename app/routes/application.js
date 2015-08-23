import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    signIn () {
      return this.get('session')
      .authenticate('authenticator:github-oauth2')
      .catch(function(errors){
        console.error('An error occured while trying to authenticate: `authenticator:github-oauth2`');
        alert('No good. Couldn\'t login.');
      });
    }
  }
});
