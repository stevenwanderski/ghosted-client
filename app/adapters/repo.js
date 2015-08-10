import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://api.github.com',

  urlForFindRecord: function(id, modelName, snapshot) {
    let session = this.container.lookup('simple-auth-session:main');
    return `${this.host}/repos/${session.get('secure.username')}/${id}?state=all`;
  },

  urlForFindAll: function(modelName) {
    return `${this.host}/user/repos?affiliation=owner`;
  }
});