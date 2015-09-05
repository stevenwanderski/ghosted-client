import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', { path: '/' });
  this.route('repos-favorites', { path: 'repos/favorites' });
  this.route('repos-all', { path: 'repos/all' });
  this.route('repo-show', { path: 'repos/:id' }, function(){
    this.route('issues', { path: 'issues' });
    this.route('issue-update', { path: 'issues/:issueId' });
    this.route('issue-new', { path: 'issues/new' });
    this.route('milestones', { path: 'milestones' });
    this.route('milestone-new', { path: 'milestones/new' });
    this.route('milestone-show', { path: 'milestones/:milestoneId' }, function(){
      this.route('milestone-issues', { path: 'issues' });
      this.route('issue-new', { path: 'issues/new' });
      this.route('issue-update', { path: 'issues/:issueId' });
    });
  });
});

export default Router;
