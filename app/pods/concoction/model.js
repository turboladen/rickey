import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  recipe: DS.belongsTo('recipe'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
