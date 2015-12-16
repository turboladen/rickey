import Ember from 'ember'

export default Ember.Route.extend({
  model() {
    return this.store.findAll('concoction-type')
  },

  actions: {
    addConcoctionType: function() {
      let concoctionType = this.store.createRecord('concoction-type', {
        name: this.controller.get('name')
      })

      concoctionType.save().then(() => {
        console.log('save successful')
        this.controller.set('name', null)
        this.refresh()
      }).catch(() => {
        console.log('save failed')
      })
    },

    deleteConcoctionType: function(selectedRecord) {
      selectedRecord.destroyRecord().then(() => {
        this.refresh()
      })
    }
  }
})
