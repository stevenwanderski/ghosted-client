import Ember from 'ember';
import ajax from 'ic-ajax';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    let repo = this.modelFor('repo-show');
    return this.store.find('issue', { repoName: repo.get('name') })
  }
});
