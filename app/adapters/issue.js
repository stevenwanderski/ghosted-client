import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://api.github.com',

  urlForQuery (query, modelName) {
    return `${this.host}/repos/[username]/${query.repo_name}/issues?state=all`;
  },

  urlForUpdateRecord (id, modelName, snapshot) {
    return `${this.host}/repos/[username]/${snapshot.get('repo').get('name')}/issues/${snapshot.get('number')}`;
  },

  updateRecord (store, type, snapshot) {
    var data = {};
    var serializer = store.serializerFor(type.modelName);

    serializer.serializeIntoHash(data, type, snapshot);

    var id = snapshot.id;
    var url = this.buildURL(type.modelName, id, snapshot, 'updateRecord');

    return this.ajax(url, "PATCH", { data: data });
  }

});