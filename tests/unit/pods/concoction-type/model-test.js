import { moduleForModel, test } from 'ember-qunit';

moduleForModel('concoction-type', 'Unit | Model | concoction type', {
  // Specify the other units that are required for this test.
  needs: ['model:recipe', 'model:concoction']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
