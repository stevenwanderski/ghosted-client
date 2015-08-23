import ProtectedRoute from '../protected';

export default ProtectedRoute.extend({
  model(params) {
    let repo = this.modelFor('repo-show');
    return this.store.createRecord('milestone', { repo_id: repo.get('id') });
  },

  actions: {
    saveMilestone (model) {
      let route = this;
      model.save().then(function(response){
        route.transitionTo('repo-show.milestones');
      }, function(errors){
        console.error(errors);
      });
    },

    cancel () {
      this.transitionTo('repo-show.milestones');
    }
  }
});
