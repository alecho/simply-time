import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('timer-control', 'Integration | Component | timer counter', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(3);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{timer-control}}`);

  assert.equal(this.$().text().trim(), '0\n\n\n\n  Start');

  this.set('isRunning', true);
  this.render(hbs`{{timer-control isRunning=isRunning}}`);

  assert.equal(this.$().text().trim(), '0\n\n\n\n  Stop');

  // Template block usage:
  this.render(hbs`
    {{#timer-control}}
      template block text
    {{/timer-control}}
  `);

  assert.equal(this.$().text().trim(), '0\n\n\n\n  Start\n\n      template block text');
});
