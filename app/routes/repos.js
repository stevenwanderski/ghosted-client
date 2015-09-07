import ProtectedRoute from './protected';

export default ProtectedRoute.extend({
  model () {
    if(this.get('session.isAuthenticated')){
      // If favorite repos exist, transition to the favorites page
      this.store.find('repo', { favorite: true }).then((repos) => {
        if(repos.get('length') > 0){
          this.transitionTo('repos-favorites');
        }else{
          this.transitionTo('repos-all');
        }
      });
    }
  }
});
