import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  serializeBelongsTo (snapshot, json, relationship) {
    if (relationship.key === 'milestone') {
      json[relationship.key] = snapshot.belongsTo(relationship.key).get('number');
    }
  },

  normalize (typeClass, hash) {
    if (hash.milestone) {
      hash.milestone = hash.milestone.id;
    }
    return this._super.apply(this, arguments);
  }
});
