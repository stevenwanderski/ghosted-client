import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://api.github.com',

  urlForQuery (query, modelName) {
    let session = this.container.lookup('simple-auth-session:main');
    if(query.number && query.repoName){
      return `${this.host}/repos/${session.get('secure.username')}/${query.repoName}/milestones/${query.number}`;
    } else if (query.repoName) {
      return `${this.host}/repos/${session.get('secure.username')}/${query.repoName}/milestones?state=all`;
    }
  },

  urlForUpdateRecord (id, modelName, snapshot) {
    let session = this.container.lookup('simple-auth-session:main');
    return `${this.host}/repos/${session.get('secure.username')}/${snapshot.get('repo.name')}/milestones/${snapshot.get('number')}`;
  },

  urlForDeleteRecord (id, modelName, snapshot) {
    let session = this.container.lookup('simple-auth-session:main');
    return `${this.host}/repos/${session.get('secure.username')}/${snapshot.get('repo.name')}/milestones/${snapshot.get('number')}`;
  },

  urlForCreateRecord (modelName, snapshot) {
    let session = this.container.lookup('simple-auth-session:main');
    return `${this.host}/repos/${session.get('secure.username')}/${snapshot.get('repo.name')}/milestones`;
  },

  queryRecord (something, modelType, query) {
    let session = this.container.lookup('simple-auth-session:main');
    let url = `${this.host}/repos/${session.get('secure.username')}/${query.repoName}/milestones/${query.number}`;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      jQuery.getJSON(url).then(function(data) {
        Ember.run(null, resolve, data);
      }, function(jqXHR) {
        jqXHR.then = null; // tame jQuery's ill mannered promises
        Ember.run(null, reject, jqXHR);
      });
    });
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