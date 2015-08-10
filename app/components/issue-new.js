import Ember from 'ember';

export default Ember.Component.extend({
  issue: null,

  actions: {
    saveIssue (issue) {
      this.sendAction('action', issue);
    },

    cancel () {
      this.sendAction('cancel');
    }
  }

});
