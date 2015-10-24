import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('timer-counter', 'Integration | Component | timer counter', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{timer-counter}}`);

  assert.equal(this.$().text().trim(), '0');

  // Template block usage:
  this.render(hbs`
    {{#timer-counter}}
      template block text
    {{/timer-counter}}
  `);

  assert.equal(this.$().text().trim(), '0\n      template block text');
});
