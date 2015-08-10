import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://api.github.com',

  urlForQuery (query, modelName) {
    let session = this.container.lookup('simple-auth-session:main');
    if(query.repoName && query.milestoneNumber){
      return `${this.host}/repos/${session.get('secure.username')}/${query.repoName}/issues?milestone=${query.milestoneNumber}`;
    } else if (query.repoName) {
      return `${this.host}/repos/${session.get('secure.username')}/${query.repoName}/issues?state=all`;
    }
  },

  urlForUpdateRecord (id, modelName, snapshot) {
    let session = this.container.lookup('simple-auth-session:main');
    return `${this.host}/repos/${session.get('secure.username')}/${snapshot.get('repo.name')}/issues/${snapshot.get('number')}`;
  },

  urlForCreateRecord (modelName, snapshot) {
    let session = this.container.lookup('simple-auth-session:main');
    return `${this.host}/repos/${session.get('secure.username')}/${snapshot.get('repo.name')}/issues`;
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