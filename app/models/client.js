import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  clientCode: DS.attr('string'),
  hourlyRate: DS.attr('number')
});
