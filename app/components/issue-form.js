import Ember from 'ember';

export default Ember.Component.extend({
  issue: null,
  isSaving: false,

  actions: {
    saveIssue (issue) {
      this.set('isSaving', true);
      issue.save().then(() => {
        this.sendAction('successfulSave', this.get('issue'));
      }, function(errors){
        console.error(errors);
      })
      .finally(() => {
        this.set('isSaving', false);
      })
    },

    cancel () {
      this.sendAction('cancel');
    }
  }
});