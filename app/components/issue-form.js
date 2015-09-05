import Ember from 'ember';

export default Ember.Component.extend({
  issue: null,

  actions: {
    saveIssue (issue) {
      issue.save().then(() => {
        this.sendAction('successfulSave', this.get('issue'));
      }, function(errors){
        console.error(errors);
      });
    },

    cancel () {
      this.sendAction('cancel');
    }
  }
});