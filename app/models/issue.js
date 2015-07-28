import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  state: DS.attr('string'),
  number: DS.attr('number'),
  weight: DS.attr('number'),

  repo: DS.belongsTo('repo')
});
