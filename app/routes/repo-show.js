import Ember from 'ember';
import ajax from 'ic-ajax';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model (params) {
    return this.store.find('repo', params.name);
  }
});
