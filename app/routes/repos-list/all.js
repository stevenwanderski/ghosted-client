import ProtectedRoute from './protected';

export default ProtectedRoute.extend({
  model () {
    return this.modelFor('repos-list');
  }
});
