import Ember from 'ember';
import ajax from 'ic-ajax';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    var self = this;
    var repo;

    // Get the Repo
    return this.store.find('repo', params.id)
    // Get the Issues from Github
    .then(function(_repo){
      repo = _repo;
      return self.store.find('issue', { repo_name: repo.get('name') });
    })
    // Push the Issues into the Repo
    .then(function(issues){
      repo.get('issues').pushObjects(issues);
      return repo;
    });
    // TODO: Check for Issue weights on private API
  }
});
