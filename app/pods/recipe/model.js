import DS from 'ember-data'

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  directions: DS.attr('string'),
  yields: DS.attr('number'),
  yieldsUnit: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),

  concoctionType: DS.belongsTo('concoction-type', { async: false })
})
