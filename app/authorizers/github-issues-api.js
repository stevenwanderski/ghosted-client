import Base from 'simple-auth/authorizers/base';

export default Base.extend({
  authorize: function(jqXHR, requestOptions) {
    if(this.session.get('secure.access_token')){
      jqXHR.setRequestHeader('user_id', this.session.get('secure.user_id'));
      jqXHR.setRequestHeader('access_token', this.session.get('secure.access_token'));
    }
  }
});