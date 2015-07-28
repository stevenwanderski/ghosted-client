import Ember from 'ember';

export default Ember.Component.extend({
  issues: null,
  repo: null,

  didInsertElement () {
    var sortable = Sortable.create(issues, {
      handle: '.handle'
    });
  },

  openIssues: function(){
    return this.issues.filterBy('state', 'open');
  }.property('issues.@each.state'),

  closedIssues: function(){
    return this.issues.filterBy('state', 'closed');
  }.property('issues.@each.state'),

  actions: {
    closeIssue(issue) {
      issue.set('state', 'closed').save();
    },

    openIssue(issue) {
      issue.set('state', 'open').save();
    }
  }

});
