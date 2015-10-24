import Ember from 'ember';

export default Ember.Component.extend({
  tick: function() {
    if (this.get('isRunning')) {
      this.incrementProperty('seconds');
      this.scheduleTick();
    }
  },
  scheduleTick: function() {
    this._counter = Ember.run.later(this, 'tick', 1000);
  },
  didInsertElement: function() {
    this.set('seconds', 0);
    this.addObserver('isRunning', this, this.tick);
  },
  killCounter: function() {
    Ember.run.cancel(this._counter);
  }
});
