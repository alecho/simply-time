import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleRunning: function () {
      this.toggleProperty('isRunning');
    }
  }
});
