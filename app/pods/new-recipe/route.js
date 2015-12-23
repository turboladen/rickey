import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createRecipe: function() {
      console.log(`Got title: ${this.controller.title}`)
      console.log(`Got description: ${this.controller.description}`)
      console.log(`Got directions: ${this.controller.directions}`)
      console.log(`Got yields: ${this.controller.yields}`)
      console.log(`Got yieldsUnit: ${this.controller.yieldsUnit}`)
      let newRecipe = this.store.createRecord('recipe', {
        title: this.controller.title,
        description: this.controller.description,
        directions: this.controller.directions,
        yields: this.controller.yields,
        yieldsUnit: this.controller.yieldsUnit
      })

      newRecipe.save().then(() => {
        console.log('save successful')
      }, function() {
        console.log('save failed')
      })
    }
  }
});
