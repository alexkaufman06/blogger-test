Blogger.PostsController = Ember.Controller.extend({
  actions: {
    isAlertShowing: false,
    showSocial: function() {
      this.set('isAlertShowing', true);
      alert('WORKED');
    }
  }
});
