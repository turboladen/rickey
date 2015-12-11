import DS from 'ember-data'
import ENV from '../config/environment'

export default DS.JSONAPIAdapter.extend({
  namespace: 'api',
  host: ENV.host,

  // allows the multi-world paths in urls to be underscored
  pathForType: function(type) {
    let underscored = Ember.String.underscore(type)
    return Ember.String.pluralize(underscored)
  },

  // Allows queries to be sent along with a findRecord. Hopefully
  // Ember/EmberData will soon have this build in.
  //
  // ember-data issue: https://github.com/emberjs/data/issues/3596
  urlForFindRecord(id, modelName, snapshot) {
    let url = this._super(...arguments)
    let query = Ember.get(snapshot, 'adapterOptions.query')
    if (query) {
      url += '?' + Ember.$.param(query)
    }

    return url
  }
})
