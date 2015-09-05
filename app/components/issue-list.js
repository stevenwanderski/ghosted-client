import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Component.extend({
  issues: null,
  saveWeights: null,
  issueEditRoute: null,

  didInsertElement () {
    this.$('.issue-list').sortable({
      axis: 'y',
      update: this.sortUpdate.bind(this)
    });
  },

  sortUpdate (event, ui) {
    let weights = [];
    this.$('.issue[data-issue-id]').each(function(index, el){
      weights.push({ id: $(el).attr('data-issue-id'), weight: index });
    });
    this.sendAction('saveWeights', weights);
  },

  openIssues: function(){
    return this.issues.filterBy('state', 'open');
  }.property('issues.@each.state'),

  actions: {
    close(issue) {
      issue.set('state', 'closed').save();
    },

    openIssue(issue) {
      issue.set('state', 'open').save();
    }
  }
});
