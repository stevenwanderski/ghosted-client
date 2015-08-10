import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', { path: '/' });
  this.route('repos-list', { path: 'repos' });
  this.route('repo-show', { path: 'repos/:name' }, function(){
    this.route('issues', { path: 'issues' });
    this.route('milestones', { path: 'milestones' });
    this.route('milestone-new', { path: 'milestones/new' });
    this.route('milestone-show', { path: 'milestones/:number/' }, function(){
      this.route('milestone-issues', { path: 'issues' });
      this.route('issue-new', { path: 'issues/new' });
    });
  });
});

export default Router;
