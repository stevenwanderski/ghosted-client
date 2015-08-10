import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  username: DS.attr('string'),

  issues: DS.hasMany('issue', { async: true })
});
