import { moduleForModel, test } from 'ember-qunit';

moduleForModel('recipe', 'Unit | Model | recipe', {
  // Specify the other units that are required for this test.
  needs: ['model:concoction-type']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
