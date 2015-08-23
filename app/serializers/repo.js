import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  keyForAttribute: function(attr, method) {
    return Ember.String.underscore(attr);
  },

  normalize (typeClass, hash) {
    if (hash.owner) {
      hash.owner = hash.owner.login;
    }
    return this._super.apply(this, arguments);
  }
});
