import ProtectedRoute from '../../protected';
import ajax from 'ic-ajax';
import ENV from 'github-issues/config/environment';

export default ProtectedRoute.extend({
  model (params) {
    let milestone = this.modelFor('repo-show.milestone-show')
    return this.store.find('issue', { milestone_id: milestone.get('id') });
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
