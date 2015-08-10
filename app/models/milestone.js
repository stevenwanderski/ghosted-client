import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  state: DS.attr('string', { defaultValue: 'open' }),
  number: DS.attr('number'),
  weight: DS.attr('number'),

  repo: DS.belongsTo('repo')
});
