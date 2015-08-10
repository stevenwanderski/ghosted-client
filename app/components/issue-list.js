/* global Sortable */
import Ember from 'ember';

export default Ember.Component.extend({
  issues: null,

  didInsertElement () {
    Sortable.create(issues, {
      handle: '.handle'
    });
  },

  actions: {
    closeIssue(issue) {
      issue.set('state', 'closed').save();
    },

    openIssue(issue) {
      issue.set('state', 'open').save();
    }
  }
});
