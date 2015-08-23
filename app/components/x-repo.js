import Ember from 'ember';

export default Ember.Component.extend({
  repo: null,

  actions: {
    setFavorite () {
      let repo = this.get('repo');
      let favoriteValue = repo.get('favorite');
      repo.set('favorite', !favoriteValue);
      repo.save();
    }
  }
});
