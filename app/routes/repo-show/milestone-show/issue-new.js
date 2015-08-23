import ProtectedRoute from '../../protected';

export default ProtectedRoute.extend({
  model(params) {
    let milestone = this.modelFor('repo-show.milestone-show')
    return this.store.createRecord('issue', { milestone_id: milestone.get('id') });
  },

  actions: {
    saveIssue (issue) {
      let route = this;
      issue.save().then(function(){
        route.transitionTo('repo-show.milestone-show.milestone-issues');
      }, function(errors){
        console.error(errors);
      });
    },

    cancel () {
      this.transitionTo('repo-show.milestone-show.milestone-issues');
    }
  }
});
