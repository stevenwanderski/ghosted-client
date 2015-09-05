import Ember from 'ember';

export default Ember.Component.extend({
  issue: null,

  actions: {
    close (issue) {
      issue.set('state', 'closed').save();
    },

    save () {
      issue.save().then(() => {
        this.sendAction('successfulSave', this.get('issue'));
      }, function(errors){
        console.error(errors);
      });
    },

  }
});