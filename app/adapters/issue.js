import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  urlForQuery (query, modelName) {
    if (query.milestone_id) {
      let url = `${this.host}/${this.namespace}/milestones/${query.milestone_id}/issues`;
      delete query.milestone_id;
      return url;
    } else if (query.repo_id) {
      let url = `${this.host}/${this.namespace}/repos/${query.repo_id}/issues`;
      delete query.repo_id;
      return url;
    }
    return this._super(arguments);
  },

  urlForCreateRecord (modelName, snapshot) {
    if(snapshot.get('milestone_id')){
      return `${this.host}/${this.namespace}/milestones/${snapshot.get('milestone_id')}/issues`;
    }
    return `${this.host}/${this.namespace}/repos/${snapshot.get('repo_id')}/issues`;
  }

});