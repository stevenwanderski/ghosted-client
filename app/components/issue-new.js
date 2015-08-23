import Ember from 'ember';

export default Ember.Component.extend({
  issue: null,

  actions: {
    saveIssue (issue) {
      this.sendAction('submit', issue);
    },

    cancel () {
      this.sendAction('cancel');
    }
  }

});
