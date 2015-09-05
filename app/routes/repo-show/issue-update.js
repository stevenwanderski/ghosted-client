import ProtectedRoute from '../protected';

export default ProtectedRoute.extend({
  model(params) {
    return this.store.find('issue', params.issueId);
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
