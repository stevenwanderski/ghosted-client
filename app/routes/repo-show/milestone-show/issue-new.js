import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    let repo = this.modelFor('repo-show');
    let milestone = this.modelFor('repo-show.milestone-show')
    return this.store.createRecord('issue', { repo: repo, milestone: milestone });
  },

  actions: {
    saveIssue (issue) {
      let route = this;
      issue.save().then(function(){
        route.transitionTo('repo-show.milestone-show.milestone-issues');
      }, function(errors){
        console.log(errors);
      });
    },

    cancel () {
      this.transitionTo('repo-show.milestone-show.milestone-issues');
    }
  }
});
