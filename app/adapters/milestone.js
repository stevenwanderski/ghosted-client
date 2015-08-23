import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({

  urlForQuery (query, modelName) {
    if (query.repo_id) {
      let url = `${this.host}/${this.namespace}/repos/${query.repo_id}/milestones`;
      delete query.repo_id;
      return url;
    }
    return this._super(arguments);
  },

  urlForCreateRecord (modelName, snapshot) {
    return `${this.host}/${this.namespace}/repos/${snapshot.get('repo_id')}/milestones`;
  }

});