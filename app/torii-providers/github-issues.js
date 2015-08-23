import ajax from 'ic-ajax';

export default Ember.Object.extend({
  // create a new authorization
  open: function(options) {
    let url = 'http://localhost:3000/auth/github';
    return this.get('popup').open(url)
    .then(function(authData){
      return authData;
    })
    .catch(function(errors){
      console.log('ERRORS!');
      console.log(errors);
    });
  }
});