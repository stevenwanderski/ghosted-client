import Ember from 'ember';

export default Ember.Component.extend({
  milestone: null,
  isSaving: false,

  actions: {
    saveMilestone () {
      this.set('isSaving', true);
      this.get('milestone').save().then(() => {
        this.sendAction('successfulSave', this.get('milestone'));
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