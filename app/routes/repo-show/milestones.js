import ProtectedRoute from '../protected';

export default ProtectedRoute.extend({
  model(params) {
    let repo = this.modelFor('repo-show');
    return this.store.find('milestone', { repo_id: repo.get('id') });
  },

  actions: {
    deleteMilestone (milestone) {
      milestone.destroyRecord().then(function(){
        alert('Successfully removed!');
      });
    }
  }
});
