import ProtectedRoute from '../protected';

export default ProtectedRoute.extend({
  model(params) {
    let repo = this.modelFor('repo-show');
    return this.store.find('milestone', params.milestoneId);
  }
});
