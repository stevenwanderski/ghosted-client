import ProtectedRoute from '../../protected';

export default ProtectedRoute.extend({
  model(params) {
    let milestone = this.modelFor('repo-show.milestone-show')
    return this.store.createRecord('issue', { milestone_id: milestone.get('id') });
  },

  actions: {
    successfulSave (issue) {
      this.transitionTo('repo-show.milestone-show.milestone-issues');
    },

    cancel () {
      this.transitionTo('repo-show.milestone-show.milestone-issues');
    }
  }
});
