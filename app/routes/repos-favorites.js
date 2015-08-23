import ProtectedRoute from './protected';

export default ProtectedRoute.extend({
  model () {
    return this.store.filter('repo', { favorite: true }, function(repo){
      return repo.get('favorite');
    });
  }
});
