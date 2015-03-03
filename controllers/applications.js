Blogger.ApplicationController = Ember.Controller.extend({
  actions: {
    isSocialShowing: false,
    showSocial: function() {
      this.set('isSocialShowing', !this.isSocialShowing);
    },
    hideSocial: function() {
      // this.set('isSocialShowing', false);
    }
  }
});
