import ProtectedRoute from '../protected';

export default ProtectedRoute.extend({
  model(params) {
    let repo = this.modelFor('repo-show');
    return this.store.createRecord('milestone', { repo_id: repo.get('id') });
  },

  actions: {
    successfulSave () {
      this.transitionTo('repo-show.milestones');
    },

    cancel () {
      this.transitionTo('repo-show.milestones');
    }
  }
});
