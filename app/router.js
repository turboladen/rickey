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
  this.route('new-recipe', { path: '/recipes/new' })

  this.route('needs-ingredients')
  this.route('concoctions')
  this.route('concoction', { path: '/concoctions/:concoction_id' })
})

export default Router
