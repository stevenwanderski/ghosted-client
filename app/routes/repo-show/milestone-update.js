import ProtectedRoute from '../protected';

export default ProtectedRoute.extend({
  model(params) {
    return this.store.find('milestone', params.milestoneId);
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
