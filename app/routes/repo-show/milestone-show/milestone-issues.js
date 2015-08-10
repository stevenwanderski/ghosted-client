import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    let repo = this.modelFor('repo-show');
    let milestone = this.modelFor('repo-show.milestone-show')
    return this.store.query('issue', { repoName: repo.get('name'), milestoneNumber: milestone.get('number') });
  }
});
