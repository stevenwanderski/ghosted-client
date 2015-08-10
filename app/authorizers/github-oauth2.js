import Base from 'simple-auth/authorizers/base';

export default Base.extend({
  authorize: function(jqXHR, requestOptions) {
    jqXHR.setRequestHeader("Authorization", `Token ${this.session.get('secure.access_token')}`);
  }
});