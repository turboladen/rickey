import DS from 'ember-data'

export default DS.Model.extend({
  name: DS.attr('string'),
  recipe: DS.belongsTo('recipe'),
  concoction: DS.belongsTo('concoction')
})
