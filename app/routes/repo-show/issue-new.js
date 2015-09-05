import ProtectedRoute from '../protected';

export default ProtectedRoute.extend({
  model(params) {
    let repo = this.modelFor('repo-show');
    return this.store.createRecord('issue', { repo_id: repo.get('id') });
  },

  actions: {
    successfulSave (issue) {
      this.transitionTo('repo-show.issues');
    },

    cancel () {
      this.transitionTo('repo-show.issues');
    }
  }
});
