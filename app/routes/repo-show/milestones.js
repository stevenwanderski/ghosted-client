import Ember from 'ember';
import ajax from 'ic-ajax';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    let repo = this.modelFor('repo-show');
    return this.store.query('milestone', { repoName: repo.get('name') });
  },

  afterModel (model) {
    let repo = this.modelFor('repo-show');
    return model.map(function(milestone){
      return milestone.set('repo', repo);
    });
  },

  actions: {
    deleteMilestone (milestone) {
      milestone.destroyRecord().then(function(){
        alert('Successfully removed!');
      });
    }
  }
});
