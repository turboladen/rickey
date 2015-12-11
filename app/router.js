import Ember from 'ember'
import config from './config/environment'

const Router = Ember.Router.extend({
  location: config.locationType
})

Router.map(function() {
  this.route('ingredients')
  this.route('concoction-types')
  this.route('recipes')
  this.route('recipe', { path: '/recipes/:recipe_id' })
})

export default Router
