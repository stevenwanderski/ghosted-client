import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://api.github.com',

  buildURL: function(modelName, id, snapshot, requestType, query) {
    return `${this.host}/user/repos?affiliation=owner`;
  }
});