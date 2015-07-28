import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    signIn () {
      let route = this;
      this.get('session').authenticate('authenticator:github-oauth2').catch(function(errors){
        // Handle login errors here
      });
    }
  }
});
