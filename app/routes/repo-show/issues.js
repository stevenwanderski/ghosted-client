import ProtectedRoute from '../protected';
import ajax from 'ic-ajax';
import ENV from 'github-issues/config/environment';

export default ProtectedRoute.extend({
  model(params) {
    let repo = this.modelFor('repo-show');
    return this.store.find('issue', { repo_id: repo.get('id') });
  },

  actions: {
    saveWeights (weights) {
      ajax({
        url: `${ENV.apiHost}/v1/issues/weights`,
        method: 'PUT',
        data: { weights: weights }
      })
      .then(() => {
        this.flashMessages.success('Saved 😁');
      })
      .catch((errors) => {
        this.flashMessages.danger('Failed 😞');
      });
    }
  }
});
