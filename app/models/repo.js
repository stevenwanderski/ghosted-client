import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  username: DS.attr('string'),
  openIssuesCount: DS.attr('number'),
  owner: DS.attr('string'),
  favorite: DS.attr('boolean', { defaultValue: false }),
  issuesLoaded: DS.attr('boolean', { defaultValue: false }),

  issues: DS.hasMany('issue', { async: true })
});
