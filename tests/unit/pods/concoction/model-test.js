import { moduleForModel, test } from 'ember-qunit';

moduleForModel('concoction', 'Unit | Model | concoction', {
  // Specify the other units that are required for this test.
  needs: ['model:recipe']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
